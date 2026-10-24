require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { compileHistory } = require("../src/lib/content/compile.ts");
const { validateHistory } = require("../src/lib/content/validate.ts");
const { indianHistoryTimeline } = require("../src/data/timeline/indian-history.ts");
const { scenePresentations } = require("../src/data/scenes/scene-presentations.ts");
const { bce, ce, interpolateHistoricalDates } = require("../src/lib/historical-date.ts");
const { resolveTimelinePoint } = require("../src/lib/timeline.ts");
const { getTimelineProgressForIndex } = require("../src/lib/timeline-position.ts");
const fixture = () => structuredClone(indianHistoryTimeline);
const first = (eras) => eras[0].periods[1].events[0];

test("canonical data compiles and navigation round-trips through the resolver", () => {
  const model = compileHistory(fixture(), scenePresentations);
  assert.equal(
    model.events.length,
    56 +
      require("../src/data/timeline/classical/events.ts").classicalEvents.length +
      require("../src/data/timeline/early-modern/events.ts").earlyModernEvents.length,
  );
  model.events.forEach((event, index) => {
    assert.equal(
      resolveTimelinePoint(model.points, getTimelineProgressForIndex(index, model.points)).item.id,
      event.id,
    );
    assert.equal(model.scenes[index].timelinePointId, event.id);
  });
  assert.equal(model.navigation.at(-1).firstEventIndex, null);
  assert.ok(!model.issues.some(({ message }) => message.includes("sources")));
});
test("new content without a visual gets a default scene", () => {
  const eras = fixture();
  delete first(eras).visualReference;
  assert.equal(
    compileHistory(eras, scenePresentations).scenes[0].layers.at(-1).renderer,
    "event-content",
  );
});
test("explicit missing visuals still fail", () => {
  assert.throws(() => compileHistory(fixture(), {}), /Missing scene/);
});
test("duplicate hierarchy identifiers and invalid chronology fail", () => {
  const eras = fixture();
  eras[1].id = eras[0].id;
  first(eras).dateEnd = { kind: "years-ago", years: 2_000_000 };
  const issues = validateHistory(eras);
  assert.ok(issues.some(({ message }) => message.includes("Duplicate")));
  assert.ok(issues.some(({ message }) => message.includes("precedes")));
});
test("relationships, citations, and researched source requirements are enforced", () => {
  const eras = fixture();
  Object.assign(first(eras), {
    relatedEvents: ["missing"],
    citations: [{ sourceId: "missing" }],
    contentStatus: "researched",
    sources: [],
    interpretationNotes: [],
  });
  const errors = validateHistory(eras).filter(({ severity }) => severity === "error");
  assert.equal(errors.length, 3);
});
test("scene media and timing are checked before browser rendering", () => {
  const scenes = structuredClone(scenePresentations);
  scenes["exhibit-indus-valley-civilization"].scene.layers[0].asset = {
    referenceId: "missing",
    type: "image",
  };
  assert.throws(() => compileHistory(fixture(), scenes), /Unknown media/);
  delete scenes["exhibit-indus-valley-civilization"].scene.layers[0].asset;
  scenes["exhibit-indus-valley-civilization"].scene.layers[0].timeline = { start: 0.8, end: 0.2 };
  assert.throws(() => compileHistory(fixture(), scenes), /Invalid layer range/);
});
test("empty content fails clearly; a single event still resolves", () => {
  assert.throws(() => compileHistory([], {}), /at least one event/);
  const eras = [fixture()[0]];
  const event = first(eras);
  event.relatedEvents = [];
  eras[0].periods = [{ id: "single-period", title: "Single period", events: [event] }];
  const model = compileHistory(eras, scenePresentations);
  assert.equal(resolveTimelinePoint(model.points, 1).index, 0);
});

test("prehistoric events have traceable citations and preserve overlapping chronology", () => {
  const model = compileHistory(fixture(), scenePresentations);
  const prehistoric = model.events.filter(({ node }) => node.era.id === "prehistoric-india");
  assert.equal(prehistoric.length, 24);
  for (const {
    node: { event },
  } of prehistoric) {
    assert.equal(event.contentStatus, "researched");
    assert.ok(event.sources.length > 0);
    assert.ok(event.citations.length > 0);
    for (const citation of event.citations)
      assert.ok(event.sources.some(({ id }) => id === citation.sourceId));
    assert.ok(event.interpretationNotes.length > 0);
  }
  const ids = model.events.map(({ id }) => id);
  assert.equal(ids[0], "lower-palaeolithic-scaffold");
  assert.equal(ids[1], "attirampakkam-middle-palaeolithic");
  assert.ok(
    ids.indexOf("attirampakkam-middle-palaeolithic") < ids.indexOf("singi-talav-acheulian"),
  );
  assert.ok(ids.indexOf("singi-talav-acheulian") < ids.indexOf("sandhav-coastal-occupation"));
  assert.ok(ids.indexOf("chopani-mando-late-phase") < ids.indexOf("harappa-ravi-phase"));
  assert.ok(ids.indexOf("mahagara-neolithic") < ids.indexOf("malwa-villages"));
  assert.ok(ids.indexOf("lahuradewa-rice-use") < ids.indexOf("bagor-mesolithic"));
  assert.ok(ids.indexOf("balathal-ahar-banas") < ids.indexOf("burzahom-neolithic"));
  assert.ok(ids.indexOf("harappa-kot-diji-phase") < ids.indexOf("indus-valley-civilization"));
});

