require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { independenceIndiaEra } = require("../src/data/timeline/independence-india.ts");
const { independenceEventVideos } = require("../src/data/timeline/independence/videos.ts");
const { indianHistoryTimeline } = require("../src/data/timeline/indian-history.ts");
const { validateHistory } = require("../src/lib/content/validate.ts");
const manifest = require("../docs/independence-video-manifest.json");

test("independence videos cover all periods and preserve specific event and archival scope", () => {
  const periods = independenceIndiaEra.periods;
  const events = periods.flatMap((p) => p.events);
  assert.equal(periods.length, 4);
  assert.equal(events.length, 29);
  assert.equal(manifest.length, 28);
  assert.equal(new Set(manifest.map((v) => v.videoId)).size, 28);
  assert.deepEqual(Object.keys(independenceEventVideos).sort(), events.map((e) => e.id).sort());
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
    for (const key of [
      "title",
      "publisher",
      "durationSeconds",
      "watchUrl",
      "context",
      "verifiedAt",
    ])
      assert.equal(video[key], item[key]);
    assert.equal(video.watchUrl, `https://www.youtube.com/watch?v=${item.videoId}`);
    assert.match(item.embedEvidence, /playableInEmbed=true/);
    assert.deepEqual(
      item.eventIds.slice().sort(),
      events
        .filter((e) => e.videos.some((v) => v.id === item.id))
        .map((e) => e.id)
        .sort(),
    );
    assert.deepEqual(
      item.periodIds.slice().sort(),
      periods
        .filter((p) => p.videos.some((v) => v.id === item.id))
        .map((p) => p.id)
        .sort(),
    );
  }
  for (const key of ["vedaranyam", "poona-pact", "gaidinliu", "naval-uprising", "tebhaga"])
    assert.deepEqual(manifest.find((v) => v.id === `independence-video-${key}`).eventIds, [
      `freedom-${key}`,
    ]);
  assert.match(
    manifest.find((v) => v.id === "independence-video-karachi-film").context,
    /Mixed-date compilation/,
  );
  assert.match(
    manifest.find((v) => v.id === "independence-video-congress-radio").context,
    /not an authenticated recording/,
  );
  assert.match(
    manifest.find((v) => v.id === "independence-video-round-table").context,
    /not the conference negotiations/,
  );
  assert.equal(
    validateHistory(indianHistoryTimeline).filter((i) => i.severity === "error").length,
    0,
  );
});
