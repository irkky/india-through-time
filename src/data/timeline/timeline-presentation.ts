import { createDefaultPresentation } from "@/data/scenes/default-scene";
import { formatHistoricalDate } from "@/lib/historical-date";
import type { TimelineEventNode } from "@/types/timeline";
import type {
  TimelineDisplayEvent,
  TimelineScenePresentation,
} from "@/types/timeline-presentation";

export const createTimelineDisplayEvents = (
  nodes: readonly TimelineEventNode[],
  presentations: Readonly<Record<string, TimelineScenePresentation>>,
): readonly TimelineDisplayEvent[] =>
  nodes.map((node) => {
    const visualId = node.event.visualReference?.id;
    const presentation = visualId
      ? presentations[visualId]
      : createDefaultPresentation(node.event.id);

    if (!presentation) {
      throw new Error(`Missing scene presentation for event: ${node.event.id}`);
    }

    if (presentation.scene.timelinePointId !== node.event.id) {
      throw new Error(`Scene ${presentation.scene.id} targets the wrong timeline event.`);
    }

    return {
      id: node.event.id,
      title: node.event.title,
      description: node.event.description,
      dateLabel: [node.event.dateStart, node.event.dateEnd]
        .filter((date) => date !== undefined)
        .map((date) => formatHistoricalDate(date, { approximate: node.event.approximateDate }))
        .join(" – "),
      eraTitle: node.era.title,
      periodTitle: node.period.title,
      palette: presentation.palette,
      exhibit: presentation.exhibit,
      scene: presentation.scene,
      node,
    };
  });
