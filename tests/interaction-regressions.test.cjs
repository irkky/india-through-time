require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { getReadableCrossfade } = require("../src/animations/scenes/transition-strategies.ts");
const {
  bce,
  ce,
  formatHistoricalDate,
  formatScrollDate,
  yearsAgo,
} = require("../src/lib/historical-date.ts");
const { centuryCoverageHelp, centuryOptions } = require("../src/lib/history-explorer.ts");
const { prehistoricIndiaEra } = require("../src/data/timeline/prehistoric-india.ts");
const { prehistoryVideos } = require("../src/data/timeline/prehistory/videos.ts");
const { ancientVideoLibrary } = require("../src/data/timeline/ancient/videos.ts");

test("B11 transition copy always retains a readable layer around the midpoint", () => {
  for (const progress of [0, 0.45, 0.5, 0.55, 1]) {
    const opacity = getReadableCrossfade(progress);
    assert.ok(opacity.outgoing >= 0 && opacity.incoming >= 0);
    assert.ok(opacity.outgoing + opacity.incoming >= 1);
  }

  for (const progress of [0.55, 0.5, 0.45]) {
    const opacity = getReadableCrossfade(progress);
    assert.ok(Math.max(opacity.outgoing, opacity.incoming) >= 0.5);
  }
});

test("B07 calendar dates stay ungrouped while quantities retain useful grouping", () => {
  assert.equal(formatHistoricalDate(ce(1948)), "1948 CE");
  assert.equal(formatHistoricalDate(ce(2025)), "2025 CE");
  assert.equal(formatHistoricalDate(bce(3000), { approximate: true }), "~3000 BCE");
  assert.equal(formatScrollDate(ce(2017)), "~2017 CE");
  assert.equal(formatScrollDate(yearsAgo(114_000)), "~1,14,000 years ago");
});

test("B09 century help follows the generated options and the 2025 cutoff", () => {
  assert.match(centuryCoverageHelp, new RegExp(centuryOptions[0].label));
  assert.match(centuryCoverageHelp, new RegExp(centuryOptions.at(-1).label));
  assert.match(centuryCoverageHelp, /2025 CE/);
  assert.doesNotMatch(centuryCoverageHelp, /2000 CE/);
});

test("B08 affected video copy uses verified punctuation instead of damaged separators", () => {
  const copy = [...Object.values(prehistoryVideos).flat(), ...Object.values(ancientVideoLibrary)]
    .flatMap((video) => [video.title, video.publisher, video.description, video.context])
    .filter(Boolean)
    .join("\n");
  assert.match(copy, /NPTEL — Soumik Nandy Majumdar/);
  assert.match(copy, /Indian Art — An Appreciation/);
  assert.match(copy, /Ganga–Vindhya/);
  assert.doesNotMatch(copy, /NPTEL \?|Indian Art \?|Ganga\?Vindhya|�/);
});

test("B10 prehistoric significance is distinct for every formerly duplicated record", () => {
  const ids = [
    "dhaba-microliths",
    "mehtakheri-microblades",
    "lahuradewa-rice-use",
    "mehrgarh-aceramic-cemetery",
    "balathal-ahar-banas",
    "harappa-ravi-phase",
    "southern-neolithic-ashmounds",
    "harappa-kot-diji-phase",
  ];
  const records = prehistoricIndiaEra.periods.flatMap((period) => period.events);
  for (const id of ids) {
    const record = records.find((event) => event.id === id);
    assert.ok(record, id);
    assert.ok(record.significance?.length > 80, id);
    assert.notEqual(record.significance, record.description, id);
    assert.ok(record.sources.length, id);
  }
});
