require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { earlyModernIndiaEra } = require("../src/data/timeline/early-modern-india.ts");
const { earlyModernEvents } = require("../src/data/timeline/early-modern/events.ts");
const { earlyModernGalleries } = require("../src/data/scenes/early-modern-galleries.ts");
const { compileHistory } = require("../src/lib/content/compile.ts");
const { indianHistoryTimeline } = require("../src/data/timeline/indian-history.ts");
const { scenePresentations } = require("../src/data/scenes/scene-presentations.ts");
const {
  filterHistory,
  emptyHistoryFilters,
  centuryOptions,
} = require("../src/lib/history-explorer.ts");
const { toTimelineOrdinal } = require("../src/lib/historical-date.ts");
const model = compileHistory(indianHistoryTimeline, scenePresentations);

test("early modern chapter preserves chronology, regional overlaps and the Company transition", () => {
  const authored = earlyModernIndiaEra.periods.flatMap((p) => p.events);
  assert.equal(authored.length, 54);
  assert.equal(new Set(authored.map((e) => e.id)).size, authored.length);
  assert.equal(earlyModernIndiaEra.periods.length, 5);
  assert.ok(earlyModernIndiaEra.periods.every((p) => p.events.length));
  assert.equal(earlyModernEvents[0].id, "calicut-1498");
  assert.equal(earlyModernEvents.at(-1).id, "diwani-1765");
  for (const [id, year] of Object.entries({
    "panipat-1526": 1526,
    "panipat-1556": 1556,
    "talikota-1565": 1565,
    "shivaji-coronation": 1674,
    "khalsa-1699": 1699,
    "jaipur-observatory": 1734,
    "plassey-1757": 1757,
    "panipat-1761": 1761,
    "buxar-1764": 1764,
    "diwani-1765": 1765,
  })) {
    const event = authored.find((e) => e.id === id);
    assert.equal(event.dateStart.year, year);
    assert.equal(event.approximateDate, false);
  }
  assert.equal(authored.find((e) => e.id === "chand-bibi-memory").dateStart.year, 1700);
  assert.equal(authored.find((e) => e.id === "chand-bibi-defence").dateStart.year, 1595);
  model.events.forEach((e, i) => {
    if (i)
      assert.ok(
        toTimelineOrdinal(e.node.event.dateStart) >=
          toTimelineOrdinal(model.events[i - 1].node.event.dateStart),
      );
  });
});

test("each early modern scene has traceable evidence, valid links and a real image or actionable tag", () => {
  for (const event of earlyModernEvents) {
    assert.ok(event.details.length >= 4);
    assert.ok(event.dateScope && event.interpretationNotes.length);
    assert.ok(
      event.citations.every((c) => event.sources.some((s) => s.id === c.sourceId) && c.locator),
    );
    assert.ok(
      event.details.every(
        (d) =>
          d.text &&
          d.sourceIds.length &&
          d.sourceIds.every((id) => event.sources.some((s) => s.id === id)),
      ),
    );
    assert.ok(event.relatedEvents.every((id) => model.events.some((e) => e.id === id)));
    const scene = model.events.find((e) => e.id === event.id);
    assert.equal(scene.exhibit.points.length, 3);
    assert.ok(event.imageNeeds.length || earlyModernGalleries[event.id]?.length);
    for (const need of [...event.imageNeeds, ...event.contentNeeds])
      assert.ok(/^[A-Z][A-Z0-9_]*$/.test(need.tag) && need.instruction.length > 30);
  }
});

test("eighteenth-century filtering finds new content without truncating earlier date ranges", () => {
  assert.ok(centuryOptions.some((c) => c.id === "CE-18"));
  const apply = (f) => filterHistory(model.events, { ...emptyHistoryFilters, ...f });
  const results = apply({ era: "early-modern-india", century: "CE-18" });
  assert.ok(results.some((e) => e.id === "diwani-1765"));
  assert.ok(results.some((e) => e.id === "aurangzeb-reign"));
  assert.ok(!results.some((e) => e.id === "khalsa-1699"));
  assert.deepEqual(
    apply({ era: "early-modern-india", civilization: "Travancore", century: "CE-18" }).map(
      (e) => e.id,
    ),
    ["colachel-1741"],
  );
  assert.equal(apply({ era: "early-modern-india", query: "Tarabai" })[0].id, "tarabai-regency");
});

test("early modern museum images are local, web-sized and credited", () => {
  assert.equal(Object.keys(earlyModernGalleries).length, 33);
  for (const images of Object.values(earlyModernGalleries))
    for (const image of images) {
      assert.ok(image.alt && image.credit && image.sourceUrl && image.licenseUrl);
      const data = fs.readFileSync(path.join(__dirname, "../public", image.src));
      assert.equal(data.readUInt16BE(0), 0xffd8);
      assert.ok(data.length < 1200000);
    }
  assert.match(earlyModernGalleries["chand-bibi-memory"][0].caption, /later remembered image/);
});
