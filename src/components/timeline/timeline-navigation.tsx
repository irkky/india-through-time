import type { TimelineNavigationEra } from "@/types/timeline";
import type { TimelineDisplayEvent } from "@/types/timeline-presentation";
import { Timeline } from "./timeline";

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
  return (
    <nav className="historical-navigation" aria-label="Historical timeline navigation">
      <div className="historical-navigation-inner">
        <Timeline
          navigation={navigation}
          activeEraId={activeEvent.node.era.id}
          progressRef={progressRef}
          onNavigate={onNavigate}
        />
        <div className="flex flex-wrap gap-3 px-4 pb-3 text-sm">
          <label>
            <span className="mr-2">Period</span>
            <select
              className="max-w-56 rounded border border-current bg-[var(--event-background)] p-1"
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
              className="max-w-56 rounded border border-current bg-[var(--event-background)] p-1"
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
