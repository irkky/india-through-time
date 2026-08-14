"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createSceneController } from "@/animations/scenes/scene-controller";
import { createTimelineAnimation, type TimelineAnimationController } from "@/animations/timeline";
import { indianHistoryTimeline } from "@/data/timeline/indian-history";
import { createPrototypeTimelineEvents } from "@/data/timeline/prototype-presentation";
import {
  buildTimelineNavigation,
  flattenTimeline,
  getNearbyTimelineItems,
  toTimelinePoints,
} from "@/lib/timeline";
import { StorytellingScene } from "./storytelling-scene";
import { TimelineNavigation } from "./timeline-navigation";
import type { SceneElementBinding } from "@/types/scene";

const requireFirstEvent = <T,>(events: readonly T[]): T => {
  const firstEvent = events[0];

  if (!firstEvent) {
    throw new Error("The timeline prototype requires at least one historical event.");
  }

  return firstEvent;
};

const timelineNodes = flattenTimeline(indianHistoryTimeline);
const timelinePoints = toTimelinePoints(timelineNodes);
const historicalEvents = createPrototypeTimelineEvents(timelineNodes);
const timelineNavigation = buildTimelineNavigation(indianHistoryTimeline, timelineNodes);
const initialTimelineEvent = requireFirstEvent(historicalEvents);
const sceneDefinitions = historicalEvents.map((event) => event.scene);

export function TimelineExperience() {
  const rootRef = useRef<HTMLElement>(null);
  const storyDateRef = useRef<HTMLSpanElement>(null);
  const navigationDateRef = useRef<HTMLSpanElement>(null);
  const navigationProgressRef = useRef<HTMLDivElement>(null);
  const sceneRefs = useRef<HTMLElement[]>([]);
  const sceneLayerRefs = useRef<Array<Map<string, HTMLDivElement>>>([]);
  const animationControllerRef = useRef<TimelineAnimationController | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    const storyDate = storyDateRef.current;
    const navigationDate = navigationDateRef.current;
    const navigationProgress = navigationProgressRef.current;

    if (!root || !storyDate || !navigationDate || !navigationProgress) return;

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
      reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });

    const controller = createTimelineAnimation({
      root,
      dateReadouts: [storyDate, navigationDate],
      progress: navigationProgress,
      points: timelinePoints,
      sceneController,
      onEventChange: setActiveIndex,
    });

    animationControllerRef.current = controller;

    return () => {
      controller.destroy();
      sceneController.destroy();
      animationControllerRef.current = null;
    };
  }, []);

  const navigateToEvent = useCallback((index: number) => {
    animationControllerRef.current?.scrollToIndex(index);
  }, []);

  const activeEvent = historicalEvents[activeIndex] ?? initialTimelineEvent;
  const nearbyEvents = getNearbyTimelineItems(historicalEvents, activeIndex);

  return (
    <main>
      <section ref={rootRef} className="relative h-[400vh]" aria-label="Journey through time">
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
            nearbyEvents={nearbyEvents}
            navigation={timelineNavigation}
            initialDateLabel={initialTimelineEvent.dateLabel}
            dateRef={navigationDateRef}
            progressRef={navigationProgressRef}
            onNavigate={navigateToEvent}
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
