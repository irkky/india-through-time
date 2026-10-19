import { createTimelineDisplayEvents } from "@/data/timeline/timeline-presentation";
import { buildTimelineNavigation, flattenTimeline, toTimelinePoints } from "@/lib/timeline";
import { validateHistory } from "./validate";
import { createTimelineStops } from "@/lib/timeline-position";
import type { HistoricalEra } from "@/types/history";
import type { TimelineScenePresentation } from "@/types/timeline-presentation";

/** One serializable model for UI, navigation, and animation, compiled before rendering. */
export function compileHistory(
  eras: readonly HistoricalEra[],
  presentations: Readonly<Record<string, TimelineScenePresentation>>,
) {
  const issues = validateHistory(eras);
  const errors = issues.filter((issue) => issue.severity === "error");
  if (errors.length)
    throw new Error(errors.map(({ path, message }) => `${path}: ${message}`).join("\n"));
  const nodes = flattenTimeline(eras);
  if (!nodes.length) throw new Error("History requires at least one event to render.");
  const events = createTimelineDisplayEvents(nodes, presentations);
  const sceneIds = new Set<string>();
  for (const { scene, node, exhibit } of events) {
    const fail = (message: string): never => {
      throw new Error(`${node.event.id}/${scene.id}: ${message}`);
    };
    if (sceneIds.has(scene.id)) fail("Duplicate scene identifier.");
    sceneIds.add(scene.id);
    if (!Number.isFinite(scene.duration) || scene.duration <= 0) fail("Duration must be positive.");
    const portion = scene.transitionIn.portion;
    if (portion !== undefined && (!Number.isFinite(portion) || portion <= 0 || portion > 1))
      fail("Invalid transition portion.");
    const layerIds = new Set<string>();
    if (scene.layers.some(({ renderer }) => renderer === "prehistory-exhibit")) {
      if (!exhibit || !exhibit.points.length)
        fail("An exhibit needs its diagram and evidence points.");
      for (const point of exhibit!.points) {
        if (
          ![point.x, point.y].every((value) => Number.isFinite(value) && value >= 0 && value <= 100)
        )
          fail("Exhibit point lies outside its diagram.");
        if (point.field === "interpretation" && !node.event.interpretationNotes?.length)
          fail("Exhibit needs an interpretation note.");
      }
    }
    for (const layer of scene.layers) {
      if (layerIds.has(layer.id)) fail(`Duplicate layer: ${layer.id}`);
      layerIds.add(layer.id);
      if (layer.asset && !node.event.media?.some(({ id }) => id === layer.asset?.referenceId))
        fail(`Unknown media: ${layer.asset.referenceId}`);
      if (
        layer.mapState &&
        !node.event.mapReferences?.some(({ id }) => id === layer.mapState?.referenceId)
      )
        fail(`Unknown map: ${layer.mapState.referenceId}`);
      const annotationId = layer.configuration?.annotationId;
      if (annotationId && !node.event.factAnnotations?.some(({ id }) => id === annotationId))
        fail(`Unknown fact annotation: ${annotationId}`);
      const timing = layer.timeline;
      if (timing) {
        if (
          !Number.isFinite(timing.start) ||
          !Number.isFinite(timing.end) ||
          timing.start < 0 ||
          timing.end > 1 ||
          timing.start >= timing.end
        )
          fail(`Invalid layer range: ${layer.id}`);
        for (const fade of [timing.fadeIn, timing.fadeOut]) {
          if (fade !== undefined && (!Number.isFinite(fade) || fade < 0 || fade > 1))
            fail(`Invalid fade fraction: ${layer.id}`);
        }
      }
    }
  }
  const stops = createTimelineStops(events.map(({ scene }) => scene.duration));
  return {
    events,
    points: toTimelinePoints(nodes).map((point, index) => ({ ...point, position: stops[index]! })),
    navigation: buildTimelineNavigation(eras, nodes),
    scenes: events.map(({ scene }) => scene),
    issues,
  };
}

export type CompiledHistory = ReturnType<typeof compileHistory>;
