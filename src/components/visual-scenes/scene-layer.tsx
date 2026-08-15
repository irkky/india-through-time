import { EventContent } from "@/components/historical-events/event-content";
import type { SceneLayerDefinition } from "@/types/scene";
import type { TimelineDisplayEvent } from "@/types/timeline-presentation";
import { PlaceholderArtwork } from "./placeholder-artwork";
import { PrehistoricFactPanel, type FactPanelPart } from "./prehistoric-fact-panel";
import { PrehistoricPlaceholder } from "./prehistoric-placeholder";

interface SceneLayerProps {
  readonly definition: SceneLayerDefinition;
  readonly event: TimelineDisplayEvent;
}

const configurationValue = (definition: SceneLayerDefinition, key: string, fallback: string) => {
  const value = definition.configuration?.[key];
  return typeof value === "string" ? value : fallback;
};

export function SceneLayer({ definition, event }: SceneLayerProps) {
  if (definition.kind === "background") {
    return (
      <div
        className="scene-gradient-layer"
        style={
          {
            "--scene-background": configurationValue(
              definition,
              "background",
              event.palette.background,
            ),
            "--scene-background-end": configurationValue(
              definition,
              "backgroundEnd",
              event.palette.backgroundEnd,
            ),
            "--scene-accent": configurationValue(definition, "accent", event.palette.accent),
          } as React.CSSProperties
        }
      />
    );
  }

  if (definition.renderer === "grid-texture") {
    return <div className="scene-texture" />;
  }

  if (definition.renderer.startsWith("prehistoric-fact-panel-")) {
    const annotationId = configurationValue(definition, "annotationId", "");
    const annotation = event.node.event.factAnnotations?.find(({ id }) => id === annotationId);
    const part = definition.renderer.replace("prehistoric-fact-panel-", "") as FactPanelPart;

    return annotation ? <PrehistoricFactPanel annotation={annotation} part={part} /> : null;
  }

  if (definition.renderer.startsWith("prehistoric-")) {
    return (
      <PrehistoricPlaceholder
        renderer={definition.renderer}
        label={configurationValue(definition, "label", "") || undefined}
        src={definition.asset?.src}
        siteId={configurationValue(definition, "siteId", "") || undefined}
      />
    );
  }

  if (definition.kind === "text") {
    return (
      <div className="scene-content-shell">
        <div className="relative min-h-56 w-full max-w-3xl sm:min-h-80">
          <EventContent event={event} />
        </div>
      </div>
    );
  }

  if (definition.kind === "image" && definition.asset?.src) {
    // Native rendering keeps the scene contract usable before an optimized asset policy is chosen.
    // eslint-disable-next-line @next/next/no-img-element
    return <img className="scene-media-layer" src={definition.asset.src} alt="" />;
  }

  if (definition.kind === "video" && definition.asset?.src) {
    return (
      <video
        className="scene-media-layer"
        src={definition.asset.src}
        poster={definition.asset.poster}
        muted
        playsInline
        preload="metadata"
      />
    );
  }

  if (definition.kind === "map") {
    return <div className="scene-map-layer" data-map-state={definition.mapState?.stateId} />;
  }

  return <PlaceholderArtwork renderer={definition.renderer} />;
}
