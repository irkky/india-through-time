import type { OpeningSceneDefinition } from "@/types/opening";

export interface OpeningSceneFrame {
  readonly opacity: number;
  readonly translateX: number;
  readonly translateY: number;
  readonly scale: number;
  readonly visualTranslateY: number;
  readonly visualScale: number;
  readonly visualRotation: number;
}

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

const smooth = (value: number) => {
  const bounded = clamp(value);
  return bounded * bounded * (3 - 2 * bounded);
};

export const getOpeningHandoffFrame = (openingProgress: number, reducedMotion: boolean) => {
  if (reducedMotion) {
    return {
      openingOpacity: openingProgress >= 1 ? 0 : 1,
      timelineOpacity: openingProgress >= 1 ? 1 : 0,
    };
  }

  return {
    openingOpacity: 1 - smooth((openingProgress - 0.92) / 0.055),
    timelineOpacity: smooth((openingProgress - 0.965) / 0.035),
  };
};

export const resolveOpeningSceneFrame = (
  scene: OpeningSceneDefinition,
  openingProgress: number,
  reducedMotion: boolean,
): OpeningSceneFrame => {
  const duration = Math.max(scene.progress.end - scene.progress.start, 0.0001);
  const localProgress = clamp((openingProgress - scene.progress.start) / duration);
  const enterProgress = smooth(localProgress / Math.max(scene.animation.enterPortion, 0.0001));
  const exitStart = 1 - scene.animation.exitPortion;
  const exitProgress = scene.animation.holdAtEnd
    ? 0
    : smooth((localProgress - exitStart) / Math.max(scene.animation.exitPortion, 0.0001));
  const inRange = openingProgress >= scene.progress.start && openingProgress <= scene.progress.end;
  const opacity = reducedMotion ? (inRange ? 1 : 0) : enterProgress * (1 - exitProgress);
  const travelProgress = smooth(localProgress);
  const movesLaterally = scene.transition === "drift";
  const dissolvesInPlace = scene.transition === "dissolve";

  return {
    opacity,
    translateX:
      reducedMotion || !movesLaterally ? 0 : -20 * (1 - enterProgress) + 12 * exitProgress,
    translateY:
      reducedMotion || dissolvesInPlace
        ? 0
        : scene.animation.translateY * (1 - enterProgress) - 10 * exitProgress,
    scale:
      reducedMotion || dissolvesInPlace
        ? 1
        : scene.animation.scaleFrom + (1 - scene.animation.scaleFrom) * enterProgress,
    visualTranslateY:
      reducedMotion || dissolvesInPlace
        ? 0
        : scene.animation.visualTranslateY * (1 - travelProgress),
    visualScale:
      reducedMotion || dissolvesInPlace
        ? 1
        : scene.animation.visualScaleFrom +
          (scene.animation.visualScaleTo - scene.animation.visualScaleFrom) * travelProgress,
    visualRotation:
      reducedMotion || dissolvesInPlace
        ? 0
        : (scene.animation.visualRotateFrom ?? 0) * (1 - travelProgress),
  };
};
