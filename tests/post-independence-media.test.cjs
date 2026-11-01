require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const crypto = require("node:crypto");
const manifest = require("../docs/post-independence-researched-media-manifest.json");
const { postIndependenceEvents } = require("../src/data/timeline/post-independence/events.ts");
const { postIndependenceGalleries } = require("../src/data/scenes/post-independence-galleries.ts");
const {
  postIndependenceExhibitPresentations,
} = require("../src/data/scenes/post-independence-exhibits.ts");

test("Post-independence media downloads are complete, credited and assigned to valid scenes", () => {
  assert.equal(manifest.length, 26);
  assert.equal(Object.keys(postIndependenceGalleries).length, 30);
  assert.equal(
    new Set(Object.values(postIndependenceGalleries).flatMap((g) => g.map((i) => i.src))).size,
    29,
  );
  for (const item of manifest) {
    const bytes = fs.readFileSync(`public${item.src}`);
    if (item.src.endsWith(".webp")) {
      assert.equal(bytes.subarray(0, 4).toString(), "RIFF");
      assert.equal(bytes.subarray(8, 12).toString(), "WEBP");
      assert.equal(bytes.readUInt32LE(4) + 8, bytes.length);
    } else if (item.src.endsWith(".png")) {
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
      Object.entries(postIndependenceGalleries)
        .filter(([, images]) => images.some((i) => i.src === item.src))
        .map(([id]) => id)
        .sort(),
    );
  }
  for (const [id, gallery] of Object.entries(postIndependenceGalleries)) {
    assert.ok(postIndependenceEvents.some((event) => event.id === id));
    const exhibit = postIndependenceExhibitPresentations[`exhibit-${id}`].exhibit;
    assert.equal(exhibit.gallery, gallery);
    for (const index of exhibit.stageImages) assert.ok(index === null || gallery[index]);
  }
});

test("Post-independence evidence preserves chronology, later-image dates and specific acquisition gaps", () => {
  assert.equal(
    postIndependenceEvents.reduce((sum, event) => sum + event.details.length, 0),
    244,
  );
  assert.equal(
    postIndependenceEvents.flatMap((event) => event.media).filter((media) => media.kind === "video")
      .length,
    7,
  );
  for (const event of postIndependenceEvents) {
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
  assert.equal(postIndependenceEvents.at(-1).id, "republic-maratha-unesco");
  assert.ok(
    postIndependenceEvents.every(
      (e) => e.dateStart.year <= 2025 && (!e.dateEnd || e.dateEnd.year <= 2025),
    ),
  );
  assert.match(postIndependenceGalleries["republic-polio"][0].caption, /2002/);
  assert.match(postIndependenceGalleries["republic-war-1971"][1].caption, /2022/);
  assert.match(postIndependenceGalleries["republic-isro"][0].caption, /crop/);
  assert.match(
    postIndependenceEvents
      .find((e) => e.id === "republic-election-2024")
      .details.find((d) => d.title.includes("final election")).text,
    /Surat/,
  );
});
