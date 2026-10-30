require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const crypto = require("node:crypto");
const manifest = require("../docs/colonial-researched-media-manifest.json");
const { colonialEvents } = require("../src/data/timeline/colonial/events.ts");
const { colonialGalleries } = require("../src/data/scenes/colonial-galleries.ts");
const { colonialExhibitPresentations } = require("../src/data/scenes/colonial-exhibits.ts");

test("Colonial media downloads are complete, credited and assigned to valid scenes", () => {
  assert.equal(manifest.length, 19);
  assert.equal(Object.keys(colonialGalleries).length, 17);
  assert.equal(
    new Set(Object.values(colonialGalleries).flatMap((g) => g.map((i) => i.src))).size,
    21,
  );
  for (const item of manifest) {
    const bytes = fs.readFileSync(`public${item.src}`);
    assert.equal(bytes.readUInt16BE(0), 0xffd8);
    assert.equal(bytes.readUInt16BE(bytes.length - 2), 0xffd9, `Complete JPEG: ${item.src}`);
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
      Object.entries(colonialGalleries)
        .filter(([, images]) => images.some((i) => i.src === item.src))
        .map(([id]) => id)
        .sort(),
    );
  }
  for (const [id, gallery] of Object.entries(colonialGalleries)) {
    assert.ok(colonialEvents.some((event) => event.id === id));
    const exhibit = colonialExhibitPresentations[`exhibit-${id}`].exhibit;
    assert.equal(exhibit.gallery, gallery);
    for (const index of exhibit.stageImages) assert.ok(index === null || gallery[index]);
  }
});

test("Colonial evidence preserves chronology, later-image dates and specific acquisition gaps", () => {
  assert.equal(
    colonialEvents.reduce((sum, event) => sum + event.details.length, 0),
    154,
  );
  assert.equal(
    colonialEvents.flatMap((event) => event.media).filter((media) => media.kind === "video").length,
    6,
  );
  for (const event of colonialEvents) {
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
  assert.equal(colonialEvents.find((e) => e.id === "colonial-act-1935").dateStart.year, 1935);
  assert.equal(colonialGalleries["colonial-act-1935"], undefined);
  assert.match(colonialGalleries["colonial-independence-1947"][0].caption, /1947/);
  assert.match(colonialGalleries["colonial-indigo-1859"][0].caption, /1863/);
  assert.match(
    colonialGalleries["colonial-salt-1930"][0].caption,
    /uncertain|unresolved|conflict/i,
  );
  assert.match(
    colonialEvents
      .find((e) => e.id === "colonial-world-war-one")
      .media.find((m) => m.kind === "video").caption,
    /1915/,
  );
});
