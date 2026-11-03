require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { ancientIndiaEra } = require("../src/data/timeline/ancient-india.ts");
const { ancientEventVideos } = require("../src/data/timeline/ancient/videos.ts");
const { indianHistoryTimeline } = require("../src/data/timeline/indian-history.ts");
const { validateHistory } = require("../src/lib/content/validate.ts");
const manifest = require("../docs/ancient-video-manifest.json");

test("ancient video guides cover every section and map focused lectures to the correct records", () => {
  const periods = ancientIndiaEra.periods;
  const events = periods.flatMap((p) => p.events);
  assert.equal(periods.length, 4);
  assert.equal(events.length, 15);
  assert.equal(manifest.length, 11);
  assert.deepEqual(Object.keys(ancientEventVideos).sort(), events.map((e) => e.id).sort());
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
  assert.deepEqual(manifest.find((v) => v.id === "ancient-video-dholavira").eventIds, [
    "dholavira-water-city",
  ]);
  assert.deepEqual(manifest.find((v) => v.id === "ancient-video-chandogya").eventIds, [
    "early-upanishads",
  ]);
  assert.deepEqual(manifest.find((v) => v.id === "ancient-video-painted-grey-ware").eventIds, [
    "painted-grey-ware",
  ]);
  assert.match(
    manifest.find((v) => v.id === "ancient-video-chanting").context,
    /not ancient audio/,
  );
  assert.equal(
    validateHistory(indianHistoryTimeline).filter((i) => i.severity === "error").length,
    0,
  );
});
