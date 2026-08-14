import type { TimelineNavigationEra } from "@/types/timeline";
import type { TimelineDisplayEvent } from "@/types/timeline-presentation";
import { Timeline } from "./timeline";

interface TimelineNavigationProps {
  readonly activeEvent: TimelineDisplayEvent;
  readonly navigation: readonly TimelineNavigationEra[];
  readonly progressRef: React.RefObject<HTMLDivElement | null>;
  readonly onNavigate: (index: number) => void;
}

export function TimelineNavigation({
  activeEvent,
  navigation,
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
      </div>
    </nav>
  );
}
