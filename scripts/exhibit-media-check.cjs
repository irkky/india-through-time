const assert = require("node:assert/strict");

module.exports = async function checkExhibitMedia({
  base,
  send,
  evaluate,
  waitFor,
  click,
  navigate,
  active,
  screenshot,
  errors,
}) {
  await send("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-reduced-motion", value: "reduce" }],
  });
  for (const width of [1440, 390, 320]) {
    await send("Emulation.setDeviceMetricsOverride", {
      width,
      height: width === 320 ? 640 : 900,
      deviceScaleFactor: 1,
      mobile: width < 600,
    });
    await send("Page.navigate", { url: base });
    await waitFor(
      "document.querySelector('.journey-start-button') && document.querySelectorAll('.journey-select option').length > 18",
    );
    await waitFor("document.querySelector('.visual-scene[data-scene-state=active]') !== null");
    await click(".journey-start-button");
    await waitFor(
      "document.querySelector('.historical-experience-layer').getAttribute('aria-hidden') === 'false'",
    );
    const prehistoricIds = await evaluate(
      `Array.from(document.querySelectorAll('[data-era-id="prehistoric-india"]')).map(scene => scene.dataset.timelinePointId)`,
    );
    assert.equal(prehistoricIds.length, 24);
    for (const [eventIndex, id] of prehistoricIds.entries()) {
      await navigate(id);
      const selector = '.visual-scene[aria-hidden="false"]';
      await click(`${selector} .exhibit-point:last-child`);
      await waitFor(`${active}.querySelector('.inline-exhibit-video') !== null`);
      assert.equal(
        await evaluate(`${active}.querySelector('.exhibit-figure-header span').textContent`),
        "Video guide",
      );
      assert.equal(
        await evaluate(
          `${active}.querySelector('.exhibit-figure-header').textContent.includes('Teaching diagram')`,
        ),
        false,
      );
      assert.ok(
        await evaluate(`${active}.querySelector('.inline-exhibit-video > a').href.length > 0`),
      );
      if (eventIndex === 0) {
        await screenshot(`inline-video-${id}-${width}`);
        await click(`${selector} .inline-video-prompt button`);
        await waitFor(`${active}.querySelector('.inline-exhibit-video iframe') !== null`);
        assert.match(
          await evaluate(`${active}.querySelector('.inline-exhibit-video iframe').src`),
          /youtube-nocookie\.com\/embed\//,
        );
        await navigate(prehistoricIds[1]);
        await waitFor("document.querySelector('.inline-exhibit-video iframe') === null");
        await navigate(id);
        await click(`${selector} .exhibit-point:last-child`);
        await waitFor(`${active}.querySelector('.inline-video-prompt button') !== null`);
        await click(`${selector} .gallery-jump`);
        await waitFor("document.querySelector('.exhibit-dialog[open]') !== null");
        assert.equal(
          await evaluate("document.querySelector('.exhibit-dialog[open] .image-spaces') === null"),
          true,
        );
        await click(".exhibit-dialog[open] .history-dialog-header button");
        await waitFor("document.querySelector('.exhibit-dialog[open]') === null");
        await click(`${selector} .inline-video-prompt button`);
        await waitFor(`${active}.querySelector('.inline-exhibit-video iframe') !== null`);
        await evaluate("window.scrollTo(0, document.documentElement.scrollHeight)");
        await waitFor("document.querySelector('.inline-exhibit-video iframe') === null");
        await navigate(id);
        await click(`${selector} .exhibit-point:last-child`);
        await waitFor(`${active}.querySelector('.inline-video-prompt button') !== null`);
      }
      const hasControls = await evaluate(
        `${active}.querySelector('.exhibit-media-controls') !== null`,
      );
      if (hasControls) {
        assert.equal(
          await evaluate(
            `${active}.querySelector('.exhibit-media-controls [role=status]').textContent`,
          ),
          "Video",
        );
        await click(`${selector} .exhibit-media-controls button:last-child`);
        await waitFor(
          `(()=>{const img=${active}.querySelector('.exhibit-drawing img');return img?.complete && img.naturalWidth>0})()`,
        );
        const status = await evaluate(
          `${active}.querySelector('.exhibit-media-controls [role=status]').textContent`,
        );
        assert.match(status, /^1 \/ \d+$/);
        const count = Number(status.split(" / ")[1]);
        assert.equal(
          await evaluate(
            `${active}.querySelector('.exhibit-point:last-child').getAttribute('aria-pressed')`,
          ),
          "true",
        );
        assert.equal(
          await evaluate(
            `(()=>{const e=${active}.querySelector('.story-exhibit'); const r=${active}.querySelector('.exhibit-media-controls').getBoundingClientRect();return e.scrollWidth<=e.clientWidth+1 && e.scrollHeight<=e.clientHeight+2 && r.left>=0 && r.right<=innerWidth && r.bottom<=innerHeight})()`,
          ),
          true,
          `${id} at ${width}: controls fit`,
        );
        await click(`${selector} [aria-label="Next image"]`);
        if (count > 1)
          await waitFor(
            `${active}.querySelector('.exhibit-media-controls [role=status]').textContent !== ${JSON.stringify(status)}`,
          );
        await click(`${selector} [aria-label="Previous image"]`);
        await waitFor(
          `${active}.querySelector('.exhibit-media-controls [role=status]').textContent === ${JSON.stringify(status)}`,
        );
        if (["lower-palaeolithic-scaffold", "attirampakkam-middle-palaeolithic"].includes(id)) {
          assert.equal(count, 6);
        }
        await click(`${selector} .exhibit-media-controls button:last-child`);
        await waitFor(`${active}.querySelector('.inline-exhibit-video') !== null`);
      } else {
        assert.equal(
          await evaluate(`${active}.querySelector('.exhibit-drawing img') === null`),
          true,
        );
      }
    }
    console.log(
      `PASS: Watch video replaces the third-stage teaching diagram for all 24 Prehistoric India scenes; gallery toggles and viewport fit verified at ${width}px.`,
    );
  }
  assert.deepEqual(errors, []);
};
