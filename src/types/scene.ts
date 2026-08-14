import type { ResolvedTimelinePosition, TimelinePoint } from "./timeline";

export type SceneTransitionType = "fade" | "crossfade" | "slide" | "scale" | "parallax";
export type SceneLayerKind = "background" | "image" | "video" | "text" | "map" | "decorative";

export interface SceneTransitionDefinition {
  readonly type: SceneTransitionType;
  readonly ease?: string;
  readonly direction?: "left" | "right" | "up" | "down";
  readonly distance?: number;
  readonly scale?: number;
}

export interface SceneMediaAsset {
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

export interface SceneLayerDefinition {
  readonly id: string;
  readonly kind: SceneLayerKind;
  readonly renderer: string;
  readonly depth?: number;
  readonly asset?: SceneMediaAsset;
  readonly mapState?: SceneMapState;
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
