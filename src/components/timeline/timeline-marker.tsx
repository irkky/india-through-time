import type { NearbyTimelineItem } from "@/types/timeline";
import type { TimelineDisplayEvent } from "@/types/timeline-presentation";

interface TimelineMarkerProps {
  readonly entry: NearbyTimelineItem<TimelineDisplayEvent>;
  readonly onNavigate: (index: number) => void;
}

export function TimelineMarker({ entry, onNavigate }: TimelineMarkerProps) {
  const { item: event, relation } = entry;
  const relationLabel =
    relation === "current" ? "Current" : relation === "previous" ? "Previous" : "Next";

  return (
    <li className="nearby-event-item" data-relation={relation}>
      <button
        type="button"
        className="nearby-event-button"
        onClick={() => onNavigate(entry.index)}
        data-timeline-index={entry.index}
        data-navigation-kind="event"
        aria-current={relation === "current" ? "step" : undefined}
        aria-label={`${relationLabel} event: ${event.title}, ${event.dateLabel}`}
      >
        <span className="nearby-event-relation">{relationLabel}</span>
        <span className="nearby-event-title">{event.title}</span>
        <span className="nearby-event-date">{event.dateLabel}</span>
      </button>
    </li>
  );
}
