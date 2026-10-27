require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const { postIndependenceEvents } = require("../src/data/timeline/post-independence/events.ts");
const { postIndependenceIndiaEra } = require("../src/data/timeline/post-independence-india.ts");
const { postIndependenceGalleries } = require("../src/data/scenes/post-independence-galleries.ts");
const { compileHistory } = require("../src/lib/content/compile.ts");
const { indianHistoryTimeline } = require("../src/data/timeline/indian-history.ts");
const { scenePresentations } = require("../src/data/scenes/scene-presentations.ts");
const { filterHistory, emptyHistoryFilters } = require("../src/lib/history-explorer.ts");

test("post-independence chronology, evidence, filters and completion tags", () => {
  const { centuryOptions } = require("../src/lib/history-explorer.ts");
  assert.ok(centuryOptions.some((option) => option.id === "CE-21"));
  const model = compileHistory(indianHistoryTimeline, scenePresentations);
  assert.equal(postIndependenceEvents.length, 55);
  assert.equal(postIndependenceIndiaEra.periods.length, 5);
  assert.equal(postIndependenceIndiaEra.periods.flatMap((p) => p.events).length, 55);
  assert.equal(model.events.length, 252);
  assert.equal(model.events.at(-1).id, "republic-maratha-unesco");
  const matches = filterHistory(model.events, {
    ...emptyHistoryFilters,
    era: "post-independence-present",
    century: "CE-21",
  });
  assert.equal(
    matches.length,
    postIndependenceEvents.filter((e) => e.dateStart.year >= 2001).length,
  );
  for (const e of postIndependenceEvents) {
    assert.equal(e.details.length, 3);
    assert.ok(e.sources.length && e.citations.length);
    assert.ok(e.imageNeeds.length || postIndependenceGalleries[e.id]?.length);
    assert.ok(e.contentNeeds[0].tag.startsWith("RESEARCH_PLACEHOLDER_"));
    for (const id of e.relatedEvents)
      assert.ok(
        model.events.some((x) => x.id === id),
        id,
      );
  }
  const at = (id) => model.events.findIndex((e) => e.id === id);
  assert.ok(at("colonial-independence-1947") < at("republic-gandhi-1948"));
  assert.ok(at("republic-constitution-adopted") < at("republic-republic"));
  assert.ok(
    postIndependenceEvents.every(
      (e) => e.dateStart.year <= 2025 && (!e.dateEnd || e.dateEnd.year <= 2025),
    ),
  );
});
test("post-independence media has actual local images, provenance and temporal context", () => {
  assert.equal(Object.keys(postIndependenceGalleries).length, 3);
  for (const images of Object.values(postIndependenceGalleries))
    for (const image of images) {
      const magic = fs
        .readFileSync("public" + image.src)
        .subarray(0, 3)
        .toString("hex");
      assert.ok(["ffd8ff", "89504e"].includes(magic));
      assert.ok(image.sourceUrl && image.licenseUrl && image.credit && image.caption);
    }
  assert.match(
    postIndependenceGalleries["republic-maratha-unesco"][0].caption,
    /predates inscription/,
  );
  assert.match(postIndependenceGalleries["republic-chandrayaan-3"][0].caption, /27 August 2023/);
});
