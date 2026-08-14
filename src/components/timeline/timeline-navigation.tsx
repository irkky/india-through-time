import type { NearbyTimelineItem, TimelineNavigationEra } from "@/types/timeline";
import type { TimelineDisplayEvent } from "@/types/timeline-presentation";
import { Timeline } from "./timeline";
import { TimelineMarker } from "./timeline-marker";

interface TimelineNavigationProps {
  readonly activeEvent: TimelineDisplayEvent;
  readonly nearbyEvents: readonly NearbyTimelineItem<TimelineDisplayEvent>[];
  readonly navigation: readonly TimelineNavigationEra[];
  readonly initialDateLabel: string;
  readonly dateRef: React.RefObject<HTMLSpanElement | null>;
  readonly progressRef: React.RefObject<HTMLDivElement | null>;
  readonly onNavigate: (index: number) => void;
}

export function TimelineNavigation({
  activeEvent,
  nearbyEvents,
  navigation,
  initialDateLabel,
  dateRef,
  progressRef,
  onNavigate,
}: TimelineNavigationProps) {
  return (
    <nav className="historical-navigation" aria-label="Historical timeline navigation">
      <div className="historical-navigation-inner">
        <div className="historical-navigation-status">
          <div className="navigation-date-block">
            <span className="navigation-label">Current date</span>
            <span ref={dateRef} className="navigation-date">
              {initialDateLabel}
            </span>
          </div>
          <dl className="navigation-hierarchy" aria-live="polite" aria-atomic="true">
            <div>
              <dt>Era</dt>
              <dd>{activeEvent.eraTitle}</dd>
            </div>
            <div>
              <dt>Period</dt>
              <dd>{activeEvent.periodTitle}</dd>
            </div>
            <div>
              <dt>Event</dt>
              <dd>{activeEvent.title}</dd>
            </div>
          </dl>
        </div>

        <ol className="nearby-events" aria-label="Nearby historical events">
          {nearbyEvents.map((entry) => (
            <TimelineMarker key={entry.item.id} entry={entry} onNavigate={onNavigate} />
          ))}
        </ol>

        <Timeline
          navigation={navigation}
          activeEraId={activeEvent.node.era.id}
          activePeriodId={activeEvent.node.period.id}
          progressRef={progressRef}
          onNavigate={onNavigate}
        />
      </div>
    </nav>
  );
}
