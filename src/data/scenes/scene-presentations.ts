import { prehistoricScenes } from "./prehistoric-scenes";
import { prototypeScenes } from "./prototype-scenes";
import type { TimelineScenePresentation } from "@/types/timeline-presentation";

export const scenePresentations: Readonly<Record<string, TimelineScenePresentation>> = {
  ...prototypeScenes,
  ...prehistoricScenes,
};
