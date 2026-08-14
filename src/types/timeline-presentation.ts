import type { TimelineEventNode } from "./timeline";
import type { SceneDefinition } from "./scene";

export interface TimelinePalette {
  readonly background: string;
  readonly backgroundEnd: string;
  readonly accent: string;
  readonly foreground: string;
  readonly muted: string;
}

export interface TimelineDisplayEvent {
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
