require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { classicalMedievalEra } = require("../src/data/timeline/classical-medieval.ts");
const { classicalEventVideos } = require("../src/data/timeline/classical/videos.ts");
const { indianHistoryTimeline } = require("../src/data/timeline/indian-history.ts");
const { validateHistory } = require("../src/lib/content/validate.ts");
const manifest = require("../docs/classical-video-manifest.json");

test("classical video guides cover every section and map focused lectures to the correct records", () => {
  const periods = classicalMedievalEra.periods;
  const events = periods.flatMap((p) => p.events);
  assert.equal(periods.length, 4);
  assert.equal(events.length, 22);
  assert.equal(manifest.length, 25);
  assert.deepEqual(Object.keys(classicalEventVideos).sort(), events.map((e) => e.id).sort());
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
    assert.equal(video.mode, item.mode);
    assert.equal(video.title, item.title);
    assert.equal(video.durationSeconds, item.durationSeconds);
    assert.equal(video.watchUrl, `https://www.youtube.com/watch?v=${item.sourceVideoId}`);
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
    ["aryabhata", "aryabhata-499"],
    ["brahmagupta", "brahmagupta-628"],
    ["bronze", "bihar-buddha-bronze"],
    ["rani", "rani-ki-vav"],
    ["hampi", "vijayanagara-city"],
  ])
    assert.deepEqual(manifest.find((v) => v.id === `classical-video-${key}`).eventIds, [eventId]);
  const external = manifest.filter((v) => v.mode === "external");
  assert.deepEqual(
    external.map((v) => v.id),
    ["classical-video-rani"],
  );
  assert.match(external[0].context, /360-degree/);
  assert.match(manifest.find((v) => v.id === "classical-video-hampi").context, /sixteenth century/);
  assert.match(manifest.find((v) => v.id === "classical-video-bronze").description, /69.222/);
  assert.equal(
    validateHistory(indianHistoryTimeline).filter((i) => i.severity === "error").length,
    0,
  );
});
