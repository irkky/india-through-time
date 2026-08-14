import gsap from "gsap";
import { renderSceneTransition } from "./transition-strategies";
import type {
  SceneController,
  SceneControllerHooks,
  SceneDefinition,
  SceneElementBinding,
} from "@/types/scene";

interface CreateSceneControllerOptions {
  readonly definitions: readonly SceneDefinition[];
  readonly bindings: readonly SceneElementBinding[];
  readonly hooks?: SceneControllerHooks;
  readonly reducedMotion?: boolean;
}

export function createSceneController({
  definitions,
  bindings,
  hooks = {},
  reducedMotion = false,
}: CreateSceneControllerOptions): SceneController {
  if (definitions.length === 0 || definitions.length !== bindings.length) {
    throw new Error("Scene definitions and DOM bindings must be non-empty and have equal lengths.");
  }

  for (const definition of definitions) {
    if (!Number.isFinite(definition.duration) || definition.duration <= 0) {
      throw new RangeError(`Scene duration must be positive: ${definition.id}`);
    }
  }

  let activeIndex = 0;

  gsap.set(
    bindings.map(({ root }) => root),
    { autoAlpha: 0, x: 0, y: 0, scale: 1 },
  );
  gsap.set(bindings[0]?.root ?? [], { autoAlpha: 1 });
  bindings[0]?.root.setAttribute("aria-hidden", "false");
  bindings[0]?.root.setAttribute("data-scene-state", "active");
  hooks.onEnter?.({ definition: definitions[0]!, index: 0 });

  return {
    update: (position) => {
      const { fromIndex, toIndex, segmentProgress, index, progress } = position;
      const outgoing = bindings[fromIndex];
      const incoming = bindings[toIndex];
      const outgoingDefinition = definitions[fromIndex];
      const incomingDefinition = definitions[toIndex];

      if (!outgoing || !incoming || !outgoingDefinition || !incomingDefinition) return;

      if (reducedMotion || fromIndex === toIndex) {
        gsap.set(
          bindings.map(({ root }) => root),
          { autoAlpha: 0, x: 0, y: 0, scale: 1 },
        );
        gsap.set(bindings[index]?.root ?? [], { autoAlpha: 1 });
      } else {
        gsap.set(
          bindings
            .filter((_, bindingIndex) => bindingIndex !== fromIndex && bindingIndex !== toIndex)
            .map(({ root }) => root),
          { autoAlpha: 0 },
        );
        renderSceneTransition({
          outgoing,
          incoming,
          outgoingDefinition,
          incomingDefinition,
          progress: segmentProgress,
        });
      }

      for (const [bindingIndex, binding] of bindings.entries()) {
        const state = reducedMotion
          ? bindingIndex === index
            ? "active"
            : "inactive"
          : bindingIndex === fromIndex && bindingIndex === toIndex
            ? "active"
            : bindingIndex === fromIndex
              ? "leaving"
              : bindingIndex === toIndex
                ? "entering"
                : "inactive";
        binding.root.setAttribute("data-scene-state", state);
      }

      if (index !== activeIndex) {
        const previousDefinition = definitions[activeIndex];
        const nextDefinition = definitions[index];

        if (previousDefinition)
          hooks.onLeave?.({ definition: previousDefinition, index: activeIndex });
        if (nextDefinition) hooks.onEnter?.({ definition: nextDefinition, index });
        activeIndex = index;
      }

      for (const [bindingIndex, binding] of bindings.entries()) {
        binding.root.setAttribute("aria-hidden", bindingIndex === index ? "false" : "true");
      }

      const activeDefinition = definitions[index];
      if (activeDefinition) {
        const timelinePosition = progress * Math.max(definitions.length - 1, 1);
        const sceneStart = index === 0 ? 0 : index - 0.5;
        const sceneEnd = index === definitions.length - 1 ? definitions.length - 1 : index + 0.5;
        const localProgress = Math.min(
          Math.max((timelinePosition - sceneStart) / Math.max(sceneEnd - sceneStart, 0.0001), 0),
          1,
        );

        hooks.onProgress?.({
          definition: activeDefinition,
          index,
          localProgress,
          timelineProgress: progress,
        });
      }
    },
    destroy: () => {
      const definition = definitions[activeIndex];
      if (definition) hooks.onLeave?.({ definition, index: activeIndex });
    },
  };
}
