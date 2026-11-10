const { setTimeout: delay } = require("node:timers/promises");
const assert = require("node:assert/strict");
require("./register-typescript.cjs");
const { compileHistory } = require("../src/lib/content/compile.ts");
const { indianHistoryTimeline } = require("../src/data/timeline/indian-history.ts");
const { scenePresentations } = require("../src/data/scenes/scene-presentations.ts");
const {
  OPENING_SCROLL_DISTANCE_VH,
  TIMELINE_SCROLL_DISTANCE_VH,
} = require("../src/data/opening/opening-sequence.ts");

const model = compileHistory(indianHistoryTimeline, scenePresentations);
const totalScrollDistance =
  OPENING_SCROLL_DISTANCE_VH +
  Math.max(
    TIMELINE_SCROLL_DISTANCE_VH,
    model.scenes.reduce((sum, scene) => sum + scene.duration, 0) * 180,
  );
const openingHandoffProgress = OPENING_SCROLL_DISTANCE_VH / totalScrollDistance;

const pointProgress = (id) => {
  const point = model.points.find((candidate) => candidate.id === id);
  if (!point) throw new Error(`Unknown timeline event: ${id}`);
  return point.position;
};

module.exports = async function handoffRegression({
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
    features: [{ name: "prefers-reduced-motion", value: "no-preference" }],
  });
  await send("Emulation.setDeviceMetricsOverride", {
    width: 1363,
    height: 936,
    deviceScaleFactor: 1,
    mobile: false,
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

  const scrollToTransition = async (fromId, toId, segmentProgress, settleMs = 550) => {
    const from = pointProgress(fromId);
    const to = pointProgress(toId);
    const timelineProgress = from + (to - from) * segmentProgress;
    const scrollProgress = openingHandoffProgress + timelineProgress * (1 - openingHandoffProgress);
    await evaluate(`(()=>{
      const root=document.querySelector('section[aria-label="Journey through time"]');
      const start=root.getBoundingClientRect().top+scrollY;
      const end=start+root.offsetHeight-innerHeight;
      scrollTo({top:start+(end-start)*${scrollProgress}});
    })()`);
    await delay(settleMs);
  };

  const transitionState = async (fromId, toId, segmentProgress, settleMs) => {
    await scrollToTransition(fromId, toId, segmentProgress, settleMs);
    return evaluate(`(()=>{
      const visible=[...document.querySelectorAll('.visual-scene')]
        .filter(scene=>Number(getComputedStyle(scene).opacity)>0.001)
        .map(scene=>({
          id:scene.dataset.timelinePointId,
          rootOpacity:Number(getComputedStyle(scene).opacity),
          copyOpacities:[...scene.querySelectorAll('.story-copy')]
            .map(copy=>Number(getComputedStyle(copy).opacity)),
          ariaHidden:scene.getAttribute('aria-hidden'),
          inert:scene.inert
        }));
      return {
        requestedSegment:${segmentProgress},
        active:${active}?.dataset.timelinePointId,
        visible,
        hasReadableCopy:visible.some(scene=>scene.copyOpacities.some(opacity=>opacity>0.01))
      };
    })()`);
  };

  const before = {
    transitionForward: [],
    transitionReverse: [],
  };
  for (const progress of [0.4, 0.405, 0.41, 0.415, 0.42, 0.425, 0.43, 0.435, 0.44, 0.445])
    before.transitionForward.push(
      await transitionState("republic-tsunami", "republic-rti", progress),
    );
  for (const progress of [0.8, 0.7, 0.6, 0.55, 0.5, 0.45])
    before.transitionReverse.push(
      await transitionState("ashoka-dhamma", "barabar-ajivikas", progress),
    );

  await send("Emulation.setDeviceMetricsOverride", {
    width: 681,
    height: 468,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await delay(700);
  await navigate("lower-palaeolithic-scaffold");
  before.shortScreen = await evaluate(`(()=>{
    const insight=${active}.querySelector('.exhibit-insight');
    const exhibit=${active}.querySelector('.story-exhibit');
    const style=getComputedStyle(insight);
    return {
      active:${active}.dataset.timelinePointId,
      display:style.display,
      height:insight.getBoundingClientRect().height,
      textLength:insight.textContent.trim().length,
      exhibitClientHeight:exhibit.clientHeight,
      exhibitScrollHeight:exhibit.scrollHeight,
      exhibitOverflowY:getComputedStyle(exhibit).overflowY
    };
  })()`);

  await send("Emulation.setDeviceMetricsOverride", {
    width: 1363,
    height: 936,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await delay(700);
  await navigate("mesolithic-regional-overview");
  await evaluate(`${active}.querySelector('.exhibit-point:nth-child(2)').click()`);
  const resizeStart = await evaluate(
    `({id:${active}.dataset.timelinePointId,step:${active}.querySelector('.exhibit-point[aria-pressed="true"]').getAttribute('aria-label')})`,
  );
  await send("Emulation.setDeviceMetricsOverride", {
    width: 681,
    height: 468,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await delay(900);
  before.resize = {
    start: resizeStart,
    end: await evaluate(
      `({id:${active}.dataset.timelinePointId,step:${active}.querySelector('.exhibit-point[aria-pressed="true"]')?.getAttribute('aria-label')})`,
    ),
  };

  await send("Emulation.setDeviceMetricsOverride", {
    width: 1363,
    height: 936,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await delay(700);
  await navigate("republic-maratha-unesco");
  await evaluate(`(()=>{
    const select=document.querySelectorAll('.journey-select')[1];
    select.value='harappa-ravi-phase';
    select.dispatchEvent(new Event('change',{bubbles:true}));
    document.querySelector('.visual-scene[aria-hidden="false"] .gallery-jump').click();
  })()`);
  await waitFor(`${active}?.dataset.timelinePointId === 'harappa-ravi-phase'`);
  await delay(250);
  before.rapidGallery = await evaluate(`(()=>{
    const dialog=document.querySelector('.exhibit-dialog[open]');
    const scene=dialog?.closest('.visual-scene');
    return {
      open:Boolean(dialog),
      title:dialog?.querySelector('h2')?.textContent ?? null,
      sceneId:scene?.dataset.timelinePointId ?? null,
      sceneAriaHidden:scene?.getAttribute('aria-hidden') ?? null,
      sceneInert:scene?.inert ?? null
    };
  })()`);
  if (await evaluate("Boolean(document.querySelector('.exhibit-dialog[open]'))")) {
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
  }
  await screenshot("handoff-before");
  if (process.env.HANDOFF_CAPTURE) {
    console.log(JSON.stringify(before, null, 2));
    if (errors.length) console.log(JSON.stringify({ browserErrors: errors }, null, 2));
    return;
  }

  assert.ok(
    before.transitionForward.every((state) => state.hasReadableCopy),
    "B11 forward",
  );
  assert.ok(
    before.transitionReverse.every((state) => state.hasReadableCopy),
    "B11 reverse",
  );
  assert.notEqual(before.shortScreen.display, "none", "B01 explanation remains displayed");
  assert.ok(before.shortScreen.height > 0 && before.shortScreen.textLength > 50);
  assert.equal(before.shortScreen.exhibitOverflowY, "auto");
  assert.deepEqual(before.resize.end, before.resize.start, "B03 event and stage survive zoom");
  assert.equal(before.rapidGallery.open, false, "B02 stale dialog closes during navigation");

  const resizeAndCheck = async (width, height, mobile) => {
    await send("Emulation.setDeviceMetricsOverride", {
      width,
      height,
      deviceScaleFactor: 1,
      mobile,
    });
    await delay(750);
    assert.equal(await evaluate(`${active}.dataset.timelinePointId`), "harappa-ravi-phase");
    for (const stage of [1, 2, 3]) {
      await evaluate(`${active}.querySelector('.exhibit-point:nth-child(${stage})').click()`);
      const insight = await evaluate(`(()=>{
        const element=${active}.querySelector('.exhibit-insight');
        const paragraph=element.querySelector('p');
        element.scrollIntoView({block:'nearest'});
        return {
          display:getComputedStyle(element).display,
          height:element.getBoundingClientRect().height,
          text:paragraph.textContent.trim(),
          selected:${active}.querySelector('.exhibit-point[aria-pressed="true"]').getAttribute('aria-label'),
          overflow:getComputedStyle(${active}.querySelector('.story-exhibit')).overflowY
        };
      })()`);
      assert.notEqual(insight.display, "none", `${width}x${height}, stage ${stage}`);
      assert.ok(
        insight.height > 0 && insight.text.length > 40,
        `${width}x${height}, stage ${stage}`,
      );
      assert.match(insight.selected, new RegExp(`^${stage}\\.`));
      assert.equal(insight.overflow, "auto");
    }
    assert.equal(await evaluate("document.documentElement.scrollWidth > innerWidth"), false);
  };

  for (const [width, height, mobile] of [
    [768, 1024, false],
    [390, 844, true],
    [844, 390, true],
    [681, 468, false],
    [454, 312, false],
    [1363, 936, false],
  ])
    await resizeAndCheck(width, height, mobile);

  if (process.env.HANDOFF_EXHAUSTIVE) {
    const expectedIds = model.events.map((event) => event.id);
    const pairStart = Number(process.env.HANDOFF_PAIR_START ?? 0);
    for (const direction of process.env.HANDOFF_SKIP_PAIRS ? [] : [1, -1]) {
      const allIndexes =
        direction === 1
          ? Array.from({ length: expectedIds.length - 1 }, (_, index) => index)
          : Array.from(
              { length: expectedIds.length - 1 },
              (_, index) => expectedIds.length - 2 - index,
            );
      const indexes = allIndexes.slice(pairStart);
      const stops = direction === 1 ? [0.45, 0.5, 0.55] : [0.55, 0.5, 0.45];
      for (const [checkIndex, index] of indexes.entries()) {
        for (const progress of stops) {
          const state = await transitionState(
            expectedIds[index],
            expectedIds[index + 1],
            progress,
            280,
          );
          assert.ok(
            state.hasReadableCopy,
            `B11 ${direction === 1 ? "forward" : "reverse"} ${expectedIds[index]} -> ${expectedIds[index + 1]} at ${progress}`,
          );
          assert.equal(
            state.visible.filter((scene) => scene.ariaHidden === "false" && !scene.inert).length,
            1,
          );
        }
        if ((checkIndex + 1) % 50 === 0)
          console.log(
            `B11 ${direction === 1 ? "forward" : "reverse"}: ${checkIndex + 1}/${indexes.length} adjacent pairs`,
          );
      }
    }

    await navigate(expectedIds[0]);
    await delay(350);
    const firstEventY = await evaluate("scrollY");
    const journeyEndY = await evaluate(`(()=>{
      const root=document.querySelector('section[aria-label="Journey through time"]');
      return root.getBoundingClientRect().top+scrollY+root.offsetHeight-innerHeight;
    })()`);
    const wheelPass = async (direction) => {
      const order = [];
      const stages = new Set();
      let lastId = null;
      for (let attempt = 0; attempt < 5000; attempt++) {
        const state = await evaluate(`(()=>{
          const scene=${active};
          const pressed=scene?.querySelector('.exhibit-point[aria-pressed="true"]');
          return {y:scrollY,id:scene?.dataset.timelinePointId ?? null,stage:Number(pressed?.getAttribute('aria-label')?.slice(0,1) ?? 0)};
        })()`);
        if (state.id) {
          if (state.id !== lastId) order.push(state.id);
          lastId = state.id;
          if (state.stage) stages.add(`${state.id}:${state.stage}`);
        }
        if (
          (direction === 1 && state.y >= journeyEndY - 2) ||
          (direction === -1 && state.y <= firstEventY + 2)
        )
          break;
        await send("Input.dispatchMouseEvent", {
          type: "mouseWheel",
          x: 2,
          y: 2,
          deltaX: 0,
          deltaY: direction * 420,
        });
        await delay(50);
        if ((attempt + 1) % 500 === 0)
          console.log(
            `Native wheel ${direction === 1 ? "forward" : "reverse"}: ${attempt + 1} input steps; scrollY ${Math.round(state.y)}; target ${Math.round(direction === 1 ? journeyEndY : firstEventY)}`,
          );
        if (attempt === 4999) throw new Error("Wheel traversal did not reach its boundary.");
      }
      await delay(350);
      return { order, stages };
    };
    const requestedDirection = process.env.HANDOFF_WHEEL_DIRECTION;
    if (!requestedDirection || requestedDirection === "forward") {
      const forward = await wheelPass(1);
      assert.deepEqual(forward.order, expectedIds, "native-wheel forward event order");
      for (const id of expectedIds)
        for (const stage of [1, 2, 3])
          assert.ok(forward.stages.has(`${id}:${stage}`), `forward wheel missed ${id}:${stage}`);
      console.log("Native wheel forward: all 252 events and 756 stages passed.");
    }
    if (!requestedDirection || requestedDirection === "reverse") {
      if (requestedDirection === "reverse") {
        await evaluate(`scrollTo({top:${journeyEndY}})`);
        await delay(500);
      }
      const reverse = await wheelPass(-1);
      assert.deepEqual(
        reverse.order,
        [...expectedIds].reverse(),
        "native-wheel reverse event order",
      );
      for (const id of expectedIds)
        for (const stage of [1, 2, 3])
          assert.ok(reverse.stages.has(`${id}:${stage}`), `reverse wheel missed ${id}:${stage}`);
      console.log("Native wheel reverse: all 252 events and 756 stages passed.");
    }
  }

  await send("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-reduced-motion", value: "reduce" }],
  });
  await send("Page.reload");
  await waitFor("document.querySelector('.visual-scene[data-scene-state=active]') !== null");
  await click(".journey-start-button");
  await waitFor(
    `document.querySelector('.historical-experience-layer').getAttribute('aria-hidden') === 'false'`,
  );
  await navigate("sandhav-coastal-occupation");
  for (const stage of [1, 2, 3]) {
    await evaluate(`${active}.querySelector('.exhibit-point:nth-child(${stage})').click()`);
    assert.ok(await evaluate(`${active}.querySelector('.exhibit-insight').offsetHeight > 0`));
  }
  const opener = `${active}.querySelector('.gallery-jump')`;
  await evaluate(`${opener}.click()`);
  await waitFor("document.querySelector('.exhibit-dialog[open]') !== null");
  assert.equal(
    await evaluate("document.querySelector('.exhibit-dialog[open]').closest('[aria-hidden=true]')"),
    null,
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
  await waitFor("document.querySelector('.exhibit-dialog[open]') === null");
  await delay(50);
  assert.equal(await evaluate(`document.activeElement === ${opener}`), true);
  await evaluate(`${active}.querySelector('.exhibit-point:nth-child(3)').click()`);
  await waitFor(`${active}.querySelector('.inline-video-prompt button') !== null`);
  await evaluate(`${active}.querySelector('.inline-video-prompt button').click()`);
  await waitFor(`${active}.querySelector('.inline-exhibit-video iframe') !== null`);
  await navigate("dhaba-microliths");
  assert.equal(
    await evaluate("document.querySelectorAll('.inline-exhibit-video iframe').length"),
    0,
  );

  await send("Page.navigate", { url: `${base}/read` });
  await waitFor("document.querySelectorAll('.history-reader').length === 8");
  await waitFor("document.querySelectorAll('.history-reader details').length === 252");
  const readerCounts = await evaluate(
    `[...document.querySelectorAll('.history-reader')].map(reader=>({id:reader.id,count:reader.querySelectorAll('details').length}))`,
  );
  assert.equal(
    readerCounts.reduce((total, reader) => total + reader.count, 0),
    252,
    JSON.stringify(readerCounts),
  );
  assert.equal(
    await evaluate(
      `/DATA_PLACEHOLDER|RESEARCH_PLACEHOLDER|ADD_SITE_RECORD|Prototype complete/.test(document.body.innerText)`,
    ),
    false,
  );
  assert.equal(await evaluate("/1,948 CE|2,017 CE|2,025 CE/.test(document.body.innerText)"), false);
  assert.equal(await evaluate("document.querySelector('#read-before-history') !== null"), true);
  assert.deepEqual(errors, []);
  console.log(
    `PASS handoff acceptance: B01-B03/B11, responsive and zoom geometries, reduced motion, gallery/video cleanup, keyboard focus, reader route and clean console${process.env.HANDOFF_EXHAUSTIVE ? ", exhaustive transitions and native-wheel traversal" : ""}.`,
  );
};
