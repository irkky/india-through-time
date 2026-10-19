import type { CSSProperties } from "react";
import type { SceneDefinition } from "@/types/scene";
import type { TimelineDisplayEvent } from "@/types/timeline-presentation";
import { SceneLayer } from "./scene-layer";

interface SceneStageProps {
  readonly events: readonly TimelineDisplayEvent[];
  readonly definitions: readonly SceneDefinition[];
  readonly registerScene: (element: HTMLElement | null, index: number) => void;
  readonly registerLayer: (
    element: HTMLDivElement | null,
    sceneIndex: number,
    layerId: string,
  ) => void;
}

export function SceneStage({ events, definitions, registerScene, registerLayer }: SceneStageProps) {
  return (
    <div className="scene-stage" aria-label="Historical visual scenes">
      {definitions.map((scene, sceneIndex) => {
        const event = events[sceneIndex];
        if (!event) return null;

        return (
          <section
            key={scene.id}
            ref={(element) => registerScene(element, sceneIndex)}
            className="visual-scene"
            style={
              {
                "--event-background": event.palette.background,
                "--event-background-end": event.palette.backgroundEnd,
                "--event-accent": event.palette.accent,
                "--event-foreground": event.palette.foreground,
                "--event-muted": event.palette.muted,
              } as CSSProperties
            }
            data-scene-id={scene.id}
            data-timeline-point-id={scene.timelinePointId}
            aria-label={`${event.title} scene`}
            aria-hidden={sceneIndex === 0 ? undefined : true}
            inert={sceneIndex !== 0}
          >
            {scene.layers.map((layer) => (
              <div
                key={layer.id}
                ref={(element) => registerLayer(element, sceneIndex, layer.id)}
                className="scene-layer"
                data-layer-id={layer.id}
                data-layer-kind={layer.kind}
                style={layer.stack === undefined ? undefined : { zIndex: layer.stack }}
              >
                <SceneLayer definition={layer} event={event} />
              </div>
            ))}
          </section>
        );
      })}
    </div>
  );
}
