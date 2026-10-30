require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const crypto = require("node:crypto");
const manifest = require("../docs/early-modern-researched-media-manifest.json");
const { earlyModernEvents } = require("../src/data/timeline/early-modern/events.ts");
const { earlyModernGalleries } = require("../src/data/scenes/early-modern-galleries.ts");
const { earlyModernExhibitPresentations } = require("../src/data/scenes/early-modern-exhibits.ts");

test("Early modern media downloads are complete, credited and assigned to valid scenes", () => {
  assert.equal(manifest.length, 28);
  assert.equal(Object.keys(earlyModernGalleries).length, 33);
  assert.equal(
    new Set(Object.values(earlyModernGalleries).flatMap((g) => g.map((i) => i.src))).size,
    33,
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
      Object.entries(earlyModernGalleries)
        .filter(([, images]) => images.some((i) => i.src === item.src))
        .map(([id]) => id)
        .sort(),
    );
  }
  for (const [id, gallery] of Object.entries(earlyModernGalleries)) {
    assert.ok(earlyModernEvents.some((event) => event.id === id));
    const exhibit = earlyModernExhibitPresentations[`exhibit-${id}`].exhibit;
    assert.equal(exhibit.gallery, gallery);
    for (const index of exhibit.stageImages) assert.ok(index === null || gallery[index]);
  }
});

test("Early modern evidence preserves chronology, later-image dates and specific acquisition gaps", () => {
  assert.equal(
    earlyModernEvents.reduce((sum, event) => sum + event.details.length, 0),
    220,
  );
  assert.equal(
    earlyModernEvents.flatMap((event) => event.media).filter((media) => media.kind === "video")
      .length,
    4,
  );
  for (const event of earlyModernEvents) {
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
  const diwani = earlyModernEvents.find((event) => event.id === "diwani-1765");
  assert.equal(diwani.dateStart.year, 1765);
  assert.match(earlyModernGalleries["diwani-1765"][0].caption, /1818/);
  assert.equal(earlyModernGalleries["diwani-1765"][0].category, "Illustration");
  assert.match(
    earlyModernGalleries["mughal-succession-war"][0].caption,
    /before the succession war/,
  );
  assert.match(earlyModernGalleries["nanak-kartarpur"][0].caption, /present-day Pakistan/);
  assert.match(earlyModernGalleries["chand-bibi-defence"][0].caption, /later remembered image/);
  assert.ok(
    earlyModernGalleries["shivaji-coronation"].some((image) => /1680-1687/.test(image.caption)),
  );
  for (const id of ["goa-printing", "adi-granth-1604", "sur-currency", "saraighat-1671"]) {
    assert.equal(earlyModernGalleries[id], undefined);
    assert.ok(
      earlyModernEvents.find((event) => event.id === id).imageNeeds[0].instruction.length > 60,
    );
  }
});
