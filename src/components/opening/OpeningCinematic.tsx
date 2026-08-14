import { openingSequence } from "@/data/opening/opening-sequence";
import { OpeningProgress } from "./OpeningProgress";
import { OpeningScene } from "./OpeningScene";

interface OpeningCinematicProps {
  readonly rootRef: React.RefObject<HTMLElement | null>;
  readonly atmosphereRef: React.RefObject<HTMLDivElement | null>;
  readonly cueRef: React.RefObject<HTMLDivElement | null>;
  readonly progressRef: React.RefObject<HTMLSpanElement | null>;
  readonly registerScene: (element: HTMLElement | null, index: number) => void;
  readonly registerVisual: (element: HTMLDivElement | null, index: number) => void;
}

export function OpeningCinematic({
  rootRef,
  atmosphereRef,
  cueRef,
  progressRef,
  registerScene,
  registerVisual,
}: OpeningCinematicProps) {
  return (
    <article ref={rootRef} className="opening-cinematic" aria-label="Opening cinematic">
      <div ref={atmosphereRef} className="opening-atmosphere" aria-hidden="true">
        <span className="opening-glow opening-glow--one" />
        <span className="opening-glow opening-glow--two" />
        <span className="opening-grain" />
        <span className="opening-vignette" />
      </div>

      <div className="opening-scenes">
        {openingSequence.map((scene, index) => (
          <OpeningScene
            key={scene.id}
            scene={scene}
            index={index}
            registerScene={registerScene}
            registerVisual={registerVisual}
          />
        ))}
      </div>

      <div ref={cueRef} className="opening-start-cue">
        <p>SCROLL DOWN TO BEGIN THE JOURNEY</p>
        <svg className="opening-start-chevron" viewBox="0 0 20 12" aria-hidden="true">
          <path d="m3 3 7 6 7-6" />
        </svg>
      </div>

      <OpeningProgress progressRef={progressRef} />
    </article>
  );
}
