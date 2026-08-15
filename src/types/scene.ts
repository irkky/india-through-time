import type { ResolvedTimelinePosition, TimelinePoint } from "./timeline";

export type SceneTransitionType = "fade" | "crossfade" | "slide" | "scale" | "parallax";
export type SceneLayerKind = "background" | "image" | "video" | "text" | "map" | "decorative";

export interface SceneTransitionDefinition {
  readonly type: SceneTransitionType;
  readonly ease?: string;
  /** Fraction of the interval used around its midpoint. Defaults to the full interval. */
  readonly portion?: number;
  readonly direction?: "left" | "right" | "up" | "down";
  readonly distance?: number;
  readonly scale?: number;
}

export interface SceneMediaAsset {
  /** Matches a HistoricalEvent media reference when the asset is event-owned. */
  readonly referenceId: string;
  readonly type: "image" | "video" | "image-sequence";
  readonly src?: string;
  readonly poster?: string;
  readonly frameCount?: number;
  readonly scrubPlayback?: boolean;
}

export interface SceneMapState {
  readonly referenceId: string;
  readonly stateId?: string;
}

export interface SceneLayerTimeline {
  /** Normalized progress within the owning scene. */
  readonly start: number;
  readonly end: number;
  /** Fractions of this layer's range used for its entrance and exit. */
  readonly fadeIn?: number;
  readonly fadeOut?: number;
  readonly scaleFrom?: number;
  readonly scaleTo?: number;
  readonly translateYFrom?: number;
}

export interface SceneLayerDefinition {
  readonly id: string;
  readonly kind: SceneLayerKind;
  readonly renderer: string;
  readonly stack?: number;
  readonly depth?: number;
  readonly asset?: SceneMediaAsset;
  readonly mapState?: SceneMapState;
  readonly timeline?: SceneLayerTimeline;
  readonly configuration?: Readonly<Record<string, string | number | boolean>>;
}

export interface SceneDefinition {
  readonly id: string;
  readonly timelinePointId: string;
  readonly duration: number;
  readonly transitionIn: SceneTransitionDefinition;
  readonly layers: readonly SceneLayerDefinition[];
}

export interface SceneElementBinding {
  readonly root: HTMLElement;
  readonly layers: ReadonlyMap<string, HTMLElement>;
}

export interface SceneLifecycleContext {
  readonly definition: SceneDefinition;
  readonly index: number;
}

export interface SceneProgressContext extends SceneLifecycleContext {
  readonly localProgress: number;
  readonly timelineProgress: number;
}

export interface SceneControllerHooks {
  readonly onEnter?: (context: SceneLifecycleContext) => void;
  readonly onLeave?: (context: SceneLifecycleContext) => void;
  readonly onProgress?: (context: SceneProgressContext) => void;
}

export interface SceneController {
  readonly update: (position: ResolvedTimelinePosition<TimelinePoint>) => void;
  readonly destroy: () => void;
}