test("research gaps never become fictional dated events", () => {
  const { prehistoryGaps } = require("../src/data/timeline/prehistory/gaps.ts");
  const era = fixture()[0];
  for (const gap of prehistoryGaps) {
    assert.equal(gap.date, null);
    assert.ok(era.periods.some(({ id }) => id === gap.periodId));
    assert.ok(gap.missing.length > 0);
  }
  assert.equal(era.periods[0].events.length, 0);
  assert.ok(era.periods[0].context.length > 0);
  assert.ok(
    era.periods
      .find(({ id }) => id === "mesolithic")
      .context.some(({ title }) => title.includes("Bhimbetka")),
  );
});

test("every prehistoric event resolves to a visual scene with usable evidence", () => {
  const model = compileHistory(fixture(), scenePresentations);
  const events = model.events.filter(({ node }) => node.era.id === "prehistoric-india");
  for (const event of events) {
    {
      assert.ok(event.exhibit.caption.length > 20);
      assert.deepEqual(
        event.exhibit.points.map(({ field }) => field),
        ["description", "significance", "interpretation"],
      );
      assert.equal(event.scene.layers.at(-1).renderer, "prehistory-exhibit");
    }
  }
  const scenes = structuredClone(scenePresentations);
  scenes["exhibit-jwalapuram-toba"].exhibit.points[0].x = 101;
  assert.throws(() => compileHistory(fixture(), scenes), /outside its diagram/);
  delete scenes["exhibit-jwalapuram-toba"].exhibit;
  assert.throws(() => compileHistory(fixture(), scenes), /needs its diagram/);
});
test("BCE/CE interpolation never emits year zero", () => {
  for (const progress of [0, 0.25, 0.5, 0.75, 1])
    assert.ok(interpolateHistoricalDates(bce(1), ce(1), progress).year >= 1);
});

test("journey years advance continuously and reverse without changing published event ranges", () => {
  const model = compileHistory(fixture(), scenePresentations);
  const { toTimelineOrdinal } = require("../src/lib/historical-date.ts");
  for (let i = 0; i < model.points.length - 1; i++) {
    let previous = toTimelineOrdinal(model.points[i].date);
    for (const fraction of [0.1, 0.49, 0.51, 0.9]) {
      const resolved = resolveTimelinePoint(
        model.points,
        model.points[i].position +
          fraction * (model.points[i + 1].position - model.points[i].position),
      );
      const current = toTimelineOrdinal(resolved.date);
      assert.ok(current >= previous);
      assert.ok(current <= toTimelineOrdinal(model.points[i + 1].date));
      previous = current;
    }
  }
  const labels = [0.2, 0.4, 0.6, 0.4, 0.2].map(
    (fraction) =>
      resolveTimelinePoint(model.points, fraction / (model.points.length - 1)).dateLabel,
  );
  assert.equal(new Set(labels).size, 3);
  assert.equal(labels[0], labels[4]);
  assert.equal(labels[1], labels[3]);
  const middle = model.events.find(({ id }) => id === "attirampakkam-middle-palaeolithic");
  assert.ok(middle.dateLabel.includes("385") && middle.dateLabel.includes("172"));
});

test("weighted scene pacing preserves anchors and allocates longer image intervals", () => {
  const { createTimelineStops } = require("../src/lib/timeline-position.ts");
  assert.deepEqual(createTimelineStops([1]), [0]);
  assert.deepEqual(createTimelineStops([1, 1, 1]), [0, 0.5, 1]);
  const stops = createTimelineStops([3, 1, 1]);
  assert.ok(stops[1] > 0.5);
  assert.equal(stops[2], 1);
  assert.throws(() => createTimelineStops([0]), RangeError);
  assert.throws(() => createTimelineStops([NaN]), RangeError);
});

