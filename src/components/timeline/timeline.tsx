import type { TimelineNavigationEra } from "@/types/timeline";

interface TimelineProps {
  readonly navigation: readonly TimelineNavigationEra[];
  readonly activeEraId: string;
  readonly activePeriodId: string;
  readonly progressRef: React.RefObject<HTMLDivElement | null>;
  readonly onNavigate: (index: number) => void;
}

export function Timeline({
  navigation,
  activeEraId,
  activePeriodId,
  progressRef,
  onNavigate,
}: TimelineProps) {
  const activeEra = navigation.find((era) => era.id === activeEraId);

  return (
    <div className="timeline-overview">
      <div
        className="timeline-overall-track"
        role="progressbar"
        aria-label="Overall historical timeline progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={0}
      >
        <div ref={progressRef} className="timeline-overall-progress" />
      </div>

      <div className="era-navigation" aria-label="Navigate by historical era">
        {navigation.map((era) => {
          const disabled = era.firstEventIndex === null;

          return (
            <button
              key={era.id}
              type="button"
              className="era-navigation-button"
              disabled={disabled}
              data-timeline-index={era.firstEventIndex ?? undefined}
              data-navigation-kind="era"
              aria-current={era.id === activeEraId ? "true" : undefined}
              title={disabled ? `${era.title} has no prototype events yet` : era.title}
              onClick={() => {
                if (era.firstEventIndex !== null) onNavigate(era.firstEventIndex);
              }}
            >
              {era.title}
            </button>
          );
        })}
      </div>

      {activeEra && activeEra.periods.length > 0 ? (
        <div className="period-navigation" aria-label={`Periods within ${activeEra.title}`}>
          {activeEra.periods.map((period) => (
            <button
              key={period.id}
              type="button"
              className="period-navigation-button"
              disabled={period.firstEventIndex === null}
              data-timeline-index={period.firstEventIndex ?? undefined}
              data-navigation-kind="period"
              aria-current={period.id === activePeriodId ? "true" : undefined}
              onClick={() => {
                if (period.firstEventIndex !== null) onNavigate(period.firstEventIndex);
              }}
            >
              {period.title}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
