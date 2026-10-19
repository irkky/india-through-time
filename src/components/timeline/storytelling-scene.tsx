import { SceneStage } from "@/components/visual-scenes/scene-stage";
import type { SceneDefinition } from "@/types/scene";
import type { TimelineDisplayEvent } from "@/types/timeline-presentation";

interface StorytellingSceneProps {
  readonly events: readonly TimelineDisplayEvent[];
  readonly definitions: readonly SceneDefinition[];
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
  initialDateLabel,
  dateRef,
  registerScene,
  registerLayer,
}: StorytellingSceneProps) {
  return (
    <div className="absolute inset-0">
      <SceneStage
        events={events}
        definitions={definitions}
        registerScene={registerScene}
        registerLayer={registerLayer}
      />

      <div className="pointer-events-none relative z-20 mx-auto flex h-full max-w-[1600px] flex-col px-6 py-6 pb-64 sm:px-10 sm:py-8 sm:pb-72 lg:px-16">
        <header className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase opacity-70">
              History of India
            </p>
            <p className="mt-2 text-xs opacity-55">Scroll to travel through time</p>
          </div>
          <div className="journey-year-counter" aria-label="Approximate position in the timeline">
            <span className="journey-year-label">Journey year</span>
            <span ref={dateRef} className="journey-year-value" data-journey-year="">
              {initialDateLabel}
            </span>
          </div>
        </header>
      </div>
    </div>
  );
}
