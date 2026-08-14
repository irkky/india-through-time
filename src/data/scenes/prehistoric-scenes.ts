import type { TimelineScenePresentation } from "@/types/timeline-presentation";

/**
 * Add one entry here for each researched prehistoric event that receives a
 * visualReference. Historical facts stay in the timeline data; this registry
 * owns only palette, layer, asset, duration, and transition configuration.
 */
export const prehistoricScenes: Readonly<Record<string, TimelineScenePresentation>> = {};
