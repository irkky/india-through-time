require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const crypto = require("node:crypto");
const manifest = require("../docs/independence-researched-media-manifest.json");
const { independenceEvents } = require("../src/data/timeline/independence/events.ts");
const { independenceGalleries } = require("../src/data/scenes/independence-galleries.ts");
const { independenceExhibitPresentations } = require("../src/data/scenes/independence-exhibits.ts");

test("Independence media downloads are complete, credited and assigned to valid scenes", () => {
  assert.equal(manifest.length, 17);
  assert.equal(Object.keys(independenceGalleries).length, 17);
  assert.equal(
    new Set(Object.values(independenceGalleries).flatMap((g) => g.map((i) => i.src))).size,
    19,
  );
  for (const item of manifest) {
    const bytes = fs.readFileSync(`public${item.src}`);
    if (item.src.endsWith(".png")) {
      assert.equal(bytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
      assert.equal(bytes.subarray(-8, -4).toString(), "IEND");
    } else {
      assert.equal(bytes.readUInt16BE(0), 0xffd8);
      assert.equal(bytes.readUInt16BE(bytes.length - 2), 0xffd9, `Complete JPEG: ${item.src}`);
    }
    assert.equal(crypto.createHash("sha256").update(bytes).digest("hex"), item.sha256);
    for (const key of [
      "alt",
      "caption",
      "credit",
      "license",
      "licenseUrl",
      "sourceUrl",
      "downloadUrl",
      "captureDate",
    ])
      assert.ok(item[key], `${item.filename}: ${key}`);
    assert.deepEqual(
      [...item.eventIds].sort(),
      Object.entries(independenceGalleries)
        .filter(([, images]) => images.some((i) => i.src === item.src))
        .map(([id]) => id)
        .sort(),
    );
  }
  for (const [id, gallery] of Object.entries(independenceGalleries)) {
    assert.ok(independenceEvents.some((event) => event.id === id));
    const exhibit = independenceExhibitPresentations[`exhibit-${id}`].exhibit;
    assert.equal(exhibit.gallery, gallery);
    for (const index of exhibit.stageImages) assert.ok(index === null || gallery[index]);
  }
});

test("Independence evidence preserves chronology, later-image dates and specific acquisition gaps", () => {
  assert.equal(
    independenceEvents.reduce((sum, event) => sum + event.details.length, 0),
    130,
  );
  assert.equal(
    independenceEvents.flatMap((event) => event.media).filter((media) => media.kind === "video")
      .length,
    5,
  );
  for (const event of independenceEvents) {
    assert.equal(event.imageNeeds.length, 1);
    assert.match(event.imageNeeds[0].tag, /^ADD_[A-Z0-9_]+_EVIDENCE$/);
    assert.ok(event.details.some((detail) => detail.title === "Explore the visual evidence"));
    assert.equal(new Set(event.sources.map((source) => source.id)).size, event.sources.length);
    for (const detail of event.details)
      for (const id of detail.sourceIds)
        assert.ok(
          event.sources.some((source) => source.id === id),
          `${event.id}: ${id}`,
        );
    for (const media of event.media.filter((item) => item.kind === "video")) {
      assert.match(media.license, /External viewing link only/);
      assert.ok(event.sources.some((source) => source.url === media.sourceUrl));
    }
  }
  assert.equal(independenceEvents.find((e) => e.id === "freedom-objectives").dateStart.year, 1946);
  assert.match(independenceGalleries["freedom-ghadar"][0].caption, /23 December 1913/);
  assert.match(independenceGalleries["freedom-gaidinliu"][0].caption, /1996/);
  assert.match(independenceGalleries["freedom-bhagat-singh"][0].caption, /1929/);
  assert.match(
    independenceEvents.find((e) => e.id === "freedom-karachi").media.find((m) => m.kind === "video")
      .caption,
    /1936/,
  );
});
