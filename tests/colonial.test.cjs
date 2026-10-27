require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const { colonialEvents } = require("../src/data/timeline/colonial/events.ts");
const { colonialIndiaEra } = require("../src/data/timeline/colonial-india.ts");
const { colonialGalleries } = require("../src/data/scenes/colonial-galleries.ts");
const { compileHistory } = require("../src/lib/content/compile.ts");
const { indianHistoryTimeline } = require("../src/data/timeline/indian-history.ts");
const { scenePresentations } = require("../src/data/scenes/scene-presentations.ts");
const { filterHistory, emptyHistoryFilters } = require("../src/lib/history-explorer.ts");
test("colonial chronology, citations, regional ranges and twentieth-century filters", () => {
  const model = compileHistory(indianHistoryTimeline, scenePresentations);
  assert.equal(colonialEvents.length, 36);
  assert.equal(colonialIndiaEra.periods.flatMap((p) => p.events).length, 36);
  assert.equal(
    model.events.filter((e) => e.node.era.id === "colonial-era-british-rule").at(-1).id,
    "colonial-independence-1947",
  );
  const results = filterHistory(model.events, {
    ...emptyHistoryFilters,
    era: "colonial-era-british-rule",
    century: "CE-20",
  });
  assert.ok(results.some((e) => e.id === "colonial-independence-1947"));
  assert.ok(!results.some((e) => e.id === "colonial-birsa"));
  for (const e of colonialEvents) {
    assert.equal(e.details.length, 3);
    assert.ok(e.sources.length);
    assert.ok(e.imageNeeds.length || colonialGalleries[e.id]?.length);
  }
  assert.equal(
    filterHistory(model.events, { ...emptyHistoryFilters, query: "Savitribai" }).length,
    1,
  );
});
test("colonial photographs have local JPEGs, dates and reuse credits", () => {
  for (const images of Object.values(colonialGalleries))
    for (const image of images) {
      assert.equal(
        fs
          .readFileSync("public" + image.src)
          .subarray(0, 3)
          .toString("hex"),
        "ffd8ff",
      );
      assert.match(image.license, /Public Domain/);
      assert.ok(image.credit);
      assert.ok(image.sourceUrl);
    }
  assert.match(colonialGalleries["colonial-crown-1858"][0].caption, /not a portrait/);
});
