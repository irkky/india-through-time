import gsap from "gsap";
import { resolveOpeningSceneFrame } from "./transitions";
import type {
  OpeningCinematicController,
  OpeningSceneBinding,
  OpeningSceneDefinition,
} from "@/types/opening";

interface CreateOpeningCinematicOptions {
  readonly root: HTMLElement;
  readonly atmosphere: HTMLElement;
  readonly cue: HTMLElement;
  readonly progress: HTMLElement;
  readonly definitions: readonly OpeningSceneDefinition[];
  readonly bindings: readonly OpeningSceneBinding[];
  readonly reducedMotion: boolean;
}

export function createOpeningCinematic({
  root,
  atmosphere,
  cue,
  progress,
  definitions,
  bindings,
  reducedMotion,
}: CreateOpeningCinematicOptions): OpeningCinematicController {
  if (definitions.length === 0 || definitions.length !== bindings.length) {
    throw new Error(
      "Opening definitions and DOM bindings must be non-empty and have equal lengths.",
    );
  }

  for (const definition of definitions) {
    const { start, end } = definition.progress;
    if (!Number.isFinite(start) || !Number.isFinite(end) || start < 0 || end > 1 || start >= end) {
      throw new RangeError(`Opening scene has an invalid progress range: ${definition.id}`);
    }
  }

  let activeIndex = 0;

  const update = (openingProgress: number) => {
    const boundedProgress = Math.min(Math.max(openingProgress, 0), 1);
    let strongestOpacity = -1;

    definitions.forEach((definition, index) => {
      const binding = bindings[index];
      if (!binding) return;

      const frame = resolveOpeningSceneFrame(definition, boundedProgress, reducedMotion);

      gsap.set(binding.root, {
        autoAlpha: frame.opacity,
        x: frame.translateX,
        y: frame.translateY,
        scale: frame.scale,
      });

      if (binding.visual) {
        gsap.set(binding.visual, {
          y: frame.visualTranslateY,
          scale: frame.visualScale,
          rotation: frame.visualRotation,
        });
      }

      if (frame.opacity > strongestOpacity) {
        strongestOpacity = frame.opacity;
        activeIndex = index;
      }
    });

    bindings.forEach((binding, index) => {
      binding.root.setAttribute("aria-hidden", index === activeIndex ? "false" : "true");
    });

    gsap.set(atmosphere, {
      opacity: 0.24 + boundedProgress * 0.76,
      scale: reducedMotion ? 1 : 1 + boundedProgress * 0.12,
    });
    const cueExitProgress = Math.min(boundedProgress / 0.045, 1);
    const cueOpacity = 1 - cueExitProgress * cueExitProgress * (3 - 2 * cueExitProgress);
    gsap.set(cue, {
      autoAlpha: cueOpacity,
      y: reducedMotion ? 0 : -10 * cueExitProgress,
    });
    gsap.set(progress, { scaleY: boundedProgress });
    progress.parentElement?.setAttribute(
      "aria-valuenow",
      String(Math.round(boundedProgress * 100)),
    );
    root.dataset.openingScene = definitions[activeIndex]?.id ?? "";
  };

  update(0);

  return {
    update,
    destroy: () => {
      delete root.dataset.openingScene;
    },
  };
}
