import { prehistoricScenes } from "./prehistoric-scenes";
import { prototypeScenes } from "./prototype-scenes";
import { prehistoryExhibitPresentations } from "./prehistory-exhibits";
import type { TimelineScenePresentation } from "@/types/timeline-presentation";

export const scenePresentations: Readonly<Record<string, TimelineScenePresentation>> = {
  ...prototypeScenes,
  ...prehistoricScenes,
  ...prehistoryExhibitPresentations,
};
