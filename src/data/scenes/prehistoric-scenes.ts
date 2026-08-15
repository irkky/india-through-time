import type { SceneLayerDefinition, SceneLayerTimeline, SceneMediaAsset } from "@/types/scene";
import type { TimelinePalette, TimelineScenePresentation } from "@/types/timeline-presentation";

/**
 * Add one entry here for each researched prehistoric event that receives a
 * visualReference. Historical facts stay in the timeline data; this registry
 * owns only palette, layer, asset, duration, and transition configuration.
 */
const prehistoricPalette: TimelinePalette = {
  background: "#1d211b",
  backgroundEnd: "#070b09",
  accent: "#c7a56b",
  foreground: "#f1eadc",
  muted: "#aaa99a",
};

const indiaMapAsset = {
  referenceId: "lower-palaeolithic-india-map",
  type: "image",
  src: "/assets/images/prehistoric_india/lower_palaeolithic_india/indiamapblack.png",
} as const;

const oldSceneAsset = {
  referenceId: "lower-palaeolithic-oldscene",
  type: "image",
  src: "/assets/images/prehistoric_india/lower_palaeolithic_india/oldscene.png",
} as const;

const handaxeAsset = {
  referenceId: "attirampakkam-handaxe",
  type: "image",
  src: "/assets/images/prehistoric_india/lower_palaeolithic_india/handaxe_from_attirampakkam.png",
} as const;

const acheulianToolAsset = {
  referenceId: "acheulian-tool-assemblage",
  type: "image",
  src: "/assets/images/prehistoric_india/lower_palaeolithic_india/auchelian_tool.png",
} as const;

const beat = (
  id: string,
  kind: SceneLayerDefinition["kind"],
  renderer: string,
  label: string,
  timeline: SceneLayerTimeline,
  depth: number,
  asset?: SceneMediaAsset,
): SceneLayerDefinition => ({
  id,
  kind,
  renderer,
  depth,
  timeline,
  ...(asset ? { asset } : {}),
  configuration: { label },
});

const factPanelLayer = (
  part:
    | "frame"
    | "eyebrow"
    | "date"
    | "location"
    | "statement"
    | "fact"
    | "sites"
    | "supporting"
    | "evidence",
  start: number,
  stack: number,
  options: {
    readonly annotationId?: string;
    readonly end?: number;
    readonly fadeOut?: number;
    readonly translateYFrom?: number;
  } = {},
): SceneLayerDefinition => ({
  id: `${options.annotationId ?? "early-acheulian-record"}-${part}`,
  kind: part === "frame" ? "decorative" : "text",
  renderer: `prehistoric-fact-panel-${part}`,
  stack,
  depth: 0.06,
  timeline: {
    start,
    end: options.end ?? 0.77,
    fadeIn: part === "frame" ? 0.045 : 0.065,
    fadeOut: options.fadeOut ?? 0.08,
    translateYFrom: options.translateYFrom ?? 12,
  },
  configuration: { annotationId: options.annotationId ?? "early-acheulian-record" },
});

const distributionMarkerLayer = (
  siteId: string,
  start: number,
  stack: number,
): SceneLayerDefinition => ({
  id: `distribution-site-${siteId}`,
  kind: "map",
  renderer: "prehistoric-distribution-site",
  stack,
  depth: 0.05,
  timeline: {
    start,
    end: 0.91,
    fadeIn: 0.22,
    fadeOut: 0.1,
    translateYFrom: 8,
  },
  configuration: { siteId },
});

