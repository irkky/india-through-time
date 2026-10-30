require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const crypto = require("node:crypto");
const manifest = require("../docs/classical-researched-media-manifest.json");
const { classicalEvents } = require("../src/data/timeline/classical/events.ts");
const { classicalGalleries } = require("../src/data/scenes/classical-galleries.ts");
const { classicalExhibitPresentations } = require("../src/data/scenes/classical-exhibits.ts");

test("Classical media downloads are complete, credited and assigned to valid scenes", () => {
  assert.equal(manifest.length, 23);
  assert.equal(Object.keys(classicalGalleries).length, 19);
  assert.equal(
    new Set(Object.values(classicalGalleries).flatMap((g) => g.map((i) => i.src))).size,
    25,
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
      Object.entries(classicalGalleries)
        .filter(([, images]) => images.some((i) => i.src === item.src))
        .map(([id]) => id)
        .sort(),
    );
  }
  for (const [id, gallery] of Object.entries(classicalGalleries)) {
    assert.ok(classicalEvents.some((event) => event.id === id));
    const exhibit = classicalExhibitPresentations[`exhibit-${id}`].exhibit;
    assert.equal(exhibit.gallery, gallery);
    for (const index of exhibit.stageImages) assert.ok(index === null || gallery[index]);
  }
});

test("Classical evidence separates later imagery, external recordings and missing manuscripts", () => {
  assert.equal(
    classicalEvents.reduce((sum, event) => sum + event.details.length, 0),
    79,
  );
  assert.equal(
    classicalEvents.flatMap((event) => event.media).filter((media) => media.kind === "video")
      .length,
    9,
  );
  for (const event of classicalEvents) {
    assert.equal(event.imageNeeds.length, 1);
    assert.match(event.imageNeeds[0].tag, /^ADD_[A-Z_]+$/);
    assert.ok(event.details.some((detail) => detail.title === "Visual evidence and its limits"));
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
  for (const id of ["aryabhata-499", "brahmagupta-628", "ibn-battuta-india"]) {
    assert.equal(classicalGalleries[id], undefined);
    assert.ok(
      classicalEvents.find((event) => event.id === id).imageNeeds[0].instruction.includes("copy"),
    );
  }
  assert.match(classicalGalleries["tamil-devotion"][0].caption, /late thirteenth century/);
  assert.match(classicalGalleries["delhi-sultanate"][0].caption, /not verified/);
  assert.match(classicalGalleries["konark-sun-temple"][1].caption, /same wheel/);
  assert.ok(
    classicalGalleries["chola-temples"].some(
      (image) => image.category === "Illustration" && /No scale/.test(image.caption),
    ),
  );
  assert.ok(
    classicalEvents
      .find((event) => event.id === "bihar-buddha-bronze")
      .sources.some(
        (source) => source.url === "https://www.metmuseum.org/essays/3d-xray-bronze-buddha",
      ),
  );
});
