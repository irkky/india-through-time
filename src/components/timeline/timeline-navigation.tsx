import type { TimelineNavigationEra } from "@/types/timeline";
import type { TimelineDisplayEvent } from "@/types/timeline-presentation";
import { Timeline } from "./timeline";
import { HistoryExplorer } from "./history-explorer";

interface TimelineNavigationProps {
  readonly activeEvent: TimelineDisplayEvent;
  readonly navigation: readonly TimelineNavigationEra[];
  readonly events: readonly TimelineDisplayEvent[];
  readonly progressRef: React.RefObject<HTMLDivElement | null>;
  readonly onNavigate: (index: number) => void;
}

export function TimelineNavigation({
  activeEvent,
  navigation,
  events,
  progressRef,
  onNavigate,
}: TimelineNavigationProps) {
  const index = events.findIndex(({ id }) => id === activeEvent.id);
  return (
    <nav className="historical-navigation" aria-label="Historical timeline navigation">
      <div className="historical-navigation-inner">
        <Timeline
          navigation={navigation}
          activeEraId={activeEvent.node.era.id}
          progressRef={progressRef}
          onNavigate={onNavigate}
        />
        <div className="journey-toolbar">
          <div className="journey-steps">
            <button
              type="button"
              className="journey-button"
              disabled={index <= 0}
              onClick={() => onNavigate(index - 1)}
              aria-label="Previous event"
            >
              ←
            </button>
            <span aria-label={`Event ${index + 1} of ${events.length}`}>
              {String(index + 1).padStart(2, "0")} / {events.length}
            </span>
            <button
              type="button"
              className="journey-button"
              disabled={index === events.length - 1}
              onClick={() => onNavigate(index + 1)}
              aria-label="Next event"
            >
              →
            </button>
          </div>
          <HistoryExplorer events={events} activeEvent={activeEvent} onNavigate={onNavigate} />
        </div>
        <div className="journey-selects">
          <label>
            <span className="mr-2">Period</span>
            <select
              className="journey-select"
              value={activeEvent.node.period.id}
              onChange={(event) => {
                const period = navigation
                  .flatMap((era) => era.periods)
                  .find(({ id }) => id === event.target.value);
                if (period?.firstEventIndex != null) onNavigate(period.firstEventIndex);
              }}
            >
              {navigation.map((era) => (
                <optgroup key={era.id} label={era.title}>
                  {era.periods.map((period) => (
                    <option
                      key={period.id}
                      value={period.id}
                      disabled={period.firstEventIndex === null}
                    >
                      {period.title}
                      {period.firstEventIndex === null ? " (coming later)" : ""}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </label>
          <label>
            <span className="mr-2">Event</span>
            <select
              className="journey-select"
              value={activeEvent.id}
              onChange={(event) =>
                onNavigate(events.findIndex(({ id }) => id === event.target.value))
              }
            >
              {events.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.title}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </nav>
  );
}
