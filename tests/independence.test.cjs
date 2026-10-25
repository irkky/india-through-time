require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const { independenceEvents } = require("../src/data/timeline/independence/events.ts");
const { independenceIndiaEra } = require("../src/data/timeline/independence-india.ts");
const { independenceGalleries } = require("../src/data/scenes/independence-galleries.ts");
const { compileHistory } = require("../src/lib/content/compile.ts");
const { indianHistoryTimeline } = require("../src/data/timeline/indian-history.ts");
const { scenePresentations } = require("../src/data/scenes/scene-presentations.ts");
const { filterHistory, emptyHistoryFilters } = require("../src/lib/history-explorer.ts");

test("independence evidence, chronology, filters and shared milestones", () => {
  const model = compileHistory(indianHistoryTimeline, scenePresentations);
  assert.equal(independenceEvents.length, 29);
  assert.equal(independenceIndiaEra.periods.flatMap((p) => p.events).length, 29);
  const matches = filterHistory(model.events, {
    ...emptyHistoryFilters,
    era: "indian-independence-movement",
    century: "CE-20",
  });
  assert.equal(matches.length, 29);
  assert.ok(filterHistory(matches, { ...emptyHistoryFilters, query: "Ambedkar" }).length >= 2);
  for (const event of independenceEvents) {
    assert.equal(event.details.length, 3);
    assert.notEqual(event.details[0].text, event.details[1].text);
    assert.ok(event.sources.length && event.citations.length);
    assert.ok(event.imageNeeds.length || independenceGalleries[event.id]?.length);
    assert.ok(event.contentNeeds[0].tag.startsWith("RESEARCH_PLACEHOLDER_"));
  }
  const at = (id) => model.events.findIndex((e) => e.id === id);
  assert.ok(at("freedom-purna-swaraj") < at("colonial-salt-1930"));
  assert.ok(at("freedom-bhagat-singh") < at("freedom-karachi"));
  assert.ok(at("freedom-naval-uprising") < at("freedom-tebhaga"));
  assert.ok(at("freedom-tebhaga") < at("freedom-objectives"));
  assert.equal(model.events.filter((e) => e.id === "colonial-independence-1947").length, 1);
  assert.equal(independenceEvents.find((e) => e.id === "freedom-kheda").dateStart.year, 1918);
});

test("independence photographs retain local files, provenance and temporal context", () => {
  for (const gallery of Object.values(independenceGalleries))
    for (const image of gallery) {
      assert.equal(
        fs
          .readFileSync("public" + image.src)
          .subarray(0, 3)
          .toString("hex"),
        "ffd8ff",
      );
      assert.ok(image.sourceUrl && image.licenseUrl && image.credit);
      assert.match(image.license, /Public Domain/);
    }
  assert.match(
    independenceGalleries["freedom-khudai-khidmatgar"][0].caption,
    /not an image of the 1931/,
  );
  assert.match(independenceGalleries["freedom-round-table"][0].caption, /departure photograph/);
});
