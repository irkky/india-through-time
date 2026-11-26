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
    const eventIds = await evaluate(
      `Array.from(document.querySelectorAll('.visual-scene')).map(scene => scene.dataset.timelinePointId)`,
    );
    assert.equal(eventIds.length, 252);
    let galleryCount = 0;
    let sourceOnlyVideoCount = 0;
    const testedEmbedEras = new Set();
    for (const [eventIndex, id] of eventIds.entries()) {
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
      const hasLoadButton = await evaluate(
        `${active}.querySelector('.inline-video-prompt button') !== null`,
      );
      const eraId = await evaluate(`${active}.dataset.eraId`);
      if (hasLoadButton) {
        assert.match(
          await evaluate(`${active}.querySelector('.inline-exhibit-video > a').textContent`),
          /Watch on YouTube/,
        );
      } else {
        sourceOnlyVideoCount += 1;
        assert.match(
          await evaluate(`${active}.querySelector('.inline-exhibit-video > a').textContent`),
          /Open video source/,
        );
      }
      assert.equal(
        await evaluate(
          `(()=>{const e=${active}.querySelector('.story-exhibit');const v=${active}.querySelector('.inline-exhibit-video').getBoundingClientRect();return e.scrollWidth<=e.clientWidth+1 && v.left>=-1 && v.right<=innerWidth+1 && v.width>0 && v.height>0})()`,
        ),
        true,
        `${id} at ${width}: inline video fits horizontally`,
      );
      if (eventIndex !== 0 && hasLoadButton && !testedEmbedEras.has(eraId)) {
        await click(`${selector} .inline-video-prompt button`);
        await waitFor(`${active}.querySelector('.inline-exhibit-video iframe') !== null`);
        assert.match(
          await evaluate(`${active}.querySelector('.inline-exhibit-video iframe').src`),
          /youtube-nocookie\.com\/embed\//,
        );
        await click(`${selector} .exhibit-point:first-child`);
        await waitFor(`${active}.querySelector('.inline-exhibit-video iframe') === null`);
        await click(`${selector} .exhibit-point:last-child`);
        await waitFor(`${active}.querySelector('.inline-video-prompt button') !== null`);
        testedEmbedEras.add(eraId);
      }
      if (eventIndex === 0) {
        await screenshot(`inline-video-${id}-${width}`);
        await click(`${selector} .inline-video-prompt button`);
        await waitFor(`${active}.querySelector('.inline-exhibit-video iframe') !== null`);
        assert.match(
          await evaluate(`${active}.querySelector('.inline-exhibit-video iframe').src`),
          /youtube-nocookie\.com\/embed\//,
        );
        await navigate(eventIds[1]);
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
        testedEmbedEras.add(eraId);
      }
      const hasControls = await evaluate(
        `${active}.querySelector('.exhibit-media-controls') !== null`,
      );
      if (hasControls) {
        galleryCount += 1;
        assert.equal(
          await evaluate(
            `${active}.querySelector('.exhibit-media-controls [role=status]').textContent`,
          ),
          "Video",
        );
        assert.deepEqual(
          await evaluate(
            `Array.from(${active}.querySelectorAll('.exhibit-media-controls button')).map(button=>button.getAttribute('aria-label') ?? button.textContent.trim())`,
          ),
          ["Previous image", "Next image", "View images"],
        );
        await click(`${selector} .exhibit-media-controls button:last-child`);
        await waitFor(
          `(()=>{const img=${active}.querySelector('.exhibit-drawing img');return img?.complete && img.naturalWidth>0})()`,
        );
        const status = await evaluate(
          `${active}.querySelector('.exhibit-media-controls [role=status]').textContent`,
        );
        assert.match(status, /^Image 1 of \d+$/);
        const count = Number(status.split(" of ")[1]);
        assert.equal(
          await evaluate(
            `${active}.querySelector('.exhibit-media-controls button:last-child').textContent.trim()`,
          ),
          "Watch video",
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
        if (count > 1)
          await waitFor(
            `${active}.querySelector('.exhibit-media-controls [role=status]').textContent !== ${JSON.stringify(status)}`,
          );
        await waitFor(
          `(()=>{const img=${active}.querySelector('.exhibit-drawing img');return img?.complete && img.naturalWidth>0})()`,
        );
        if (id === "sandhav-coastal-occupation") {
          assert.equal(count, 3);
          assert.match(
            await evaluate(`${active}.querySelector('.exhibit-drawing img').getAttribute('src')`),
            /sandhav-excavation\.jpg/,
          );
          await click(`${selector} [aria-label="Next image"]`);
          await waitFor(
            `${active}.querySelector('.exhibit-media-controls [role=status]').textContent === "Image 3 of 3"`,
          );
          assert.match(
            await evaluate(`${active}.querySelector('.exhibit-drawing img').getAttribute('src')`),
            /sandhav-location-map\.png/,
          );
          await click(`${selector} [aria-label="Next image"]`);
          await waitFor(
            `${active}.querySelector('.exhibit-media-controls [role=status]').textContent === "Image 1 of 3"`,
          );
          assert.match(
            await evaluate(`${active}.querySelector('.exhibit-drawing img').getAttribute('src')`),
            /sandhav-stone-tools\.png/,
          );
          await click(`${selector} [aria-label="Next image"]`);
          await waitFor(
            `${active}.querySelector('.exhibit-media-controls [role=status]').textContent === "Image 2 of 3"`,
          );
          await evaluate(`${active}.querySelector('.exhibit-drawing img').decode()`);
          await evaluate(
            "new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))",
          );
          await screenshot(`sandhav-gallery-${width}`);
          await click(`${selector} .gallery-jump`);
          await waitFor("document.querySelector('.exhibit-dialog[open]') !== null");
          assert.equal(
            await evaluate(
              "document.querySelectorAll('.exhibit-dialog[open] .gallery-choices button').length",
            ),
            3,
          );
          assert.equal(
            await evaluate(
              "document.querySelector('.exhibit-dialog[open] .image-spaces') === null",
            ),
            true,
          );
          await click(".exhibit-dialog[open] .history-dialog-header button");
          await waitFor("document.querySelector('.exhibit-dialog[open]') === null");
        }
        await click(`${selector} [aria-label="Previous image"]`);
        await waitFor(
          `${active}.querySelector('.exhibit-media-controls [role=status]').textContent === ${JSON.stringify(status)}`,
        );
        if (["lower-palaeolithic-scaffold", "attirampakkam-middle-palaeolithic"].includes(id)) {
          assert.equal(count, 6);
        }
        await click(`${selector} .exhibit-media-controls button:last-child`);
        await waitFor(`${active}.querySelector('.inline-exhibit-video') !== null`);
        assert.equal(
          await evaluate(
            `${active}.querySelector('.exhibit-media-controls button:last-child').textContent.trim()`,
          ),
          "View images",
        );
      } else {
        assert.equal(
          await evaluate(`${active}.querySelector('.exhibit-drawing img') === null`),
          true,
        );
      }
    }
    assert.equal(galleryCount, 169);
    assert.equal(sourceOnlyVideoCount, 2);
    assert.equal(testedEmbedEras.size, 8);
    console.log(
      `PASS: all 252 events show their assigned video; arrows, image navigation and View images/Watch video toggles verified for all 169 gallery events at ${width}px.`,
    );
  }
  assert.deepEqual(errors, []);
};
