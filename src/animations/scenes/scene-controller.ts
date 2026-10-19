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

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

const smooth = (value: number) => {
  const bounded = clamp(value);
  return bounded * bounded * (3 - 2 * bounded);
};

const setLayerProgress = (
  binding: SceneElementBinding,
  definition: SceneDefinition,
  progress: number,
  reducedMotion: boolean,
) => {
  for (const layer of definition.layers) {
    const timeline = layer.timeline;
    const element = binding.layers.get(layer.id);

    if (!timeline || !element) continue;

    const duration = Math.max(timeline.end - timeline.start, 0.0001);
    const localProgress = clamp((progress - timeline.start) / duration);
    const isVisible = progress >= timeline.start && progress <= timeline.end;

    if (reducedMotion) {
      gsap.set(element, { autoAlpha: isVisible ? 1 : 0, y: 0, scale: 1 });
      continue;
    }

    const fadeIn = Math.max(timeline.fadeIn ?? 0.18, 0.0001);
    const fadeOut = Math.max(timeline.fadeOut ?? 0.18, 0.0001);
    const enterProgress = timeline.fadeIn === 0 ? 1 : smooth(localProgress / fadeIn);
    const exitProgress =
      timeline.fadeOut === 0 ? 0 : smooth((localProgress - (1 - fadeOut)) / fadeOut);
    const travelProgress = smooth(localProgress);
    const scaleFrom = timeline.scaleFrom ?? 1;
    const scaleTo = timeline.scaleTo ?? 1;

    gsap.set(element, {
      autoAlpha: isVisible ? enterProgress * (1 - exitProgress) : 0,
      y: (timeline.translateYFrom ?? 0) * (1 - travelProgress),
      scale: scaleFrom + (scaleTo - scaleFrom) * travelProgress,
    });
  }
};

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

    const transitionPortion = definition.transitionIn.portion;
    if (
      transitionPortion !== undefined &&
      (!Number.isFinite(transitionPortion) || transitionPortion <= 0 || transitionPortion > 1)
    ) {
      throw new RangeError(`Scene transition portion must be in (0, 1]: ${definition.id}`);
    }

    for (const layer of definition.layers) {
      const timeline = layer.timeline;
      if (
        timeline &&
        (!Number.isFinite(timeline.start) ||
          !Number.isFinite(timeline.end) ||
          timeline.start < 0 ||
          timeline.end > 1 ||
          timeline.start >= timeline.end)
      ) {
        throw new RangeError(
          `Scene layer has an invalid progress range: ${definition.id}/${layer.id}`,
        );
      }
    }
  }

  let activeIndex = 0;

  gsap.set(
    bindings.map(({ root }) => root),
    { autoAlpha: 0, x: 0, y: 0, scale: 1 },
  );
  gsap.set(bindings[0]?.root ?? [], { autoAlpha: 1 });
  const firstDefinition = definitions[0];
  const firstBinding = bindings[0];
  if (firstDefinition && firstBinding) {
    setLayerProgress(firstBinding, firstDefinition, 0, reducedMotion);
  }
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
        gsap.set(bindings[index]?.root.querySelectorAll(".story-copy") ?? [], { opacity: 1, y: 0 });
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
        binding.root.inert = bindingIndex !== index;
      }

      const activeDefinition = definitions[index];
      const activeBinding = bindings[index];
      if (activeDefinition && activeBinding) {
        const timelinePosition = fromIndex + segmentProgress;
        const sceneStart = index === 0 ? 0 : index - 0.5;
        const sceneEnd = index === definitions.length - 1 ? definitions.length - 1 : index + 0.5;
        const localProgress = Math.min(
          Math.max((timelinePosition - sceneStart) / Math.max(sceneEnd - sceneStart, 0.0001), 0),
          1,
        );

        setLayerProgress(activeBinding, activeDefinition, localProgress, reducedMotion);
        const step = reducedMotion ? 0 : localProgress < 0.36 ? 0 : localProgress < 0.7 ? 1 : 2;
        const exhibit = activeBinding.root.querySelector<HTMLElement>(".prehistory-exhibit");
        if (exhibit && exhibit.dataset.storyStep !== String(step)) {
          exhibit.dataset.storyStep = String(step);
          exhibit.dispatchEvent(new CustomEvent("story-step", { detail: step }));
        }

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
