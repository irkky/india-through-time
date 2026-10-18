"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createOpeningCinematic } from "@/animations/opening/cinematic";
import { createSceneController } from "@/animations/scenes/scene-controller";
import { createTimelineAnimation, type TimelineAnimationController } from "@/animations/timeline";
import { OpeningCinematic } from "@/components/opening/OpeningCinematic";
import {
  OPENING_HANDOFF_PROGRESS,
  openingSequence,
  TOTAL_SCROLL_DISTANCE_VH,
} from "@/data/opening/opening-sequence";
import type { CompiledHistory } from "@/lib/content/compile";
import { StorytellingScene } from "./storytelling-scene";
import { TimelineNavigation } from "./timeline-navigation";
import type { OpeningSceneBinding } from "@/types/opening";
import type { SceneElementBinding } from "@/types/scene";

const requireFirstEvent = <T,>(events: readonly T[]): T => {
  const firstEvent = events[0];

  if (!firstEvent) {
    throw new Error("The timeline prototype requires at least one historical event.");
  }

  return firstEvent;
};

export function TimelineExperience({ model }: { readonly model: CompiledHistory }) {
  const {
    events: historicalEvents,
    points: timelinePoints,
    navigation: timelineNavigation,
    scenes: sceneDefinitions,
  } = model;
  const initialTimelineEvent = requireFirstEvent(historicalEvents);
  const rootRef = useRef<HTMLElement>(null);
  const historicalLayerRef = useRef<HTMLDivElement>(null);
  const openingRootRef = useRef<HTMLElement>(null);
  const openingAtmosphereRef = useRef<HTMLDivElement>(null);
  const openingCueRef = useRef<HTMLDivElement>(null);
  const openingProgressRef = useRef<HTMLSpanElement>(null);
  const openingSceneRefs = useRef<HTMLElement[]>([]);
  const openingVisualRefs = useRef<HTMLDivElement[]>([]);
  const storyDateRef = useRef<HTMLSpanElement>(null);
  const navigationProgressRef = useRef<HTMLDivElement>(null);
  const sceneRefs = useRef<HTMLElement[]>([]);
  const sceneLayerRefs = useRef<Array<Map<string, HTMLDivElement>>>([]);
  const animationControllerRef = useRef<TimelineAnimationController | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    const historicalLayer = historicalLayerRef.current;
    const openingRoot = openingRootRef.current;
    const openingAtmosphere = openingAtmosphereRef.current;
    const openingCue = openingCueRef.current;
    const openingProgress = openingProgressRef.current;
    const storyDate = storyDateRef.current;
    const navigationProgress = navigationProgressRef.current;

    if (
      !root ||
      !historicalLayer ||
      !openingRoot ||
      !openingAtmosphere ||
      !openingCue ||
      !openingProgress ||
      !storyDate ||
      !navigationProgress
    )
      return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const openingBindings: OpeningSceneBinding[] = openingSequence.map((_, index) => {
      const sceneRoot = openingSceneRefs.current[index];
      if (!sceneRoot) throw new Error(`Missing DOM binding for opening scene ${index}.`);

      return {
        root: sceneRoot,
        visual: openingVisualRefs.current[index],
      };
    });
    const openingController = createOpeningCinematic({
      root: openingRoot,
      atmosphere: openingAtmosphere,
      cue: openingCue,
      progress: openingProgress,
      definitions: openingSequence,
      bindings: openingBindings,
      reducedMotion,
    });

    const sceneBindings: SceneElementBinding[] = sceneDefinitions.map((_, index) => {
      const sceneRoot = sceneRefs.current[index];

      if (!sceneRoot) throw new Error(`Missing DOM binding for scene ${index}.`);

      return {
        root: sceneRoot,
        layers: sceneLayerRefs.current[index] ?? new Map(),
      };
    });
    const sceneController = createSceneController({
      definitions: sceneDefinitions,
      bindings: sceneBindings,
      reducedMotion,
    });

    const controller = createTimelineAnimation({
      root,
      dateReadouts: [storyDate],
      progress: navigationProgress,
      points: timelinePoints,
      sceneController,
      onEventChange: setActiveIndex,
      opening: {
        controller: openingController,
        root: openingRoot,
        timelineLayer: historicalLayer,
        handoffProgress: OPENING_HANDOFF_PROGRESS,
      },
    });

    animationControllerRef.current = controller;

    return () => {
      controller.destroy();
      sceneController.destroy();
      openingController.destroy();
      animationControllerRef.current = null;
    };
  }, [timelinePoints, sceneDefinitions]);

  const navigateToEvent = useCallback((index: number) => {
    animationControllerRef.current?.scrollToIndex(index);
  }, []);

  const activeEvent = historicalEvents[activeIndex] ?? initialTimelineEvent;

  return (
    <main>
      <section
        ref={rootRef}
        className="relative"
        style={{ height: `${TOTAL_SCROLL_DISTANCE_VH}vh` }}
        aria-label="Journey through time"
      >
        <div
          className="sticky top-0 h-dvh overflow-hidden bg-[var(--event-background)] text-[var(--event-foreground)]"
          style={
            {
              "--event-background": activeEvent.palette.background,
              "--event-foreground": activeEvent.palette.foreground,
              "--event-muted": activeEvent.palette.muted,
              "--event-accent": activeEvent.palette.accent,
            } as React.CSSProperties
          }
        >
          <div
            ref={historicalLayerRef}
            className="historical-experience-layer"
            style={{ opacity: 0, visibility: "hidden" }}
            aria-hidden="true"
          >
            <StorytellingScene
              events={historicalEvents}
              definitions={sceneDefinitions}
              initialDateLabel={initialTimelineEvent.dateLabel}
              dateRef={storyDateRef}
              registerScene={(element, index) => {
                if (element) sceneRefs.current[index] = element;
              }}
              registerLayer={(element, sceneIndex, layerId) => {
                if (!element) return;
                const layers =
                  sceneLayerRefs.current[sceneIndex] ?? new Map<string, HTMLDivElement>();
                layers.set(layerId, element);
                sceneLayerRefs.current[sceneIndex] = layers;
              }}
            />

            <TimelineNavigation
              activeEvent={activeEvent}
              navigation={timelineNavigation}
              events={historicalEvents}
              progressRef={navigationProgressRef}
              onNavigate={navigateToEvent}
            />
          </div>

          <OpeningCinematic
            rootRef={openingRootRef}
            atmosphereRef={openingAtmosphereRef}
            cueRef={openingCueRef}
            progressRef={openingProgressRef}
            registerScene={(element, index) => {
              if (element) openingSceneRefs.current[index] = element;
            }}
            registerVisual={(element, index) => {
              if (element) openingVisualRefs.current[index] = element;
            }}
          />
        </div>
      </section>

      <section className="flex min-h-[55vh] items-center justify-center bg-[#f2ecdf] px-6 py-24 text-[#20251f]">
        <div className="max-w-xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#8f3e28] uppercase">
            Prototype complete
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            The journey continues from here.
          </h2>
        </div>
      </section>
    </main>
  );
}
