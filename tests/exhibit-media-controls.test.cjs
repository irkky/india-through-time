require("../scripts/register-typescript.cjs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { compileHistory } = require("../src/lib/content/compile.ts");
const { indianHistoryTimeline } = require("../src/data/timeline/indian-history.ts");
const { scenePresentations } = require("../src/data/scenes/scene-presentations.ts");

const model = compileHistory(indianHistoryTimeline, scenePresentations);

test("every timeline event exposes its assigned video in the third story stage", () => {
  assert.equal(model.events.length, 252);
  for (const event of model.events) {
    assert.equal(event.exhibit?.watchVideo, true, event.id);
    assert.ok(event.node.event.videos?.length, `${event.id}: missing assigned video`);
  }
});

test("every gallery uses the shared arrow, image and video browser configuration", () => {
  const galleryEvents = model.events.filter((event) => event.exhibit?.gallery?.length);
  assert.equal(galleryEvents.length, 168);

  for (const event of galleryEvents) {
    const gallery = event.exhibit.gallery;
    assert.equal(event.exhibit.browseImages, true, event.id);
    assert.ok(event.node.event.videos?.length, `${event.id}: gallery has no video fallback`);
    for (const imageIndex of event.exhibit.stageImages ?? []) {
      assert.ok(imageIndex === null || gallery[imageIndex], `${event.id}: invalid stage image`);
    }
  }
});
