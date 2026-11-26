import { useContext } from "react";
import { NavigateToEvent } from "./journey-events";
import { contemporaryEvents } from "@/lib/history-explorer";
import Image from "next/image";
import { SceneStage } from "@/components/visual-scenes/scene-stage";
import type { SceneDefinition } from "@/types/scene";
import type { TimelineDisplayEvent } from "@/types/timeline-presentation";

interface StorytellingSceneProps {
  readonly events: readonly TimelineDisplayEvent[];
  readonly definitions: readonly SceneDefinition[];
  readonly activeIndex: number;
  readonly initialDateLabel: string;
  readonly dateRef: React.RefObject<HTMLSpanElement | null>;
  readonly registerScene: (element: HTMLElement | null, index: number) => void;
  readonly registerLayer: (
    element: HTMLDivElement | null,
    sceneIndex: number,
    layerId: string,
  ) => void;
}

export function StorytellingScene({
  events,
  definitions,
  activeIndex,
  initialDateLabel,
  dateRef,
  registerScene,
  registerLayer,
}: StorytellingSceneProps) {
  const navigate = useContext(NavigateToEvent);
  const overlaps = contemporaryEvents(events, events[activeIndex]!);
  return (
    <div className="absolute inset-0">
      <SceneStage
        events={events}
        definitions={definitions}
        activeIndex={activeIndex}
        registerScene={registerScene}
        registerLayer={registerLayer}
      />

      <div className="pointer-events-none relative z-20 mx-auto flex h-full max-w-[1600px] flex-col px-6 py-6 pb-64 sm:px-10 sm:py-8 sm:pb-72 lg:px-16">
        <header className="flex items-start justify-between gap-2 sm:gap-6">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <Image
              src="/icon.svg"
              alt=""
              width={44}
              height={44}
              unoptimized
              className="size-8 shrink-0 sm:size-11"
            />
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase opacity-70">
                History of India
              </p>
              <p className="mt-2 text-xs opacity-55">Scroll to travel through time</p>
            </div>
          </div>
          <div className="journey-year-counter" aria-label="Approximate position in the timeline">
            <button
              className="journey-year-label date-help-button"
              type="button"
              popoverTarget="journey-dates"
            >
              Journey year ? How dates work
            </button>
            <aside id="journey-dates" popover="auto" className="date-help">
              <h2>How dates work</h2>
              <p>
                Events follow their starting dates. Regional traditions overlap, so neighboring
                events can belong to different chapters. Scroll distance represents reading time.
                The journey year estimates your position between records.
              </p>
              {overlaps.length > 0 && (
                <>
                  <h3>At the same time</h3>
                  <p>These date ranges overlap. Contact or influence requires separate evidence.</p>
                  {overlaps.slice(0, 3).map((item) => (
                    <a
                      key={item.id}
                      href={"#event=" + item.id}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("journey-dates")?.hidePopover();
                        navigate(events.indexOf(item));
                      }}
                    >
                      {item.title} ? {item.dateLabel}
                    </a>
                  ))}
                </>
              )}
              <button type="button" popoverTarget="journey-dates" popoverTargetAction="hide">
                Close
              </button>
            </aside>
            <span ref={dateRef} className="journey-year-value" data-journey-year="">
              {initialDateLabel}
            </span>
          </div>
        </header>
      </div>
    </div>
  );
}
