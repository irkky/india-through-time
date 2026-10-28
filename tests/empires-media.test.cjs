require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const crypto = require("node:crypto");
const { empireEvents } = require("../src/data/timeline/empires/events.ts");
const { empireGalleries } = require("../src/data/scenes/empire-galleries.ts");
const { empireExhibitPresentations } = require("../src/data/scenes/empire-exhibits.ts");
const manifest = require("../docs/empires-media-manifest.json");

test("empire media files retain provenance and valid chronological scene assignments", () => {
  assert.equal(manifest.length, 11);
  assert.equal(Object.keys(empireGalleries).length, 17);
  assert.equal(
    new Set(Object.values(empireGalleries).flatMap((images) => images.map((image) => image.src)))
      .size,
    18,
  );
  for (const item of manifest) {
    const bytes = fs.readFileSync(`public${item.src}`);
    assert.equal(crypto.createHash("sha256").update(bytes).digest("hex"), item.sha256);
    assert.ok(bytes.length > 10000);
    // All additions are JPEGs; reject truncated network downloads as well as HTML error pages.
    assert.equal(bytes.readUInt16BE(0), 0xffd8);
    assert.equal(bytes.readUInt16BE(bytes.length - 2), 0xffd9);
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
      Object.entries(empireGalleries)
        .filter(([, images]) => images.some((image) => image.src === item.src))
        .map(([id]) => id)
        .sort(),
    );
  }
  for (const [id, gallery] of Object.entries(empireGalleries)) {
    assert.ok(empireEvents.some((event) => event.id === id));
    const presentation = empireExhibitPresentations[`exhibit-${id}`];
    assert.equal(presentation.exhibit.gallery, gallery);
    for (const index of presentation.exhibit.stageImages)
      assert.ok(index === null || gallery[index]);
  }
  assert.match(empireGalleries["mahavira-jain-traditions"][0].caption, /15th century CE/);
  assert.match(empireGalleries["buddha-early-sangha"][0].caption, /11th century CE/);
  assert.match(empireGalleries["kalinga-war"][1].caption, /facsimile/);
  assert.match(empireGalleries["ashoka-lumbini"][1].caption, /part of the inscription/);
});

test("empire evidence links, reading passages and outstanding requests remain usable", () => {
  assert.equal(empireEvents.length, 17);
  assert.equal(
    empireEvents.reduce((sum, event) => sum + event.details.length, 0),
    55,
  );
  for (const event of empireEvents) {
    assert.ok(event.details.some((detail) => detail.title === "Visual evidence and its limits"));
    assert.ok(event.imageNeeds.length);
    for (const detail of event.details)
      for (const id of detail.sourceIds)
        assert.ok(event.sources.some((source) => source.id === id));
    assert.equal(event.media.length, empireGalleries[event.id].length);
  }
  assert.ok(
    empireEvents
      .find((event) => event.id === "sanchi-mauryan-core")
      .sources.some((source) => source.url === "https://whc.unesco.org/en/list/524/video"),
  );
  assert.equal(
    empireEvents.find((event) => event.id === "taxila-northwest").imageNeeds[0].tag,
    "ADD_BHIR_PHASE_PLAN",
  );
  assert.equal(
    empireEvents.find((event) => event.id === "ashoka-dhamma").imageNeeds[0].tag,
    "ADD_GREEK_ARAMAIC_EDICT_EVIDENCE",
  );
});
