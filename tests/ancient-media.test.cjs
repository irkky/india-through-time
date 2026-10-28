require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const crypto = require("node:crypto");
const { ancientIndiaEra } = require("../src/data/timeline/ancient-india.ts");
const { ancientGalleries } = require("../src/data/scenes/ancient-galleries.ts");
const { ancientExhibitPresentations } = require("../src/data/scenes/ancient-exhibits.ts");
const manifest = require("../docs/ancient-media-manifest.json");

test("ancient galleries retain authentic assets, attribution and valid scroll stages", () => {
  assert.equal(manifest.length, 12);
  assert.equal(Object.keys(ancientGalleries).length, 14);
  for (const item of manifest) {
    const bytes = fs.readFileSync(`public${item.src}`);
    assert.equal(crypto.createHash("sha256").update(bytes).digest("hex"), item.sha256);
    assert.ok(bytes.length > 10000);
    for (const field of [
      "credit",
      "license",
      "licenseUrl",
      "sourceUrl",
      "downloadUrl",
      "alt",
      "caption",
    ])
      assert.ok(item[field], `${item.src}: missing ${field}`);
    assert.deepEqual(
      item.eventIds.sort(),
      Object.entries(ancientGalleries)
        .filter(([, images]) => images.some((image) => image.src === item.src))
        .map(([id]) => id)
        .sort(),
    );
  }
  for (const [id, images] of Object.entries(ancientGalleries)) {
    const exhibit = ancientExhibitPresentations[`exhibit-${id}`].exhibit;
    assert.equal(exhibit.gallery, images);
    for (const index of exhibit.stageImages) assert.ok(index === null || images[index]);
  }
  assert.match(ancientGalleries["rigvedic-oral-traditions"][0].caption, /19th-century CE/);
  assert.match(ancientGalleries["early-upanishads"][0].caption, /1865 CE/);
  assert.match(ancientGalleries["mohenjo-daro-urban-life"][0].caption, /second century CE/);
  assert.match(ancientGalleries["harappan-weights"][0].caption, /different objects/);
  assert.equal(ancientGalleries["early-iron-ganga-vindhyas"], undefined);
});

test("all fifteen ancient records retain sourced notes and precise remaining evidence requests", () => {
  const events = ancientIndiaEra.periods.flatMap((period) => period.events);
  assert.equal(events.length, 15);
  for (const event of events) {
    assert.ok(event.dateScope);
    assert.ok(event.details.length);
    assert.ok(event.imageNeeds[0].instruction.length > 80);
    for (const detail of event.details) {
      assert.ok(detail.sourceIds.length);
      for (const id of detail.sourceIds)
        assert.ok(event.sources.some((source) => source.id === id));
    }
  }
  const rigveda = events.find((event) => event.id === "rigvedic-oral-traditions");
  assert.ok(
    rigveda.sources.some((source) => source.url === "https://ich.unesco.org/en/video/41576"),
  );
  assert.ok(
    events
      .find((event) => event.id === "early-iron-ganga-vindhyas")
      .sources.some((source) => source.id === "tewari-correction"),
  );
  assert.ok(
    !events
      .find((event) => event.id === "dholavira-water-city")
      .contentNeeds.some((need) => need.tag === "ADD_SITE_PHOTO"),
  );
});
