import { OpeningText } from "./OpeningText";
import { OpeningVisual } from "./OpeningVisual";
import type { OpeningSceneDefinition } from "@/types/opening";

interface OpeningSceneProps {
  readonly scene: OpeningSceneDefinition;
  readonly index: number;
  readonly registerScene: (element: HTMLElement | null, index: number) => void;
  readonly registerVisual: (element: HTMLDivElement | null, index: number) => void;
}

export function OpeningScene({ scene, index, registerScene, registerVisual }: OpeningSceneProps) {
  return (
    <section
      ref={(element) => registerScene(element, index)}
      className="opening-scene"
      data-opening-scene-id={scene.id}
      data-opening-transition={scene.transition}
      aria-hidden={index === 0 ? undefined : true}
    >
      <div ref={(element) => registerVisual(element, index)} className="opening-visual-shell">
        <OpeningVisual type={scene.visual} />
      </div>
      <OpeningText scene={scene} isFirst={index === 0} />
    </section>
  );
}
