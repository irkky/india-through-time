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
  assert.equal(model.events.length, 4);
  model.events.forEach((event, index) => {
    assert.equal(
      resolveTimelinePoint(model.points, getTimelineProgressForIndex(index, model.events.length))
        .item.id,
      event.id,
    );
    assert.equal(model.scenes[index].timelinePointId, event.id);
  });
  assert.equal(model.navigation.at(-1).firstEventIndex, null);
  assert.ok(model.issues.some(({ message }) => message.includes("sources")));
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
  });
  const errors = validateHistory(eras).filter(({ severity }) => severity === "error");
  assert.equal(errors.length, 3);
});
test("scene media and timing are checked before browser rendering", () => {
  const scenes = structuredClone(scenePresentations);
  scenes["indus-abstract-scene"].scene.layers[0].asset = { referenceId: "missing", type: "image" };
  assert.throws(() => compileHistory(fixture(), scenes), /Unknown media/);
  delete scenes["indus-abstract-scene"].scene.layers[0].asset;
  scenes["indus-abstract-scene"].scene.layers[0].timeline = { start: 0.8, end: 0.2 };
  assert.throws(() => compileHistory(fixture(), scenes), /Invalid layer range/);
});
test("empty content fails clearly; a single event still resolves", () => {
  assert.throws(() => compileHistory([], {}), /at least one event/);
  const eras = [fixture()[0]];
  const model = compileHistory(eras, scenePresentations);
  assert.equal(resolveTimelinePoint(model.points, 1).index, 0);
});
test("BCE/CE interpolation never emits year zero", () => {
  for (const progress of [0, 0.25, 0.5, 0.75, 1])
    assert.ok(interpolateHistoricalDates(bce(1), ce(1), progress).year >= 1);
});
