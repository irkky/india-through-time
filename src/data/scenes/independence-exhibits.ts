import type { TimelineScenePresentation } from "@/types/timeline-presentation";
import { independenceRecords } from "@/data/timeline/independence/records";
import { independenceGalleries } from "./independence-galleries";

export const independenceExhibitPresentations: Readonly<Record<string, TimelineScenePresentation>> =
  Object.fromEntries(
    independenceRecords.map((entry) => {
      const gallery = independenceGalleries[entry.id];
      const learning = entry.theme === "Government";
      const maritime = [
        "freedom-ghadar",
        "freedom-rani-regiment",
        "freedom-naval-uprising",
        "freedom-congress-radio",
      ].includes(entry.id);
      return [
        `exhibit-${entry.id}`,
        {
          palette: {
            background: learning ? "#253e3a" : maritime ? "#213d50" : "#493020",
            backgroundEnd: learning ? "#101f20" : maritime ? "#101c2e" : "#201a22",
            accent: learning ? "#d2dda3" : maritime ? "#b5dedc" : "#edc68d",
            foreground: "#fff4e4",
            muted: "#cec3ba",
          },
          exhibit: {
            diagram: entry.diagram,
            title: entry.civilization,
            caption:
              "Conceptual teaching diagram, not a geographic map, measured plan, historical inscription or reconstruction. Open the evidence for sources and visual context.",
            layout:
              entry.diagram === "network" || entry.diagram === "town" || entry.diagram === "water"
                ? "settlement"
                : entry.diagram === "oral"
                  ? "comparison"
                  : "artefact",
            ...(gallery ? { gallery, stageImages: [null, 0, null] } : {}),
            points: [
              { label: "What happened", field: "description", x: 25, y: 40 },
              { label: "Why it matters", field: "significance", x: 65, y: 50 },
              { label: "Dating & limits", field: "interpretation", x: 75, y: 25 },
            ],
          },
          scene: {
            id: `scene-${entry.id}`,
            timelinePointId: entry.id,
            duration: gallery ? 2.2 : 1.6,
            transitionIn: { type: "crossfade", portion: 0.36, ease: "sine.inOut" },
            layers: [
              { id: "background", kind: "background", renderer: "gradient" },
              { id: "exhibit", kind: "text", renderer: "prehistory-exhibit" },
            ],
          },
        } satisfies TimelineScenePresentation,
      ];
    }),
  );
