import type { SceneDefinition } from "@/types/scene";
import type { TimelinePalette } from "@/types/timeline-presentation";

export interface PrototypeScenePresentation {
  readonly palette: TimelinePalette;
  readonly scene: SceneDefinition;
}

const createLayers = (
  artworkRenderer: string,
  palette: TimelinePalette,
): SceneDefinition["layers"] => [
  {
    id: "background",
    kind: "background",
    renderer: "gradient",
    depth: 0.05,
    configuration: {
      background: palette.background,
      backgroundEnd: palette.backgroundEnd,
      accent: palette.accent,
    },
  },
  {
    id: "texture",
    kind: "decorative",
    renderer: "grid-texture",
    depth: 0.18,
  },
  {
    id: "artwork",
    kind: "decorative",
    renderer: artworkRenderer,
    depth: 0.72,
  },
  {
    id: "content",
    kind: "text",
    renderer: "event-content",
    depth: 0.12,
  },
];

const indusPalette: TimelinePalette = {
  background: "#173c43",
  backgroundEnd: "#071c25",
  accent: "#e8a84d",
  foreground: "#fff7df",
  muted: "#b8d2cf",
};

const mahajanapadasPalette: TimelinePalette = {
  background: "#713524",
  backgroundEnd: "#251516",
  accent: "#f0b75f",
  foreground: "#fff3dc",
  muted: "#dec1a6",
};

const mauryaPalette: TimelinePalette = {
  background: "#253b2c",
  backgroundEnd: "#0b1c17",
  accent: "#d7a943",
  foreground: "#fff8df",
  muted: "#bed0bf",
};

export const prototypeScenes: Readonly<Record<string, PrototypeScenePresentation>> = {
  "indus-abstract-scene": {
    palette: indusPalette,
    scene: {
      id: "scene-indus",
      timelinePointId: "indus-valley-civilization",
      duration: 1,
      transitionIn: { type: "fade", ease: "power2.inOut" },
      layers: createLayers("indus-artwork", indusPalette),
    },
  },
  "mahajanapadas-abstract-scene": {
    palette: mahajanapadasPalette,
    scene: {
      id: "scene-mahajanapadas",
      timelinePointId: "mahajanapadas",
      duration: 1,
      transitionIn: {
        type: "slide",
        direction: "left",
        distance: 90,
        ease: "power2.inOut",
      },
      layers: createLayers("mahajanapadas-artwork", mahajanapadasPalette),
    },
  },
  "maurya-abstract-scene": {
    palette: mauryaPalette,
    scene: {
      id: "scene-maurya",
      timelinePointId: "mauryan-empire",
      duration: 1,
      transitionIn: { type: "scale", scale: 0.1, ease: "power2.inOut" },
      layers: createLayers("maurya-artwork", mauryaPalette),
    },
  },
};
