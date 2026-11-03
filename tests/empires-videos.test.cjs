require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { secondUrbanizationEra } = require("../src/data/timeline/second-urbanization.ts");
const { empireEventVideos } = require("../src/data/timeline/empires/videos.ts");
const { indianHistoryTimeline } = require("../src/data/timeline/indian-history.ts");
const { validateHistory } = require("../src/lib/content/validate.ts");
const manifest = require("../docs/empires-video-manifest.json");

test("empire video guides cover every section and map focused lectures to the correct records", () => {
  const periods = secondUrbanizationEra.periods;
  const events = periods.flatMap((p) => p.events);
  assert.equal(periods.length, 4);
  assert.equal(events.length, 17);
  assert.equal(manifest.length, 14);
  assert.deepEqual(Object.keys(empireEventVideos).sort(), events.map((e) => e.id).sort());
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
    ["sanchi", "sanchi-mauryan-core"],
    ["lumbini", "ashoka-lumbini"],
    ["barabar", "barabar-ajivikas"],
    ["coins", "early-punchmarked-money"],
    ["successors", "mauryan-successors"],
  ]) {
    assert.deepEqual(manifest.find((v) => v.id === `empires-video-${key}`).eventIds, [eventId]);
  }
  assert.match(manifest.find((v) => v.id === "empires-video-sanchi").context, /not Ashokan/);
  assert.match(manifest.find((v) => v.id === "empires-video-successors").context, /185 BCE/);
  assert.equal(
    validateHistory(indianHistoryTimeline).filter((i) => i.severity === "error").length,
    0,
  );
});
