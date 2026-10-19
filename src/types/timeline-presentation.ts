import type { TimelineEventNode } from "./timeline";
import type { SceneDefinition } from "./scene";
import type { PrehistoryExhibit } from "./prehistory-exhibit";

export interface TimelinePalette {
  readonly background: string;
  readonly backgroundEnd: string;
  readonly accent: string;
  readonly foreground: string;
  readonly muted: string;
}

export interface TimelineDisplayEvent {
  readonly exhibit?: PrehistoryExhibit;
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly dateLabel: string;
  readonly eraTitle: string;
  readonly periodTitle: string;
  readonly palette: TimelinePalette;
  readonly scene: SceneDefinition;
  readonly node: TimelineEventNode;
}

export interface TimelineScenePresentation {
  readonly exhibit?: PrehistoryExhibit;
  readonly palette: TimelinePalette;
  readonly scene: SceneDefinition;
}