const lowerPalaeolithicPlaceholderLayers: readonly SceneLayerDefinition[] = [
  {
    id: "background",
    kind: "background",
    renderer: "gradient",
    depth: 0.02,
    configuration: {
      background: prehistoricPalette.background,
      backgroundEnd: prehistoricPalette.backgroundEnd,
      accent: prehistoricPalette.accent,
    },
  },
  {
    id: "oldscene-clear",
    kind: "image",
    renderer: "prehistoric-oldscene-clear",
    depth: 0.12,
    asset: oldSceneAsset,
    timeline: {
      start: 0,
      end: 0.25,
      fadeIn: 0,
      fadeOut: 0.24,
      scaleFrom: 1,
      scaleTo: 1.03,
    },
  },
  {
    id: "oldscene-blurred",
    kind: "image",
    renderer: "prehistoric-oldscene-blurred",
    depth: 0.12,
    asset: oldSceneAsset,
    timeline: {
      start: 0.2,
      end: 1,
      fadeIn: 0.08,
      fadeOut: 0,
      scaleFrom: 1.03,
      scaleTo: 1.08,
    },
  },
  factPanelLayer("frame", 0.1, 30, { translateYFrom: 0 }),
  factPanelLayer("eyebrow", 0.105, 31),
  factPanelLayer("date", 0.125, 32, { translateYFrom: 16 }),
  factPanelLayer("location", 0.15, 33),
  factPanelLayer("fact", 0.18, 34),
  factPanelLayer("supporting", 0.21, 35, { translateYFrom: 8 }),
  {
    id: "intro-content",
    kind: "text",
    renderer: "event-content",
    depth: 0.08,
    timeline: { start: 0.07, end: 0.22, fadeIn: 0.28, fadeOut: 0.24 },
  },
  beat(
    "subcontinent-map",
    "map",
    "prehistoric-map-image",
    "~1.5 MILLION YEARS AGO",
    { start: 0.22, end: 0.32, scaleFrom: 0.94, scaleTo: 1.03 },
    0.34,
    indiaMapAsset,
  ),
  beat(
    "south-india",
    "map",
    "prehistoric-south-map-image",
    "SOUTH INDIA",
    { start: 0.32, end: 0.42, scaleFrom: 0.98, scaleTo: 1.02 },
    0.42,
    indiaMapAsset,
  ),
  beat(
    "attirampakkam-marker",
    "map",
    "prehistoric-attirampakkam-map-image",
    "ATTIRAMPAKKAM",
    { start: 0.42, end: 0.52, scaleFrom: 0.98, scaleTo: 1.02 },
    0.5,
    indiaMapAsset,
  ),
  beat(
    "stone-tool",
    "decorative",
    "prehistoric-stone-tool",
    "EARLY STONE-TOOL TECHNOLOGY",
    { start: 0.52, end: 0.64, scaleFrom: 0.86, scaleTo: 1.03, translateYFrom: 34 },
    0.64,
    handaxeAsset,
  ),
  beat(
    "handaxe-cleaver",
    "decorative",
    "prehistoric-handaxe-cleaver",
    "ACHEULIAN TECHNOLOGY · HANDAXES / CLEAVERS",
    { start: 0.64, end: 0.77, scaleFrom: 0.88, scaleTo: 1.04, translateYFrom: 28 },
    0.68,
    acheulianToolAsset,
  ),
  {
    id: "wider-context",
    kind: "map",
    renderer: "prehistoric-distribution-map-image",
    stack: 10,
    depth: 0.42,
    asset: indiaMapAsset,
    timeline: {
      start: 0.75,
      end: 0.91,
      fadeIn: 0.18,
      fadeOut: 0.1,
      scaleFrom: 0.96,
      scaleTo: 1.015,
    },
    configuration: { label: "WIDER LOWER PALAEOLITHIC INDIA" },
  },
  distributionMarkerLayer("attirampakkam", 0.755, 11),
  distributionMarkerLayer("isampur", 0.775, 12),
  distributionMarkerLayer("hunsgi-baichbal", 0.79, 13),
  distributionMarkerLayer("bhimbetka", 0.805, 14),
  distributionMarkerLayer("chirki-nevasa", 0.82, 15),
  distributionMarkerLayer("didwana", 0.835, 16),
  distributionMarkerLayer("son-valley", 0.85, 17),
  factPanelLayer("frame", 0.77, 30, {
    annotationId: "widespread-acheulian-record",
    end: 0.91,
    fadeOut: 0.1,
    translateYFrom: 0,
  }),
  factPanelLayer("eyebrow", 0.778, 31, {
    annotationId: "widespread-acheulian-record",
    end: 0.91,
    fadeOut: 0.1,
  }),
  factPanelLayer("statement", 0.79, 32, {
    annotationId: "widespread-acheulian-record",
    end: 0.91,
    fadeOut: 0.1,
    translateYFrom: 16,
  }),
  factPanelLayer("fact", 0.808, 33, {
    annotationId: "widespread-acheulian-record",
    end: 0.91,
    fadeOut: 0.1,
  }),
  factPanelLayer("sites", 0.828, 34, {
    annotationId: "widespread-acheulian-record",
    end: 0.91,
    fadeOut: 0.1,
  }),
  factPanelLayer("evidence", 0.845, 35, {
    annotationId: "widespread-acheulian-record",
    end: 0.91,
    fadeOut: 0.1,
    translateYFrom: 8,
  }),
  beat(
    "middle-palaeolithic-transition",
    "decorative",
    "prehistoric-period-transition",
    "TOWARD THE MIDDLE PALAEOLITHIC",
    { start: 0.9, end: 1, fadeOut: 0, scaleFrom: 0.96, scaleTo: 1 },
    0.72,
  ),
];

export const prehistoricScenes: Readonly<Record<string, TimelineScenePresentation>> = {
  "lower-palaeolithic-placeholder-sequence": {
    palette: prehistoricPalette,
    scene: {
      id: "scene-lower-palaeolithic-scaffold",
      timelinePointId: "lower-palaeolithic-scaffold",
      duration: 1,
      transitionIn: { type: "crossfade", ease: "power2.inOut" },
      layers: lowerPalaeolithicPlaceholderLayers,
    },
  },
};
