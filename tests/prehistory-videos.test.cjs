require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { prehistoricIndiaEra } = require("../src/data/timeline/prehistoric-india.ts");
const { validateHistory } = require("../src/lib/content/validate.ts");
const { indianHistoryTimeline } = require("../src/data/timeline/indian-history.ts");
const manifest = require("../docs/prehistory-video-manifest.json");

test("every prehistoric period has correctly mapped viewing and verified publisher embeds", () => {
  assert.equal(prehistoricIndiaEra.periods.length, 8);
  const videos = prehistoricIndiaEra.periods.flatMap((p) => p.videos);
  assert.equal(videos.length, 9);
  assert.equal(manifest.length, 8);
  for (const period of prehistoricIndiaEra.periods) {
    assert.ok(period.videos.length);
    for (const event of period.events) assert.deepEqual(event.videos, period.videos);
    for (const video of period.videos.filter((v) => v.mode === "youtube")) {
      const record = manifest.find((item) => item.videoId === video.videoId);
      assert.equal(record.periodId, period.id);
      assert.equal(record.title, video.title);
      assert.equal(record.durationSeconds, video.durationSeconds);
      assert.match(record.embedEvidence, /playableInEmbed=true/);
    }
  }
  assert.equal(videos.find((v) => v.id === "video-bhimbetka-nptel").mode, "external");
  assert.equal(
    validateHistory(indianHistoryTimeline).filter((i) => i.severity === "error").length,
    0,
  );
});

test("content validation rejects unsafe or mismatched video references", () => {
  const era = structuredClone(prehistoricIndiaEra);
  era.periods[0].videos[0] = {
    ...era.periods[0].videos[0],
    videoId: "bad/id",
    watchUrl: "javascript:alert(1)",
    durationSeconds: -1,
  };
  const errors = validateHistory([era]);
  assert.ok(errors.some((e) => e.message.includes("HTTPS source")));
  assert.ok(errors.some((e) => e.message.includes("Invalid YouTube")));
  assert.ok(errors.some((e) => e.message.includes("positive seconds")));
});
