require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { colonialIndiaEra } = require("../src/data/timeline/colonial-india.ts");
const { colonialEventVideos } = require("../src/data/timeline/colonial/videos.ts");
const { indianHistoryTimeline } = require("../src/data/timeline/indian-history.ts");
const { validateHistory } = require("../src/lib/content/validate.ts");
const manifest = require("../docs/colonial-video-manifest.json");

test("colonial video guides cover every section and map focused lectures to the correct records", () => {
  const periods = colonialIndiaEra.periods;
  const events = periods.flatMap((p) => p.events);
  assert.equal(periods.length, 5);
  assert.equal(events.length, 36);
  assert.equal(manifest.length, 34);
  assert.deepEqual(Object.keys(colonialEventVideos).sort(), events.map((e) => e.id).sort());
  for (const period of periods) {
    assert.ok(period.videos.length);
    for (const event of period.events) {
      assert.ok(event.videos.length);
      for (const video of event.videos) assert.ok(period.videos.some((v) => v.id === video.id));
    }
  }
  for (const item of manifest) {
    const video = periods.flatMap((p) => p.videos).find((v) => v.id === item.id);
    assert.ok(video);
    assert.equal(video.mode, "youtube");
    assert.equal(video.title, item.title);
    assert.equal(video.durationSeconds, item.durationSeconds);
    assert.equal(video.watchUrl, `https://www.youtube.com/watch?v=${item.videoId}`);
    assert.match(item.embedEvidence, /playableInEmbed=true/);
    assert.deepEqual(
      item.eventIds.slice().sort(),
      events
        .filter((e) => e.videos.some((v) => v.id === item.id))
        .map((e) => e.id)
        .sort(),
    );
  }
  for (const [key, eventId] of [
    ["famine-1943", "colonial-bengal-famine-1943"],
    ["phule", "colonial-girls-education"],
    ["terminus", "colonial-terminus"],
    ["act-1919", "colonial-act-1919"],
    ["act-1935", "colonial-act-1935"],
    ["missions", "colonial-transfer-1946"],
  ])
    assert.deepEqual(manifest.find((v) => v.id === `colonial-video-${key}`).eventIds, [eventId]);
  assert.match(manifest.find((v) => v.id === "colonial-video-phule").context, /dramatisation/);
  assert.match(
    manifest.find((v) => v.id === "colonial-video-company-context").context,
    /not a dedicated investigation/,
  );
  assert.match(
    manifest.find((v) => v.id === "colonial-video-birsa").context,
    /incorrectly says early nineteenth/,
  );
  assert.equal(
    validateHistory(indianHistoryTimeline).filter((i) => i.severity === "error").length,
    0,
  );
});
