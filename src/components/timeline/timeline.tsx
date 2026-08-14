import type { TimelineNavigationEra } from "@/types/timeline";

interface TimelineProps {
  readonly navigation: readonly TimelineNavigationEra[];
  readonly activeEraId: string;
  readonly progressRef: React.RefObject<HTMLDivElement | null>;
  readonly onNavigate: (index: number) => void;
}

export function Timeline({ navigation, activeEraId, progressRef, onNavigate }: TimelineProps) {
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
    </div>
  );
}
