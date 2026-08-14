import { prototypeScenes } from "@/data/scenes/prototype-scenes";
import { formatHistoricalDate } from "@/lib/historical-date";
import type { TimelineEventNode } from "@/types/timeline";
import type { TimelineDisplayEvent } from "@/types/timeline-presentation";

export const createPrototypeTimelineEvents = (
  nodes: readonly TimelineEventNode[],
): readonly TimelineDisplayEvent[] =>
  nodes.map((node) => {
    const visualId = node.event.visualReference?.id;
    const presentation = visualId ? prototypeScenes[visualId] : undefined;

    if (!presentation) {
      throw new Error(`Missing prototype scene for event: ${node.event.id}`);
    }

    if (presentation.scene.timelinePointId !== node.event.id) {
      throw new Error(`Scene ${presentation.scene.id} targets the wrong timeline event.`);
    }

    return {
      id: node.event.id,
      title: node.event.title,
      description: node.event.description,
      dateLabel: formatHistoricalDate(node.event.dateStart, {
        approximate: node.event.approximateDate,
      }),
      eraTitle: node.era.title,
      periodTitle: node.period.title,
      palette: presentation.palette,
      scene: presentation.scene,
      node,
    };
  });
