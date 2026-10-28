import type { TimelineScenePresentation } from "@/types/timeline-presentation";
import { empireGalleries } from "./empire-galleries";
export { empireGalleries, ringstoneImage } from "./empire-galleries";
import { empireEntries } from "@/data/timeline/empires/events";

const captions: Record<string, string> = {
  network:
    "Conceptual connections between centres; not a geographic map, border claim or measured route.",
  pillar:
    "A generic pillar and message panel; no invented ancient script or replica of a specific monument.",
  coin: "Teaching diagram of separate punches; symbols are illustrative, not an attributed ancient coin type.",
  cave: "Conceptual rock-cut chamber; not a measured plan or a reconstruction of a named cave.",
  stupa: "Conceptual early core and later envelope; not a measured phase reconstruction of Sanchi.",
  ringstone:
    "A ring-shaped teaching silhouette; use the museum photograph to examine the actual fragment.",
  oral: "Conceptual transmission of teachings; not a portrait, manuscript or recording from antiquity.",
  town: "Conceptual town and hinterland; not an excavated city plan.",
};

export const empireExhibitPresentations: Readonly<Record<string, TimelineScenePresentation>> =
  Object.fromEntries(
    empireEntries.map((entry) => {
      const gallery = empireGalleries[entry.id];
      const contemplative = entry.diagram === "oral" || entry.diagram === "stupa";
      return [
        `exhibit-${entry.id}`,
        {
          palette: {
            background: contemplative ? "#203731" : "#342b35",
            backgroundEnd: contemplative ? "#0d1c1b" : "#17131e",
            accent: contemplative ? "#d1d9a1" : "#edc68d",
            foreground: "#fff4e4",
            muted: "#cec3ba",
          },
          exhibit: {
            diagram: entry.diagram,
            title: entry.visualTitle,
            caption: captions[entry.diagram]!,
            layout:
              entry.diagram === "network" || entry.diagram === "town"
                ? "settlement"
                : entry.diagram === "oral"
                  ? "comparison"
                  : "artefact",
            ...(gallery
              ? { gallery, stageImages: gallery.length > 1 ? [0, 1, null] : [null, 0, null] }
              : {}),
            points: [
              { label: "Evidence", field: "description", x: 25, y: 40 },
              { label: "Context", field: "significance", x: 65, y: 50 },
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
