// Optional production-browser regression. Requires Node 22+ and installed Chrome/Chromium.
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const assert = require("node:assert/strict");
const { setTimeout: delay } = require("node:timers/promises");

async function main() {
  const base = process.argv[2] || "http://localhost:3000";
  assert.equal((await fetch(base)).status, 200, "Start the production server first.");
  const chrome =
    process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  assert.ok(fs.existsSync(chrome), "Set CHROME_PATH to an installed Chrome/Chromium executable.");
  assert.ok(globalThis.WebSocket, "Browser checks require Node 22 or newer.");
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), "prehistory-browser-"));
  const browser = spawn(
    chrome,
    [
      "--headless",
      "--disable-gpu",
      "--no-first-run",
      "--remote-debugging-port=0",
      `--user-data-dir=${profile}`,
    ],
    { windowsHide: true, stdio: "ignore" },
  );
  let launchError;
  browser.on("error", (error) => {
    launchError = error;
  });
  let socket;
  let send;
  const artifactDir = path.resolve(".browser-artifacts");
  fs.mkdirSync(artifactDir, { recursive: true });
  try {
    const portFile = path.join(profile, "DevToolsActivePort");
    for (let tries = 0; !fs.existsSync(portFile); tries++) {
      if (launchError) throw launchError;
      if (tries > 100) throw Error("Chrome debugging endpoint did not start.");
      await delay(100);
    }
    const port = fs.readFileSync(portFile, "utf8").split("\n")[0].trim();
    const page = await (
      await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, {
        method: "PUT",
      })
    ).json();
    socket = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((resolve, reject) => {
      socket.addEventListener("open", resolve, { once: true });
      socket.addEventListener("error", reject, { once: true });
    });
    let id = 0;
    const pending = new Map();
    const errors = [];
    socket.addEventListener("message", ({ data }) => {
      const message = JSON.parse(data);
      if (message.method === "Runtime.exceptionThrown")
        errors.push(
          message.params.exceptionDetails.exception?.description ??
            message.params.exceptionDetails.text,
        );
      if (
        message.method === "Runtime.consoleAPICalled" &&
        ["error", "warning", "warn"].includes(message.params.type)
      ) {
        const description = message.params.args
          .map((arg) => arg.description ?? arg.value ?? "")
          .join(" ");
        if (/hydrat|server rendered HTML|didn't match|GSAP target .*not found/i.test(description))
          errors.push(description);
      }
      if (message.id) {
        pending.get(message.id)?.(message);
        pending.delete(message.id);
      }
    });
    send = (method, params = {}) =>
      new Promise((resolve, reject) => {
        const requestId = ++id;
        const timeout = setTimeout(() => {
          pending.delete(requestId);
          reject(Error(`CDP timeout: ${method}`));
        }, 10000);
        pending.set(requestId, (message) => {
          clearTimeout(timeout);
          if (message.error) reject(Error(message.error.message));
          else resolve(message.result);
        });
        socket.send(JSON.stringify({ id: requestId, method, params }));
      });
    const evaluate = async (expression) => {
      const result = await send("Runtime.evaluate", {
        expression,
        returnByValue: true,
        awaitPromise: true,
      });
      if (result.exceptionDetails) throw Error(result.exceptionDetails.text);
      return result.result.value;
    };
    const waitFor = async (expression) => {
      for (let attempt = 0; attempt < 100; attempt++) {
        if (await evaluate(expression)) return;
        await delay(80);
      }
      throw Error(`Browser condition failed: ${expression}`);
    };
    const click = async (selector) =>
      evaluate(
        `(()=>{const target=document.querySelector(${JSON.stringify(selector)});target.focus({preventScroll:true});target.click();})()`,
      );
    const active = `document.querySelector('.visual-scene[aria-hidden="false"]')`;
    const navigate = async (eventId) => {
      await evaluate(
        `(()=>{const select=document.querySelectorAll('.journey-select')[1];select.value=${JSON.stringify(eventId)};select.dispatchEvent(new Event('change',{bubbles:true}));})()`,
      );
      await waitFor(`${active}?.dataset.timelinePointId === ${JSON.stringify(eventId)}`);
    };
    const screenshot = async (name) => {
      const result = await send("Page.captureScreenshot", { format: "png" });
      fs.writeFileSync(path.join(artifactDir, `${name}.png`), Buffer.from(result.data, "base64"));
    };
    await send("Runtime.enable");
    await send("Emulation.setEmulatedMedia", {
      features: [{ name: "prefers-reduced-motion", value: "reduce" }],
    });
    for (const width of [1440, 390]) {
      await send("Emulation.setDeviceMetricsOverride", {
        width,
        height: 900,
        deviceScaleFactor: 1,
        mobile: width < 600,
      });
      await send("Page.navigate", { url: base });
      await waitFor(
        `document.querySelector('.journey-start-button') && document.querySelectorAll('.journey-select option').length > 18`,
      );
      await waitFor("document.querySelector('.visual-scene[data-scene-state=active]') !== null");
      await click(".journey-start-button");
      await waitFor(
        `document.querySelector('.historical-experience-layer').getAttribute('aria-hidden') === 'false'`,
      );
      const ids = await evaluate(
        `Array.from(document.querySelectorAll('[data-era-id="prehistoric-india"]')).filter(e=>e.querySelector('.story-exhibit')).map(e=>e.dataset.timelinePointId)`,
      );
      assert.equal(ids.length, 24);
      for (const eventId of ids) {
        await navigate(eventId);
        assert.equal(await evaluate(`${active}.querySelectorAll('.exhibit-point').length`), 3);
        assert.equal(
          await evaluate(
            `(()=>{const e=${active}.querySelector('.story-exhibit');return e.scrollHeight<=e.clientHeight+2})()`,
          ),
          true,
          `Scene fits viewport: ${eventId} at ${width}`,
        );
        assert.equal(
          await evaluate(
            `Array.from(document.querySelectorAll('.visual-scene')).filter(e=>e!==${active}).every(e=>e.inert)`,
          ),
          true,
        );
      }
      await navigate("lower-palaeolithic-scaffold");
      await click('.visual-scene[aria-hidden="false"] .exhibit-point:last-child');
      await waitFor(`${active}.querySelector('.exhibit-insight p').textContent.includes('1.51')`);
      await screenshot(`lower-palaeolithic-${width}`);
      for (const [eventId, count] of [
        ["lower-palaeolithic-scaffold", 4],
        ["attirampakkam-middle-palaeolithic", 6],
      ]) {
        await navigate(eventId);
        await click('.visual-scene[aria-hidden="false"] .gallery-jump');
        assert.equal(
          await evaluate(`${active}.querySelectorAll('.gallery-choices button').length`),
          count,
        );
        for (let index = 0; index < count; index++) {
          await click(
            `.visual-scene[aria-hidden="false"] .gallery-choices button:nth-child(${index + 1})`,
          );
          await waitFor(
            `${active}.querySelector('.gallery-choices button:nth-child(${index + 1})').getAttribute('aria-pressed') === 'true'`,
          );
          await waitFor(
            `(()=>{const img=${active}.querySelector('.gallery-image-surface img'); return img?.complete && img.naturalWidth > 0;})()`,
          );
          assert.equal(
            await evaluate(
              `${active}.querySelector('.gallery-links a').href === ${active}.querySelector('.gallery-image-surface img').src`,
            ),
            true,
          );
        }
        assert.equal(
          await evaluate(
            `${active}.querySelector('.prehistory-exhibit').scrollWidth <= ${active}.querySelector('.prehistory-exhibit').clientWidth + 1`,
          ),
          true,
        );
        await evaluate(`${active}.querySelector('.gallery-image-surface img').decode()`);
        await delay(200);
        await screenshot(`gallery-${eventId}-${width}`);
        await click(".exhibit-dialog[open] .history-dialog-header button");
        await waitFor("!document.querySelector('.exhibit-dialog[open]')");
      }
      await navigate("attirampakkam-middle-palaeolithic");
      await click('.visual-scene[aria-hidden="false"] .exhibit-point:last-child');
      await waitFor(
        `${active}.querySelector('.exhibit-insight h3').textContent === 'Dating & limits'`,
      );
      assert.ok(
        await evaluate(`${active}.querySelector('.exhibit-insight p').textContent.includes('385')`),
      );
      await screenshot(`exhibit-${width}`);
      await click(".journey-button-accent");
      assert.equal(await evaluate("!!document.querySelector('dialog[open]')"), true);
      assert.ok(
        await evaluate(
          "document.querySelector('.history-source-list a').href.includes('29388951')",
        ),
      );
      await send("Input.dispatchKeyEvent", {
        type: "keyDown",
        key: "Escape",
        code: "Escape",
        windowsVirtualKeyCode: 27,
      });
      await send("Input.dispatchKeyEvent", {
        type: "keyUp",
        key: "Escape",
        code: "Escape",
        windowsVirtualKeyCode: 27,
      });
      await waitFor("!document.querySelector('dialog[open]')");
      assert.equal(
        await evaluate("document.activeElement.classList.contains('journey-button-accent')"),
        true,
      );
      await click(".journey-toolbar > .journey-button:not(.journey-button-accent)");
      await evaluate(
        "(()=>{const input=document.querySelector('input[type=search]');Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(input,'Lahuradewa');input.dispatchEvent(new Event('input',{bubbles:true}));})()",
      );
      await waitFor("document.querySelectorAll('.history-event-result').length === 1");
      await screenshot(`explorer-${width}`);
      await click(".history-event-result");
      await waitFor(`${active}?.dataset.timelinePointId === 'lahuradewa-rice-use'`);
      await click('[aria-label="Next event"]');
      await waitFor(`${active}?.dataset.timelinePointId === 'mehrgarh-aceramic-cemetery'`);
      assert.equal(await evaluate("document.documentElement.scrollWidth > innerWidth"), false);
      const ancientIds = await evaluate(
        `Array.from(document.querySelectorAll('[data-era-id="ancient-india-early-transitions"]')).map(e=>e.dataset.timelinePointId)`,
      );
      assert.equal(ancientIds.length, 15);
      for (const eventId of ancientIds) {
        await navigate(eventId);
        assert.equal(
          await evaluate(
            `(()=>{const e=${active}.querySelector('.story-exhibit');return e.scrollHeight<=e.clientHeight+2 && e.scrollWidth<=e.clientWidth+2})()`,
          ),
          true,
          `Ancient scene fits: ${eventId} at ${width}`,
        );
        await click('.visual-scene[aria-hidden="false"] .exhibit-point:last-child');
        assert.ok(
          await evaluate(`${active}.querySelector('.exhibit-insight p').textContent.length > 50`),
        );
        await click('.visual-scene[aria-hidden="false"] .gallery-jump');
        await waitFor("!!document.querySelector('.exhibit-dialog[open] .content-need-tag')");
        if (["indus-seals-writing", "rakhigarhi-cemetery"].includes(eventId)) {
          await waitFor(
            `(()=>{const img=document.querySelector('.exhibit-dialog[open] .gallery-image-surface img');return img?.complete && img.naturalWidth>0})()`,
          );
          await screenshot(`ancient-gallery-${eventId}-${width}`);
        }
        assert.ok(
          await evaluate(
            `document.querySelectorAll('.exhibit-dialog[open] .history-source-list a').length > 0`,
          ),
        );
        await click(".exhibit-dialog[open] .history-dialog-header button");
        await waitFor("!document.querySelector('.exhibit-dialog[open]')");
      }
      await navigate("indus-seals-writing");
      await click('.visual-scene[aria-hidden="false"] .exhibit-point:nth-child(2)');
      await waitFor(
        `(()=>{const img=${active}.querySelector('.exhibit-drawing img');return img?.complete && img.naturalWidth>0})()`,
      );
      await screenshot(`ancient-seal-${width}`);
      await navigate("dholavira-water-city");
      await screenshot(`ancient-water-${width}`);
      await navigate("early-upanishads");
      await screenshot(`ancient-oral-${width}`);
      await click(".journey-button-accent");
      assert.ok(
        await evaluate(
          "document.querySelector('.history-evidence').textContent.includes('Date scope:')",
        ),
      );
      await click(".history-dialog:not(.exhibit-dialog) .history-dialog-header button");
    }
    await send("Page.navigate", { url: `${base}/#event=inamgaon-settlement` });
    await waitFor(`${active}?.dataset.timelinePointId === 'inamgaon-settlement'`);
    await send("Emulation.setEmulatedMedia", {
      features: [{ name: "prefers-reduced-motion", value: "no-preference" }],
    });
    await send("Page.navigate", { url: `${base}/?motion=normal#event=burzahom-neolithic` });
    await waitFor(`${active}?.dataset.timelinePointId === 'burzahom-neolithic'`);
    await delay(1100);
    await screenshot("normal-motion");
    // Exercise a real scroll interval in both directions under normal motion.
    await navigate("attirampakkam-middle-palaeolithic");
    await delay(1300);
    const firstY = await evaluate("scrollY");
    await navigate("singi-talav-acheulian");
    await delay(1300);
    const secondY = await evaluate("scrollY");
    assert.ok(secondY > firstY);
    for (const [fraction, step] of [
      [0.05, "1"],
      [0.23, "2"],
      [0.05, "1"],
    ]) {
      await evaluate(`window.scrollTo(0, ${firstY + (secondY - firstY) * fraction})`);
      await delay(500);
      assert.equal(
        await evaluate(`${active}.querySelector('.story-exhibit').dataset.storyStep`),
        step,
        "Story stages follow forward and reverse scrolling",
      );
    }
    const journeyYears = [];
    for (const fraction of [0.35, 0.5, 0.65, 0.5, 0.35]) {
      await evaluate(`window.scrollTo(0, ${firstY + (secondY - firstY) * fraction})`);
      await delay(400);
      journeyYears.push(
        await evaluate("document.querySelector('[data-journey-year]').textContent"),
      );
      const opacity = await evaluate(
        `Array.from(document.querySelectorAll('.visual-scene')).map(e => Number(getComputedStyle(e).opacity))`,
      );
      assert.ok(opacity.every((value) => value >= 0 && value <= 1));
      assert.ok(
        opacity.reduce((sum, value) => sum + value, 0) > 0.95,
        "No blank frame at a crossfade",
      );
      assert.equal(
        await evaluate("document.querySelectorAll('.visual-scene[aria-hidden=false]').length"),
        1,
      );
      if (fraction === 0.5)
        assert.ok(
          opacity.filter((value) => value > 0.05 && value < 0.95).length === 2,
          "Both scenes participate in the midpoint crossfade",
        );
      assert.ok(
        await evaluate(
          `Array.from(document.querySelectorAll('.visual-scene')).filter(e=>Number(getComputedStyle(e).opacity)>.01 && e.querySelector('.story-copy') && Number(getComputedStyle(e.querySelector('.story-copy')).opacity)>.01).length <= 1`,
        ),
        "Adjacent scene text does not overlap",
      );
    }
    assert.equal(new Set(journeyYears).size, 3, "Year counter changes within a scroll interval");
    assert.equal(journeyYears[0], journeyYears[4], "Scrolling back restores the earlier year");
    assert.equal(journeyYears[1], journeyYears[3]);
    await screenshot("scroll-transition");
    // Cross a real chapter boundary, including the final handoff to the next era.
    for (const pair of [
      ["harappa-kot-diji-phase", "indus-valley-civilization"],
      ["early-upanishads", "mahajanapadas"],
    ]) {
      await navigate(pair[0]);
      await delay(1200);
      const start = await evaluate("scrollY");
      await navigate(pair[1]);
      await delay(1200);
      const end = await evaluate("scrollY");
      assert.ok(end > start);
      for (const fraction of [0.25, 0.5, 0.75, 0.5, 0.25]) {
        await evaluate(`window.scrollTo(0, ${start + (end - start) * fraction})`);
        await delay(400);
        assert.equal(
          await evaluate("document.querySelectorAll('.visual-scene[aria-hidden=false]').length"),
          1,
        );
        assert.ok(
          await evaluate(
            "Array.from(document.querySelectorAll('.visual-scene')).reduce((sum,e)=>sum+Number(getComputedStyle(e).opacity),0)>.95",
          ),
        );
      }
    }
    await evaluate("window.scrollTo(0, document.documentElement.scrollHeight)");
    await delay(600);
    await send("Page.reload");
    await waitFor("document.querySelectorAll('.story-exhibit').length === 39");
    await waitFor("document.querySelectorAll('#prehistory-reader details').length === 24");
    await waitFor("document.querySelectorAll('#ancient-reader details').length === 15");
    await delay(1200);
    await evaluate("window.scrollTo(0, document.documentElement.scrollHeight)");
    await delay(600);
    assert.equal(await evaluate("document.querySelectorAll('.visual-scene').length"), 41);
    assert.deepEqual(errors, []);
    await send("Emulation.setScriptExecutionDisabled", { value: true });
    await send("Page.reload");
    await waitFor("document.querySelectorAll('#prehistory-reader details').length === 24");
    await waitFor("document.querySelectorAll('#ancient-reader details').length === 15");
    console.log(
      "PASS: all 39 prehistoric/ancient exhibits on desktop/mobile; 12 gallery images; evidence tags; search; sources; keyboard focus; navigation; shared links; chapter transitions; forward/reverse crossfades; reduced motion; no hydration/runtime exceptions; both readers without JavaScript.",
    );
    console.log(`Screenshots: ${artifactDir}`);
  } finally {
    if (send && socket?.readyState === WebSocket.OPEN) await send("Browser.close").catch(() => {});
    socket?.close();
    browser.kill();
    // Only delete the unique profile created by this invocation, inside the OS temp directory.
    const resolved = path.resolve(profile);
    if (
      path.dirname(resolved) === path.resolve(os.tmpdir()) &&
      path.basename(resolved).startsWith("prehistory-browser-")
    ) {
      await delay(500);
      fs.rmSync(resolved, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
    }
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
