import gsap from "gsap";
import type {
  SceneDefinition,
  SceneElementBinding,
  SceneTransitionDefinition,
} from "@/types/scene";

interface TransitionFrame {
  readonly outgoing: SceneElementBinding;
  readonly incoming: SceneElementBinding;
  readonly outgoingDefinition: SceneDefinition;
  readonly incomingDefinition: SceneDefinition;
  readonly progress: number;
}

const directionVector = (transition: SceneTransitionDefinition) => {
  const distance = transition.distance ?? 80;

  switch (transition.direction) {
    case "right":
      return { x: -distance, y: 0 };
    case "up":
      return { x: 0, y: distance };
    case "down":
      return { x: 0, y: -distance };
    default:
      return { x: distance, y: 0 };
  }
};

const setLayerParallax = (
  binding: SceneElementBinding,
  definition: SceneDefinition,
  travel: number,
) => {
  for (const layer of definition.layers) {
    const element = binding.layers.get(layer.id);

    if (!element) continue;

    gsap.set(element, { xPercent: travel * (layer.depth ?? 0) });
  }
};

const resetLayers = (binding: SceneElementBinding) => {
  gsap.set([...binding.layers.values()], { xPercent: 0, yPercent: 0 });
};

export const renderSceneTransition = ({
  outgoing,
  incoming,
  outgoingDefinition,
  incomingDefinition,
  progress,
}: TransitionFrame) => {
  const transition = incomingDefinition.transitionIn;
  const portion = Math.min(Math.max(transition.portion ?? 1, 0.0001), 1);
  const transitionStart = 0.5 - portion / 2;
  const transitionProgress = Math.min(Math.max((progress - transitionStart) / portion, 0), 1);
  const easedProgress = gsap.parseEase(transition.ease ?? "power2.inOut")(transitionProgress);

  resetLayers(outgoing);
  resetLayers(incoming);

  // Visuals overlap, but outgoing and incoming copy never compete for reading.
  gsap.set(outgoing.root.querySelectorAll(".story-copy"), {
    opacity: Math.max(0, 1 - transitionProgress / 0.45),
    y: -10 * transitionProgress,
  });
  gsap.set(incoming.root.querySelectorAll(".story-copy"), {
    opacity: Math.max(0, (transitionProgress - 0.55) / 0.45),
    y: 10 * (1 - transitionProgress),
  });

  switch (transition.type) {
    case "fade": {
      const outgoingOpacity = Math.max(0, 1 - easedProgress * 2);
      const incomingOpacity = Math.max(0, easedProgress * 2 - 1);
      gsap.set(outgoing.root, { autoAlpha: outgoingOpacity, xPercent: 0, yPercent: 0, scale: 1 });
      gsap.set(incoming.root, { autoAlpha: incomingOpacity, xPercent: 0, yPercent: 0, scale: 1 });
      break;
    }
    case "slide": {
      const vector = directionVector(transition);
      gsap.set(outgoing.root, {
        autoAlpha: 1 - easedProgress,
        x: -vector.x * easedProgress,
        y: -vector.y * easedProgress,
        scale: 1,
      });
      gsap.set(incoming.root, {
        autoAlpha: easedProgress,
        x: vector.x * (1 - easedProgress),
        y: vector.y * (1 - easedProgress),
        scale: 1,
      });
      break;
    }
    case "scale": {
      const scaleOffset = transition.scale ?? 0.08;
      gsap.set(outgoing.root, {
        autoAlpha: 1 - easedProgress,
        x: 0,
        y: 0,
        scale: 1 + scaleOffset * easedProgress,
      });
      gsap.set(incoming.root, {
        autoAlpha: easedProgress,
        x: 0,
        y: 0,
        scale: 1 - scaleOffset * (1 - easedProgress),
      });
      break;
    }
    case "parallax": {
      gsap.set(outgoing.root, { autoAlpha: 1 - easedProgress, x: 0, y: 0, scale: 1 });
      gsap.set(incoming.root, { autoAlpha: easedProgress, x: 0, y: 0, scale: 1 });
      setLayerParallax(outgoing, outgoingDefinition, -18 * easedProgress);
      setLayerParallax(incoming, incomingDefinition, 18 * (1 - easedProgress));
      break;
    }
    case "crossfade":
    default:
      gsap.set(outgoing.root, { autoAlpha: 1 - easedProgress, x: 0, y: 0, scale: 1 });
      gsap.set(incoming.root, { autoAlpha: easedProgress, x: 0, y: 0, scale: 1 });
  }
};
