require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { compileHistory } = require("../src/lib/content/compile.ts");
const { indianHistoryTimeline } = require("../src/data/timeline/indian-history.ts");
const { scenePresentations } = require("../src/data/scenes/scene-presentations.ts");
const { classicalEvents } = require("../src/data/timeline/classical/events.ts");
const { classicalGalleries } = require("../src/data/scenes/classical-galleries.ts");
const { toTimelineOrdinal, bce, ce } = require("../src/lib/historical-date.ts");
const {
  filterHistory,
  matchesCentury,
  contemporaryEvents,
  emptyHistoryFilters,
} = require("../src/lib/history-explorer.ts");
const model = compileHistory(indianHistoryTimeline, scenePresentations);
const event = (id) => model.events.find((item) => item.id === id);

test("Indian records interleave chronologically, preserve anchors and have complete evidence", () => {
  assert.equal(classicalEvents.length, 22);
  assert.equal(
    model.events.filter((e) => e.node.era.id === "classical-medieval-eras").at(-1).id,
    "vijayanagara-city",
  );
  assert.equal(model.events.filter((item) => item.id === "mauryan-empire").length, 1);
  assert.ok(
    model.events.findIndex((e) => e.id === "mauryan-empire") <
      model.events.findIndex((e) => e.id === "indo-greek-india"),
  );
  model.events.forEach((item, index) => {
    if (index)
      assert.ok(
        toTimelineOrdinal(item.node.event.dateStart) >=
          toTimelineOrdinal(model.events[index - 1].node.event.dateStart),
      );
  });
  for (const record of classicalEvents) {
    assert.ok(record.details.length >= 3);
    assert.ok(record.civilizations.length && record.dateScope && record.interpretationNotes.length);
    assert.ok(record.sources.every((source) => source.url.startsWith("https://")));
    assert.ok(
      record.details.every((detail) =>
        detail.sourceIds.every((id) => record.sources.some((source) => source.id === id)),
      ),
    );
    assert.ok(record.relatedEvents.every((id) => event(id)));
    assert.ok(record.imageNeeds.length || classicalGalleries[record.id]?.length);
  }
});

test("image assets have rights, provenance and real local files", () => {
  assert.equal(Object.keys(classicalGalleries).length, 19);
  for (const gallery of Object.values(classicalGalleries))
    for (const image of gallery) {
      assert.ok(image.alt && image.credit && image.sourceUrl && image.licenseUrl);
      const buffer = fs.readFileSync(path.join(__dirname, "../public", image.src));
      assert.equal(buffer.readUInt16BE(0), 0xffd8);
      assert.ok(buffer.length < 1200000, "Web-sized photograph, not a multi-megabyte original");
    }
});

test("century filters intersect ranges and preserve the no-year-zero boundary", () => {
  assert.ok(matchesCentury(event("ajanta-caves"), "BCE-1"));
  assert.ok(matchesCentury(event("ajanta-caves"), "CE-1"));
  assert.ok(!matchesCentury(event("ajanta-caves"), "CE-7"));
  const sample = structuredClone(event("ajanta-caves"));
  sample.node.event.dateStart = bce(1);
  sample.node.event.dateEnd = ce(1);
  assert.ok(matchesCentury(sample, "BCE-1") && matchesCentury(sample, "CE-1"));
  sample.node.event.dateStart = ce(100);
  sample.node.event.dateEnd = ce(100);
  assert.ok(matchesCentury(sample, "CE-1") && !matchesCentury(sample, "CE-2"));
  assert.ok(!matchesCentury(sample, "CE-0"));
});

test("combined filters search people, locations and detail text without reordering", () => {
  const apply = (filters) => filterHistory(model.events, { ...emptyHistoryFilters, ...filters });
  assert.ok(apply({ query: "Brahmagupta" }).some((e) => e.id === "brahmagupta-628"));
  assert.ok(apply({ query: "Patan" }).some((e) => e.id === "rani-ki-vav"));
  assert.ok(apply({ query: "Artist signatures" }).some((e) => e.id === "hoysala-temples"));
  assert.deepEqual(
    apply({ era: "classical-medieval-eras", civilization: "Gupta", century: "CE-4" }).map(
      (e) => e.id,
    ),
    ["gupta-world"],
  );
  assert.equal(apply({ civilization: "Gupta", century: "CE-15" }).length, 0);
  assert.equal(apply({ era: "classical-medieval-eras" }).length, classicalEvents.length);
  assert.equal(apply({}).length, model.events.length);
  const contemporaries = contemporaryEvents(model.events, event("gupta-world"));
  assert.ok(contemporaries.length && contemporaries.every((e) => e.id !== "gupta-world"));
});
