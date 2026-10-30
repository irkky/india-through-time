import type { TimelineScenePresentation } from "@/types/timeline-presentation";
import { earlyModernRecords } from "@/data/timeline/early-modern/records";
import { earlyModernGalleries } from "./early-modern-galleries";

export const earlyModernExhibitPresentations: Readonly<Record<string, TimelineScenePresentation>> =
  Object.fromEntries(
    earlyModernRecords.map((entry) => {
      const gallery = earlyModernGalleries[entry.id];
      const learning = ["Science", "Education", "Literature", "Philosophy"].includes(entry.theme);
      const maritime = ["Trade", "Travel", "Technology"].includes(entry.theme);
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
            ...(gallery
              ? { gallery, stageImages: gallery.length > 1 ? [0, 1, null] : [null, 0, null] }
              : {}),
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
