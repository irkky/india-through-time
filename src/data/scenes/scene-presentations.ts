import { prehistoricScenes } from "./prehistoric-scenes";
import { prototypeScenes } from "./prototype-scenes";
import { prehistoryExhibitPresentations } from "./prehistory-exhibits";
import { ancientExhibitPresentations } from "./ancient-exhibits";
import { empireExhibitPresentations } from "./empire-exhibits";
import { classicalExhibitPresentations } from "./classical-exhibits";
import { earlyModernExhibitPresentations } from "./early-modern-exhibits";
import { colonialExhibitPresentations } from "./colonial-exhibits";
import { independenceExhibitPresentations } from "./independence-exhibits";
import type { TimelineScenePresentation } from "@/types/timeline-presentation";

export const scenePresentations: Readonly<Record<string, TimelineScenePresentation>> = {
  ...prototypeScenes,
  ...prehistoricScenes,
  ...prehistoryExhibitPresentations,
  ...ancientExhibitPresentations,
  ...empireExhibitPresentations,
  ...classicalExhibitPresentations,
  ...earlyModernExhibitPresentations,
  ...colonialExhibitPresentations,
  ...independenceExhibitPresentations,
};
