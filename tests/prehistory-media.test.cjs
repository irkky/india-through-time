require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const crypto = require("node:crypto");
const { prehistoricIndiaEra } = require("../src/data/timeline/prehistoric-india.ts");
const { prehistoryGalleries } = require("../src/data/scenes/prehistory-galleries.ts");
const { prehistoryExhibits } = require("../src/data/scenes/prehistory-exhibits.ts");
const manifest = require("../docs/prehistory-media-manifest.json");

test("prehistoric media stays attached to documented sites with intact local originals", () => {
  const events = prehistoricIndiaEra.periods.flatMap((period) => period.events);
  assert.equal(events.length, 24);
  assert.equal(manifest.length, 12);
  assert.equal(Object.keys(prehistoryGalleries).length, 11);
  for (const item of manifest) {
    const bytes = fs.readFileSync(`public${item.src}`);
    assert.equal(crypto.createHash("sha256").update(bytes).digest("hex"), item.sha256);
    assert.ok(bytes.length > 10000);
    for (const key of [
      "credit",
      "license",
      "licenseUrl",
      "sourceUrl",
      "downloadUrl",
      "alt",
      "caption",
    ])
      assert.ok(item[key], `${item.src}: missing ${key}`);
    assert.deepEqual(
      item.eventIds.sort(),
      Object.entries(prehistoryGalleries)
        .filter(([, images]) => images.some((image) => image.src === item.src))
        .map(([id]) => id)
        .sort(),
    );
  }
  for (const [id, images] of Object.entries(prehistoryGalleries)) {
    assert.ok(events.some((event) => event.id === id));
    assert.equal(prehistoryExhibits[id].gallery, images);
    for (const index of prehistoryExhibits[id].stageImages)
      assert.ok(index === null || images[index], `${id}: missing stage image`);
  }
  assert.match(prehistoryGalleries["mehrgarh-aceramic-cemetery"][0].license, /BY-NC-ND/);
  assert.match(prehistoryGalleries["mesolithic-regional-overview"][0].caption, /no exact date/);
  assert.match(prehistoryGalleries["dhaba-microliths"][0].caption, /not a single dated assemblage/);
});

test("all prehistoric records expose sourced evidence notes and actionable image requests", () => {
  const events = prehistoricIndiaEra.periods.flatMap((period) => period.events);
  for (const event of events) {
    assert.ok(event.details.some((detail) => detail.title === "Reading the evidence"));
    assert.ok(
      event.imageNeeds.some(
        (need) => need.tag.startsWith("IMAGE_") && need.instruction.length > 80,
      ),
    );
    for (const detail of event.details) {
      assert.ok(detail.sourceIds.length);
      for (const id of detail.sourceIds)
        assert.ok(event.sources.some((source) => source.id === id));
    }
  }
  const overview = events.find((event) => event.id === "mesolithic-regional-overview");
  assert.ok(
    overview.sources.some((source) => source.url === "https://nptel.ac.in/courses/109104102"),
  );
});
