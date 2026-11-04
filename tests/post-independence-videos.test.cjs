require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { postIndependenceIndiaEra } = require("../src/data/timeline/post-independence-india.ts");
const { postIndependenceEventVideos } = require("../src/data/timeline/post-independence/videos.ts");
const { indianHistoryTimeline } = require("../src/data/timeline/indian-history.ts");
const { validateHistory } = require("../src/lib/content/validate.ts");
const manifest = require("../docs/post-independence-video-manifest.json");

test("post-independence videos cover all records through 2025 and preserve source-only fallback and historical scope", () => {
  const periods = postIndependenceIndiaEra.periods;
  const events = periods.flatMap((p) => p.events);
  assert.equal(periods.length, 5);
  assert.equal(events.length, 55);
  assert.equal(manifest.length, 57);
  assert.equal(manifest.filter((v) => v.mode === "youtube").length, 56);
  assert.equal(new Set(manifest.map((v) => v.watchUrl)).size, manifest.length);
  assert.deepEqual(Object.keys(postIndependenceEventVideos).sort(), events.map((e) => e.id).sort());
  for (const period of periods) {
    assert.ok(period.videos.length);
    assert.equal(new Set(period.videos.map((v) => v.id)).size, period.videos.length);
    for (const event of period.events) {
      assert.equal(event.dateStart.kind, "calendar");
      assert.ok(event.dateStart.year <= 2025);
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
      "mode",
    ])
      assert.equal(video[key], item[key]);
    if (video.mode === "youtube") {
      assert.equal(video.watchUrl, `https://www.youtube.com/watch?v=${item.videoId}`);
      assert.match(item.embedEvidence, /playableInEmbed=true/);
    } else {
      assert.equal(video.id, "republic-video-cricket-1983");
      assert.equal(new URL(video.watchUrl).hostname, "www.icc-cricket.com");
      assert.equal(video.videoId, undefined);
    }
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
  for (const key of [
    "spadex",
    "chandrayaan-3",
    "navtej",
    "privacy",
    "war-1962",
    "war-1965",
    "war-1971",
  ])
    assert.deepEqual(manifest.find((v) => v.id === `republic-video-${key}`).eventIds, [
      `republic-${key}`,
    ]);
  assert.match(
    manifest.find((v) => v.id === "republic-video-constitution").context,
    /26 November 1949/,
  );
  assert.match(
    manifest.find((v) => v.id === "republic-video-constitution").context,
    /26 January 1950/,
  );
  assert.match(
    manifest.find((v) => v.id === "republic-video-navtej").context,
    /did not itself establish marriage equality/,
  );
  assert.match(
    manifest.find((v) => v.id === "republic-video-spadex").context,
    /planned future applications are not completed events/,
  );
  assert.equal(
    validateHistory(indianHistoryTimeline).filter((i) => i.severity === "error").length,
    0,
  );
});
