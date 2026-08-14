import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { resolveTimelinePoint } from "@/lib/timeline";
import { getScrollPositionForProgress, getTimelineProgressForIndex } from "@/lib/timeline-position";
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
}: TimelineAnimationOptions) {
  let activeIndex = 0;
  let activeScrollTrigger: ScrollTrigger | undefined;
  let navigationTween: gsap.core.Tween | undefined;

  const context = gsap.context(() => {
    const updateReadout = (scrollProgress: number) => {
      const resolved = resolveTimelinePoint(points, scrollProgress);

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

    const trigger = ScrollTrigger.create({
      trigger: root,
      start: "top top",
      end: "bottom bottom",
      onRefresh: (self) => updateReadout(self.progress),
      onUpdate: (self) => updateReadout(self.progress),
    });
    activeScrollTrigger = trigger;

    return () => {
      trigger.kill();
      activeScrollTrigger = undefined;
    };
  }, root);

  return {
    destroy: () => {
      navigationTween?.kill();
      context.revert();
    },
    scrollToIndex: (index: number) => {
      const trigger = activeScrollTrigger;
      const scrollProgress = getTimelineProgressForIndex(index, points.length);
      const rootStart = root.getBoundingClientRect().top + window.scrollY;
      const start = trigger?.start ?? rootStart;
      const end = trigger?.end ?? rootStart + root.offsetHeight - window.innerHeight;
      const targetY = getScrollPositionForProgress(scrollProgress, start, end);
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      navigationTween?.kill();

      if (reduceMotion) {
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
