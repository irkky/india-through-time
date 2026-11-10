// Optional production-browser regression. Requires Node 22+ and installed Chrome/Chromium.
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const assert = require("node:assert/strict");
const { setTimeout: delay } = require("node:timers/promises");
async function main() {
  const base = process.argv[2] || "http://localhost:3000";
  const chapters = {
    prehistory: {
      readerId: "prehistory-reader",
      cards: 9,
      links: 12,
      sample: "lower-palaeolithic-scaffold",
      prefix: "",
    },
    ancient: {
      readerId: "ancient-reader",
      cards: 11,
      links: 13,
      sample: "indus-valley-civilization",
      prefix: "ancient-",
    },
    empires: {
      readerId: "empires-reader",
      cards: 15,
      links: 17,
      sample: "mauryan-empire",
      prefix: "empires-",
    },
    classical: {
      readerId: "classical-reader",
      cards: 25,
      links: 33,
      sample: "gupta-world",
      prefix: "classical-",
    },
  };
  chapters["early-modern"] = {
    readerId: "early-modern-reader",
    cards: 42,
    links: 47,
    sample: "akbar-religious-dialogue",
    prefix: "early-modern-",
  };
  chapters.colonial = {
    readerId: "colonial-reader",
    cards: 35,
    links: 37,
    sample: "colonial-rebellion-1857",
    prefix: "colonial-",
  };
  chapters.independence = {
    readerId: "independence-reader",
    cards: 29,
    links: 32,
    sample: "freedom-home-rule",
    prefix: "independence-",
  };
  chapters.republic = {
    readerId: "post-independence-reader",
    cards: 57,
    links: 61,
    sample: "republic-first-election",
    prefix: "republic-",
  };
  const chapter = chapters[process.env.VIDEOS_CHAPTER || "prehistory"];
  assert.ok(chapter, "Unknown VIDEOS_CHAPTER");
  const {
    readerId,
    cards: expectedCards,
    links: expectedLinks,
    sample: sampleEvent,
    prefix,
  } = chapter;
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
    let port;
    for (let tries = 0; !port; tries++) {
      if (launchError) throw launchError;
      if (tries > 100) throw Error("Chrome debugging endpoint did not start.");
      try {
        const candidate = fs.readFileSync(portFile, "utf8").split("\n")[0].trim();
        if (/^\d+$/.test(candidate)) port = candidate;
      } catch (error) {
        if (!["ENOENT", "EBUSY"].includes(error.code)) throw error;
      }
      if (port) break;
      await delay(100);
    }
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
          reject(Error(`CDP timeout: ${method} ${params.expression ?? ""}`));
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
      fs.writeFileSync(
        path.join(artifactDir, `${prefix}${name}.png`),
        Buffer.from(result.data, "base64"),
      );
    };

    await send("Runtime.enable");
    await send("Network.enable");
    let remoteRequests = [];
    socket.addEventListener("message", ({ data }) => {
      const message = JSON.parse(data);
      if (
        message.method === "Network.requestWillBeSent" &&
        /youtube|ytimg/.test(message.params.request.url)
      )
        remoteRequests.push(message.params.request.url);
    });
    await send("Network.setBlockedURLs", {
      urls: ["*youtube-nocookie.com/*", "*youtube.com/*", "*ytimg.com/*"],
    });
    await send("Emulation.setEmulatedMedia", {
      features: [{ name: "prefers-reduced-motion", value: "reduce" }],
    });
    for (const width of process.env.VIDEOS_PROVIDER_ONLY ? [] : [1440, 768, 390, 320]) {
      await send("Emulation.setDeviceMetricsOverride", {
        width,
        height: 900,
        deviceScaleFactor: 1,
        mobile: width < 600,
      });
      remoteRequests = [];
      await send("Page.navigate", { url: `${base}/read` });
      await waitFor(
        `document.querySelectorAll('#${readerId} .history-video-card').length === ${expectedCards}`,
      );
      // The reader is server-rendered; wait for React to attach delegated button handlers before
      // exercising controls on this large page.
      await delay(1200);
      assert.equal(await evaluate("document.querySelectorAll('iframe').length"), 0);
      assert.equal(remoteRequests.length, 0, "No video requests before viewer interaction");
      const cards = await evaluate(
        `Array.from(document.querySelectorAll('#${readerId} .history-video-card')).map((c,i)=>{c.dataset.videoCheckIndex=String(i);return c.dataset.videoId})`,
      );
      for (const [index, videoId] of cards.entries()) {
        const card = `#${readerId} [data-video-check-index="${index}"]`;
        assert.ok(
          await evaluate(
            `document.querySelector(${JSON.stringify(card)}).querySelector('a').href.startsWith('https://')`,
          ),
        );
        if (
          ["video-bhimbetka-nptel", "classical-video-rani", "republic-video-cricket-1983"].includes(
            videoId,
          )
        ) {
          assert.equal(
            await evaluate(
              `document.querySelector(${JSON.stringify(card)}).querySelector('button')`,
            ),
            null,
          );
          continue;
        }
        await evaluate(
          `document.querySelector(${JSON.stringify(card)}).scrollIntoView({block:'center'})`,
        );
        await click(`${card} button`);
        await waitFor(
          `document.querySelector(${JSON.stringify(card)}).querySelector('iframe') !== null`,
        );
        assert.equal(
          await evaluate("document.querySelectorAll('iframe').length"),
          1,
          "Only one player can remain loaded",
        );
        assert.ok(
          await evaluate(
            `(()=>{const f=document.querySelector(${JSON.stringify(card)}).querySelector('iframe');const r=f.getBoundingClientRect();return r.width>=200 && r.height>=200 && r.left>=0 && r.right<=innerWidth+1 && f.referrerPolicy==='strict-origin-when-cross-origin' && !f.src.includes('autoplay=1')})()`,
          ),
          `Player fits at ${width}`,
        );
      }
      await send("Page.navigate", { url: base });
      await waitFor("document.querySelector('.journey-start-button') !== null");
      // Dialog mount/unmount must stop its player, including Escape dismissal.
      await waitFor("document.querySelector('.visual-scene[data-scene-state=active]') !== null");
      await click(".journey-start-button");
      await waitFor(
        "document.querySelector('.historical-experience-layer').getAttribute('aria-hidden') === 'false'",
      );
      await navigate(sampleEvent);
      await click('.visual-scene[aria-hidden="false"] .gallery-jump');
      await waitFor(
        "document.querySelector('.exhibit-dialog[open] .history-video-toggle') !== null",
      );
      await click(".exhibit-dialog[open] .history-video-toggle");
      await waitFor("document.querySelector('.exhibit-dialog[open] iframe') !== null");
      assert.equal(await evaluate("document.querySelectorAll('iframe').length"), 1);
      await click(".exhibit-dialog[open] .history-video-toggle");
      assert.equal(await evaluate("document.querySelectorAll('iframe').length"), 0);
      await evaluate(
        "document.querySelector('.exhibit-dialog[open] .history-videos').scrollIntoView({block:'start'})",
      );
      assert.ok(
        await evaluate(
          "(()=>{const d=document.querySelector('.exhibit-dialog[open]');return d.scrollWidth<=d.clientWidth+1})()",
        ),
        `Evidence dialog fits at ${width}`,
      );
      await screenshot(`videos-dialog-${width}`);
      await click(".exhibit-dialog[open] .history-video-toggle");
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
      await waitFor("!document.querySelector('.exhibit-dialog[open]')");
      await waitFor("document.querySelectorAll('iframe').length === 0");
      assert.equal(await evaluate("document.querySelectorAll('iframe').length"), 0);
      console.log(
        `PASS video cards, click-to-load, source fallbacks, single player and dialog cleanup at ${width}px`,
      );
    }
    // Live provider smoke check; full playback remains subject to provider restrictions.
    await send("Network.setBlockedURLs", { urls: [] });
    await send("Emulation.setDeviceMetricsOverride", {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false,
    });
    await send("Page.navigate", { url: base });
    await waitFor("document.querySelector('.visual-scene[data-scene-state=active]') !== null");
    await click(".journey-start-button");
    await navigate(sampleEvent);
    await click('.visual-scene[aria-hidden="false"] .gallery-jump');
    await click(".exhibit-dialog[open] .history-video-toggle");
    await evaluate(
      "document.querySelector('.exhibit-dialog[open] iframe').scrollIntoView({block:'center'})",
    );
    await delay(6000);
    await screenshot("videos-live-provider");
    const centre = await evaluate(
      "(()=>{const r=document.querySelector('.exhibit-dialog[open] iframe').getBoundingClientRect();return {x:r.left+r.width/2,y:r.top+r.height/2}})()",
    );
    await send("Input.dispatchMouseEvent", {
      type: "mousePressed",
      button: "left",
      clickCount: 1,
      ...centre,
    });
    await send("Input.dispatchMouseEvent", {
      type: "mouseReleased",
      button: "left",
      clickCount: 1,
      ...centre,
    });
    await delay(8000);
    await screenshot("videos-live-playing");
    await click(".exhibit-dialog[open] .history-dialog-header button");
    await send("Emulation.setScriptExecutionDisabled", { value: true });
    await send("Page.navigate", { url: `${base}/read` });
    await waitFor(
      `document.querySelectorAll('#${readerId} .history-video-card').length === ${expectedCards}`,
    );
    assert.equal(
      await evaluate(`document.querySelectorAll('#${readerId} .history-video-links a').length`),
      expectedLinks,
    );
    assert.equal(await evaluate("document.querySelectorAll('iframe').length"), 0);
    assert.deepEqual(errors, []);
    console.log(
      process.env.VIDEOS_PROVIDER_ONLY
        ? "Provider smoke and no-JavaScript checks completed; inspect playback screenshot."
        : "PASS: no eager provider requests, publisher fallback links, no-JavaScript source links, no hydration/runtime exceptions. Inspect live playback screenshot.",
    );
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
      try {
        await fs.promises.rm(resolved, {
          recursive: true,
          force: true,
          maxRetries: 5,
          retryDelay: 200,
        });
      } catch (error) {
        if (error.code !== "EBUSY") throw error;
        console.warn(`Chrome still holds its temporary profile; cleanup deferred: ${resolved}`);
      }
    }
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