test("ancient chapter has sourced ranges, traceable additions, and matching scenes", () => {
  const { ancientIndiaEra, ancientGaps } = require("../src/data/timeline/ancient-india.ts");
  const events = ancientIndiaEra.periods.flatMap((period) => period.events);
  assert.equal(events.length, 15);
  assert.equal(ancientIndiaEra.periods.length, 4);
  for (const event of events) {
    assert.equal(event.contentStatus, "researched");
    assert.ok(event.dateEnd && event.dateScope);
    assert.ok(event.sources.every((source) => source.url.startsWith("https://")));
    assert.ok(event.citations.length > 0);
    assert.ok(event.interpretationNotes.length > 0);
    assert.ok(
      event.contentNeeds.every(
        (need) => /^[A-Z_]+$/.test(need.tag) && need.instruction.length > 30,
      ),
    );
    assert.equal(scenePresentations[event.visualReference.id].scene.timelinePointId, event.id);
  }
  const issues = validateHistory([
    ancientIndiaEra,
    ...fixture().filter((era) => era.id !== ancientIndiaEra.id),
  ]);
  assert.equal(issues.filter((issue) => issue.path?.startsWith(ancientIndiaEra.id)).length, 0);
  assert.ok(
    ancientGaps.every((gap) =>
      ancientIndiaEra.periods.some((period) => period.id === gap.periodId),
    ),
  );
});

test("contemporary thematic scenes remain navigable without invented advancing years", () => {
  const model = compileHistory(fixture(), scenePresentations);
  const start = model.points.findIndex((point) => point.id === "indus-valley-civilization");
  const next = start + 1;
  assert.equal(model.points[start].date.year, model.points[next].date.year);
  assert.ok(model.points[next].position > model.points[start].position);
  const middle = (model.points[start].position + model.points[next].position) / 2;
  const result = resolveTimelinePoint(model.points, middle);
  assert.deepEqual(result.date, model.points[start].date);
});

test("empire chapter preserves anchors, dated evidence and a navigable endpoint", () => {
  const {
    secondUrbanizationEra,
    empireGaps,
  } = require("../src/data/timeline/second-urbanization.ts");
  const events = secondUrbanizationEra.periods.flatMap((p) => p.events);
  assert.equal(events.length, 17);
  assert.ok(secondUrbanizationEra.periods.every((p) => p.events.length));
  assert.ok(events.some((e) => e.id === "mahajanapadas"));
  assert.ok(events.some((e) => e.id === "mauryan-empire"));
  const model = compileHistory(fixture(), scenePresentations);
  assert.equal(events.at(-1).id, "mauryan-successors");
  assert.equal(model.points.find((point) => point.id === "mauryan-successors").date.year, 185);
  for (const event of events) {
    assert.equal(event.contentStatus, "researched");
    assert.ok(event.dateScope && event.sources.length && event.citations.length);
    assert.equal(event.details.length, 2);
    assert.ok(
      event.details.every((d) => d.sourceIds.every((id) => event.sources.some((s) => s.id === id))),
    );
    assert.ok(event.imageNeeds.length && event.imageNeeds.every((n) => /^[A-Z_]+$/.test(n.tag)));
    assert.ok(
      event.contentNeeds.every((n) => /^[A-Z_]+$/.test(n.tag) && n.instruction.length > 30),
    );
    assert.ok(event.citations.every((c) => event.sources.some((s) => s.id === c.sourceId)));
    assert.ok(event.relatedEvents.every((id) => model.events.some((e) => e.id === id)));
    assert.equal(scenePresentations[event.visualReference.id].exhibit.points.length, 3);
  }
  assert.ok(
    empireGaps.every((g) => secondUrbanizationEra.periods.some((p) => p.id === g.periodId)),
  );
  const { empireGalleries } = require("../src/data/scenes/empire-exhibits.ts");
  assert.equal(Object.keys(empireGalleries).length, 7);
  for (const gallery of Object.values(empireGalleries))
    for (const image of gallery) {
      assert.ok(image.credit && image.sourceUrl && image.license);
      assert.ok(
        require("node:fs").existsSync(require("node:path").join(__dirname, "../public", image.src)),
      );
    }
});

test("expanded evidence rejects broken sources and malformed image tags", () => {
  const eras = fixture();
  const event = eras.find((e) => e.id === "second-urbanization-empires").periods[0].events[0];
  event.details[0].sourceIds = ["missing-detail-source"];
  event.imageNeeds[0].tag = "untagged space";
  const issues = validateHistory(eras);
  assert.ok(issues.some((i) => i.message.includes("Unknown detail source")));
  assert.ok(issues.some((i) => i.message.includes("Image spaces need")));
});
