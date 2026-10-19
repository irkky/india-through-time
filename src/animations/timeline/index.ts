import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getOpeningHandoffFrame } from "@/animations/opening/transitions";
import { resolveTimelinePoint } from "@/lib/timeline";
import { getScrollPositionForProgress, getTimelineProgressForIndex } from "@/lib/timeline-position";
import type { OpeningCinematicController } from "@/types/opening";
import type { SceneController } from "@/types/scene";
import type { TimelinePoint } from "@/types/timeline";

gsap.registerPlugin(ScrollTrigger);

interface TimelineAnimationElements {
  readonly root: HTMLElement;
  readonly dateReadouts: readonly HTMLElement[];
  readonly progress: HTMLElement;
}

interface TimelineAnimationOptions extends TimelineAnimationElements {
  readonly points: readonly TimelinePoint[];
  readonly sceneController: SceneController;
  readonly onEventChange: (index: number) => void;
  readonly opening?: {
    readonly controller: OpeningCinematicController;
    readonly root: HTMLElement;
    readonly timelineLayer: HTMLElement;
    readonly handoffProgress: number;
  };
}

export interface TimelineAnimationController {
  readonly destroy: () => void;
  readonly scrollToIndex: (index: number) => void;
}

export function createTimelineAnimation({
  root,
  dateReadouts,
  progress,
  points,
  sceneController,
  onEventChange,
  opening,
}: TimelineAnimationOptions) {
  let activeIndex = 0;
  let activeScrollTrigger: ScrollTrigger | undefined;
  let navigationTween: gsap.core.Tween | undefined;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const context = gsap.context(() => {
    const updateReadout = (scrollProgress: number) => {
      const timelineProgress = opening
        ? Math.min(
            Math.max((scrollProgress - opening.handoffProgress) / (1 - opening.handoffProgress), 0),
            1,
          )
        : scrollProgress;
      const resolved = resolveTimelinePoint(points, timelineProgress);

      if (opening) {
        const openingProgress = Math.min(Math.max(scrollProgress / opening.handoffProgress, 0), 1);
        const handoffFrame = getOpeningHandoffFrame(openingProgress, reducedMotion);

        opening.controller.update(openingProgress);
        gsap.set(opening.root, { autoAlpha: handoffFrame.openingOpacity });
        gsap.set(opening.timelineLayer, { autoAlpha: handoffFrame.timelineOpacity });
        opening.root.setAttribute(
          "aria-hidden",
          handoffFrame.timelineOpacity >= 0.5 ? "true" : "false",
        );
        opening.timelineLayer.setAttribute(
          "aria-hidden",
          handoffFrame.timelineOpacity >= 0.5 ? "false" : "true",
        );
        opening.root.inert = handoffFrame.timelineOpacity >= 0.5;
        opening.timelineLayer.inert = handoffFrame.timelineOpacity < 0.5;
      }

      for (const readout of dateReadouts) {
        readout.textContent = resolved.dateLabel;
      }

      gsap.set(progress, { scaleX: resolved.progress });
      progress.parentElement?.setAttribute(
        "aria-valuenow",
        String(Math.round(resolved.progress * 100)),
      );
      sceneController.update(resolved);

      if (resolved.index !== activeIndex) {
        activeIndex = resolved.index;
        onEventChange(resolved.index);
      }
    };

    // Smooth rendered progress, not native scrolling. Reading panels remain independently scrollable.
    const playhead = { progress: 0 };
    const followScroll = gsap.quickTo(playhead, "progress", {
      duration: 0.22,
      ease: "power1.out",
      onUpdate: () => updateReadout(playhead.progress),
    });
    const trigger = ScrollTrigger.create({
      trigger: root,
      start: "top top",
      end: "bottom bottom",
      onRefresh: (self) => {
        followScroll.tween.pause();
        playhead.progress = self.progress;
        updateReadout(self.progress);
      },
      onUpdate: (self) => {
        if (reducedMotion) updateReadout(self.progress);
        else followScroll(self.progress);
      },
    });
    activeScrollTrigger = trigger;

    return () => {
      followScroll.tween.kill();
      trigger.kill();
      activeScrollTrigger = undefined;
    };
  }, root);

  const cancelNavigation = () => navigationTween?.kill();
  const cancelOnKey = (event: KeyboardEvent) => {
    if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key))
      cancelNavigation();
  };
  window.addEventListener("wheel", cancelNavigation, { passive: true });
  window.addEventListener("touchstart", cancelNavigation, { passive: true });
  window.addEventListener("keydown", cancelOnKey);

  return {
    destroy: () => {
      navigationTween?.kill();
      window.removeEventListener("wheel", cancelNavigation);
      window.removeEventListener("touchstart", cancelNavigation);
      window.removeEventListener("keydown", cancelOnKey);
      context.revert();
    },
    scrollToIndex: (index: number) => {
      const trigger = activeScrollTrigger;
      const timelineProgress = getTimelineProgressForIndex(index, points);
      const scrollProgress = opening
        ? opening.handoffProgress + timelineProgress * (1 - opening.handoffProgress)
        : timelineProgress;
      const rootStart = root.getBoundingClientRect().top + window.scrollY;
      const start = trigger?.start ?? rootStart;
      const end = trigger?.end ?? rootStart + root.offsetHeight - window.innerHeight;
      // Browser scroll offsets are rounded to pixels; land beyond the opening boundary.
      const targetY = Math.min(
        end,
        Math.ceil(getScrollPositionForProgress(scrollProgress, start, end)),
      );
      navigationTween?.kill();

      if (reducedMotion) {
        window.scrollTo({ top: targetY });
        return;
      }

      const scrollState = { y: window.scrollY };

      navigationTween = gsap.to(scrollState, {
        y: targetY,
        duration: 0.9,
        ease: "power3.inOut",
        overwrite: "auto",
        onUpdate: () => window.scrollTo({ top: scrollState.y }),
      });
    },
  } satisfies TimelineAnimationController;
}
