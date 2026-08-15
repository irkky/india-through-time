export type OpeningVisualType =
  | "atmosphere"
  | "india-tricolour"
  | "deep-time-map-image"
  | "south-india-image"
  | "time-depth"
  | "subcontinent-placeholder"
  | "artifact-image"
  | "chapter-placeholder";

export type OpeningTextStyle = "title" | "statement" | "date" | "emphasis" | "chapter";

export type OpeningTransitionType = "dissolve" | "zoom-dissolve" | "drift" | "focus" | "emerge";

export interface OpeningProgressRange {
  readonly start: number;
  readonly end: number;
}

export interface OpeningAnimationSettings {
  readonly enterPortion: number;
  readonly exitPortion: number;
  readonly translateY: number;
  readonly scaleFrom: number;
  readonly visualTranslateY: number;
  readonly visualScaleFrom: number;
  readonly visualScaleTo: number;
  readonly visualRotateFrom?: number;
  readonly holdAtEnd?: boolean;
}

export interface OpeningSceneDefinition {
  readonly id: string;
  readonly eyebrow?: string;
  readonly text: string;
  readonly subtitle?: string;
  readonly instruction?: string;
  readonly progress: OpeningProgressRange;
  readonly visual: OpeningVisualType;
  readonly textStyle: OpeningTextStyle;
  readonly transition: OpeningTransitionType;
  readonly animation: OpeningAnimationSettings;
}

export interface OpeningSceneBinding {
  readonly root: HTMLElement;
  readonly visual?: HTMLElement;
}

export interface OpeningCinematicController {
  readonly update: (progress: number) => void;
  readonly destroy: () => void;
}
