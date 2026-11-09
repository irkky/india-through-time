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
    for (const id of ["lower-palaeolithic-scaffold", "attirampakkam-middle-palaeolithic"]) {
      await navigate(id);
      const selector = '.visual-scene[aria-hidden="false"]';
      await click(`${selector} .exhibit-point:last-child`);
      await waitFor(`${active}.querySelector('.inline-exhibit-video') !== null`);
      assert.equal(
        await evaluate(
          `${active}.querySelector('.exhibit-media-controls [role=status]').textContent`,
        ),
        "Video",
      );
      await screenshot(`inline-video-${id}-${width}`);
      await click(`${selector} .inline-video-prompt button`);
      await waitFor(`${active}.querySelector('.inline-exhibit-video iframe') !== null`);
      assert.match(
        await evaluate(`${active}.querySelector('.inline-exhibit-video iframe').src`),
        /youtube-nocookie\.com\/embed\//,
      );
      await click(`${selector} .exhibit-media-controls button:last-child`);
      const sources = new Set();
      for (let index = 0; index < 6; index++) {
        await waitFor(
          `(()=>{const img=${active}.querySelector('.exhibit-drawing img');return img?.complete && img.naturalWidth>0})()`,
        );
        sources.add(
          await evaluate(`${active}.querySelector('.exhibit-drawing img').getAttribute('src')`),
        );
        assert.equal(
          await evaluate(
            `${active}.querySelector('.exhibit-media-controls [role=status]').textContent`,
          ),
          `${index + 1} / 6`,
        );
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
      }
      assert.equal(sources.size, 6);
      await waitFor(
        `${active}.querySelector('.exhibit-media-controls [role=status]').textContent === '1 / 6'`,
      );
      await click(`${selector} [aria-label="Previous image"]`);
      await waitFor(
        `${active}.querySelector('.exhibit-media-controls [role=status]').textContent === '6 / 6'`,
      );
      await click(`${selector} .exhibit-point:first-child`);
      await waitFor(
        `${active}.querySelector('.exhibit-media-controls [role=status]').textContent === '6 / 6'`,
      );
      await evaluate(`${active}.querySelector('.exhibit-drawing img').decode()`);
      await screenshot(`inline-media-${id}-${width}`);
      await click(`${selector} .exhibit-media-controls button:last-child`);
      await waitFor(`${active}.querySelector('.inline-exhibit-video') !== null`);
      await click(`${selector} .exhibit-point:nth-child(2)`);
      await waitFor(`${active}.querySelector('.inline-exhibit-video') !== null`);
    }
    console.log(
      `PASS: six images and inline video in both Palaeolithic scenes, third-step playback, wraparound, video toggle, independent stages and viewport fit at ${width}px.`,
    );
  }
  assert.deepEqual(errors, []);
};
