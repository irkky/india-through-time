// Run through browser-smoke.cjs with BROWSER_VIEWPORT_ONLY=1.
const assert = require("node:assert/strict");
const { setTimeout: delay } = require("node:timers/promises");

module.exports = async function checkMobileViewport({
  base,
  send,
  evaluate,
  waitFor,
  screenshot,
  errors,
}) {
  const root = `document.querySelector('[aria-label="Journey through time"]')`;
  const checkGeometry = async (label, pinned = true) => {
    const geometry = await evaluate(`(() => {
      const rect = ${root}.firstElementChild.getBoundingClientRect();
      const viewport = window.visualViewport;
      const nav = document.querySelector('.historical-navigation').getBoundingClientRect();
      return {
        width: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth,
        x: scrollX,
        stage: { left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom },
        viewport: { width: viewport.width, height: viewport.height },
        nav: { top: nav.top, bottom: nav.bottom },
      };
    })()`);
    assert.ok(
      geometry.scrollWidth <= geometry.width + 1,
      `${label}: document overflow ${JSON.stringify(geometry)}`,
    );
    assert.ok(
      Math.abs(geometry.innerWidth - geometry.width) <= 1,
      `${label}: inflated layout viewport`,
    );
    assert.equal(geometry.x, 0, `${label}: sideways page scrolling`);
    if (pinned) {
      assert.ok(Math.abs(geometry.stage.top) <= 1, `${label}: timeline header moved offscreen`);
      assert.ok(Math.abs(geometry.stage.left) <= 1, `${label}: timeline moved sideways`);
      assert.ok(
        Math.abs(geometry.stage.right - geometry.viewport.width) <= 1,
        `${label}: side gap`,
      );
      assert.ok(
        Math.abs(geometry.stage.bottom - geometry.viewport.height) <= 1,
        `${label}: bottom gap`,
      );
      assert.ok(
        geometry.nav.top >= 0 && geometry.nav.bottom <= geometry.viewport.height + 1,
        `${label}: navigation clipped`,
      );
    }
  };
  const resize = (width, height) =>
    send("Emulation.setDeviceMetricsOverride", {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: true,
    });
  await resize(390, 780);
  await send("Emulation.setTouchEmulationEnabled", { enabled: true });
  await send("Page.navigate", { url: base });
  await waitFor("document.querySelectorAll('.story-exhibit').length > 200");
  await waitFor("document.querySelector('.visual-scene[aria-hidden=false]') !== null");
  await checkGeometry("opening");

  for (const [width, height] of [
    [390, 780],
    [360, 740],
    [320, 640],
    [430, 932],
    [844, 390],
  ]) {
    await resize(width, height);
    for (const fraction of [0.08, 0.5, 0.9, 0.5, 0.08]) {
      await evaluate(`window.scrollTo(0, ${root}.offsetHeight * ${fraction})`);
      await delay(350);
      await checkGeometry(`${width}x${height}, progress ${fraction}`);
    }
  }

  // Exercise native touch scrolling, rather than just programmatic navigation.
  await resize(390, 780);
  await evaluate(`window.scrollTo(0, ${root}.offsetHeight * 0.5)`);
  await delay(500);
  await screenshot("mobile-before-touch");
  for (const yDistance of [-500, 500]) {
    const before = await evaluate("scrollY");
    const startY = yDistance < 0 ? 600 : 100;
    await send("Input.dispatchTouchEvent", {
      type: "touchStart",
      touchPoints: [{ x: 380, y: startY }],
    });
    for (let step = 1; step <= 15; step++) {
      await send("Input.dispatchTouchEvent", {
        type: "touchMove",
        touchPoints: [{ x: 380, y: startY + (yDistance * step) / 15 }],
      });
      await delay(20);
    }
    await send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
    await delay(400);
    const after = await evaluate("scrollY");
    assert.ok(
      yDistance < 0 ? after > before : after < before,
      `Touch scroll ${yDistance} must move in both directions (${before} -> ${after})`,
    );
    await checkGeometry(`touch ${yDistance}`);
  }
  // Simulate the usable height changing as mobile browser controls appear/disappear.
  for (const height of [870, 720, 870, 780]) {
    await resize(390, height);
    await evaluate("window.scrollBy(0, 300)");
    await delay(400);
    await checkGeometry(`viewport height ${height}`);
  }
  await screenshot("mobile-viewport-fixed");

  // Previously, placeholder text in readers far below the timeline widened the whole page.
  await evaluate(
    "document.querySelectorAll('.history-reader details').forEach(d => d.open = true)",
  );
  for (const width of [320, 390, 1440]) {
    await resize(width, 900);
    await evaluate("window.scrollTo(0, document.documentElement.scrollHeight)");
    await delay(300);
    await checkGeometry(`expanded readers ${width}`, false);
  }
  assert.deepEqual(errors, []);
  console.log(
    "PASS: mobile document width; forward/reverse timeline and touch scrolling; viewport height changes; portrait/landscape; visible navigation; expanded readers; no runtime errors.",
  );
};
