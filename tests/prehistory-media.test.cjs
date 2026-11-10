require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const crypto = require("node:crypto");
const { prehistoricIndiaEra } = require("../src/data/timeline/prehistoric-india.ts");
const { prehistoryGalleries } = require("../src/data/scenes/prehistory-galleries.ts");
const {
  lowerPalaeolithicGallery,
  middlePalaeolithicGallery,
} = require("../src/data/scenes/palaeolithic-gallery.ts");
const { prehistoryExhibits } = require("../src/data/scenes/prehistory-exhibits.ts");
const { prehistoryEvidence } = require("../src/data/timeline/prehistory/evidence.ts");
const manifest = require("../docs/prehistory-media-manifest.json");

test("prehistoric media stays attached to documented sites with intact local originals", () => {
  const events = prehistoricIndiaEra.periods.flatMap((period) => period.events);
  assert.equal(events.length, 24);
  assert.equal(manifest.length, 19);
  assert.equal(Object.keys(prehistoryGalleries).length, 17);
  const galleries = {
    ...prehistoryGalleries,
    "lower-palaeolithic-scaffold": lowerPalaeolithicGallery,
    "attirampakkam-middle-palaeolithic": middlePalaeolithicGallery,
  };
  for (const item of manifest) {
    const bytes = fs.readFileSync(`public${item.src}`);
    assert.equal(crypto.createHash("sha256").update(bytes).digest("hex"), item.sha256);
    assert.ok(bytes.length > 10000);
    for (const key of ["credit", "sourceUrl", "alt", "caption"])
      assert.ok(item[key], `${item.src}: missing ${key}`);
    if (item.rightsStatus === "pending") {
      assert.ok(item.rightsNote, `${item.src}: missing rights follow-up`);
      assert.equal(item.license, null);
      assert.equal(item.licenseUrl, null);
    } else if (item.rightsStatus === "permission-confirmed") {
      assert.equal(item.license, "Used with permission");
      assert.equal(item.licenseUrl, null);
      assert.ok(item.rightsNote, `${item.src}: missing permission note`);
    } else {
      assert.ok(item.license && item.licenseUrl && item.downloadUrl);
    }
    assert.deepEqual(
      item.eventIds.sort(),
      Object.entries(galleries)
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
    assert.equal(prehistoryExhibits[id].browseImages, true);
    for (const image of images) {
      assert.ok(fs.existsSync(`public${image.src}`), `${id}: missing ${image.src}`);
      assert.ok(image.alt.length > 30, `${id}: weak alt text for ${image.src}`);
      assert.ok(image.caption.length > 60, `${id}: weak caption for ${image.src}`);
      assert.ok(image.credit, `${id}: missing credit for ${image.src}`);
      assert.ok(image.sourceUrl, `${id}: missing source for ${image.src}`);
    }
  }
  assert.ok(
    prehistoryGalleries["mehrgarh-aceramic-cemetery"].some((image) =>
      /BY-NC-ND/.test(image.license ?? ""),
    ),
  );
  assert.match(prehistoryGalleries["mesolithic-regional-overview"][0].caption, /no exact date/);
  assert.equal(prehistoryGalleries["mesolithic-regional-overview"].length, 3);
  assert.match(prehistoryGalleries["mesolithic-regional-overview"][1].title, /Rock Shelter 8/);
  assert.match(prehistoryGalleries["burzahom-neolithic"][0].license, /CC0/);
  assert.match(prehistoryGalleries["dhaba-microliths"][0].caption, /not a single dated assemblage/);
  assert.equal(lowerPalaeolithicGallery.length, 6);
  assert.match(lowerPalaeolithicGallery[4].license, /CC BY 4\.0/);
  assert.match(lowerPalaeolithicGallery[5].license, /CC BY-SA 4\.0/);
  assert.match(lowerPalaeolithicGallery[4].caption, /not assigned.*1\.51-million-year/i);
  assert.match(lowerPalaeolithicGallery[5].caption, /not evidence.*1\.51-million-year/i);
  assert.equal(
    Object.values(prehistoryGalleries)
      .flat()
      .some((image) => image.src.includes("chopani-mando-pottery")),
    false,
  );
  assert.match(prehistoryGalleries["balathal-ahar-banas"][0].title, /cranium/i);
  assert.match(prehistoryGalleries["jwalapuram-toba"][2].title, /excavation trench/i);
  const sandhav = prehistoryGalleries["sandhav-coastal-occupation"];
  assert.equal(sandhav.length, 3);
  assert.ok(sandhav.every((image) => manifest.some((item) => item.src === image.src)));
  assert.deepEqual(
    sandhav.map((image) => image.src.split("/").at(-1)),
    ["sandhav-stone-tools.png", "sandhav-excavation.jpg", "sandhav-location-map.png"],
  );
});

test("prehistoric records expose sourced evidence notes and only unresolved image requests", () => {
  const events = prehistoricIndiaEra.periods.flatMap((period) => period.events);
  for (const event of events) {
    assert.ok(event.details.some((detail) => detail.title === "Reading the evidence"));
    const request =
      !prehistoryExhibits[event.id].gallery?.length && prehistoryEvidence[event.id][1];
    const matchingNeeds = event.imageNeeds.filter((need) => need.tag.startsWith("IMAGE_"));
    assert.equal(matchingNeeds.length, request ? 1 : 0, event.id);
    if (request) assert.ok(matchingNeeds[0].instruction.length > 80, event.id);
    assert.equal(prehistoryExhibits[event.id].watchVideo, true, event.id);
    assert.ok(
      event.videos.some((video) => video.mode === "youtube"),
      event.id,
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
