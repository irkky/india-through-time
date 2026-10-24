"use client";

import { useEffect, useRef } from "react";
import type { TimelineNavigationEra } from "@/types/timeline";

interface TimelineProps {
  readonly navigation: readonly TimelineNavigationEra[];
  readonly activeEraId: string;
  readonly progressRef: React.RefObject<HTMLDivElement | null>;
  readonly onNavigate: (index: number) => void;
}

export function Timeline({ navigation, activeEraId, progressRef, onNavigate }: TimelineProps) {
  const eraNavigationRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const revealActiveEra = () => {
      const container = eraNavigationRef.current;
      const active = container?.querySelector<HTMLElement>('[aria-current="true"]');
      if (!container || !active) return;
      const bounds = container.getBoundingClientRect();
      const target = active.getBoundingClientRect();
      if (target.left < bounds.left || target.right > bounds.right) {
        // Change only this horizontal scroller; scrollIntoView would move the story itself.
        container.scrollLeft += target.left - bounds.left - (bounds.width - target.width) / 2;
      }
    };
    revealActiveEra();
    window.addEventListener("resize", revealActiveEra);
    return () => window.removeEventListener("resize", revealActiveEra);
  }, [activeEraId]);
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

      <div
        ref={eraNavigationRef}
        className="era-navigation"
        aria-label="Navigate by historical era"
      >
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
              title={disabled ? `${era.title} is planned for a later chapter` : era.title}
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
