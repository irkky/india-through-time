import type { TimelineScenePresentation } from "@/types/timeline-presentation";

/** New content can render before a bespoke cinematic is authored. */
export function createDefaultPresentation(eventId: string): TimelineScenePresentation {
  return {
    palette: {
      background: "#173c43",
      backgroundEnd: "#071c25",
      accent: "#e8a84d",
      foreground: "#fff7df",
      muted: "#b8d2cf",
    },
    scene: {
      id: `scene-${eventId}`,
      timelinePointId: eventId,
      duration: 1,
      transitionIn: { type: "fade" },
      layers: [
        { id: "background", kind: "background", renderer: "gradient" },
        { id: "content", kind: "text", renderer: "event-content" },
      ],
    },
  };
}
