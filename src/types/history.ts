import type { HistoricalDate } from "./historical-date";

export interface HistoricalSource {
  readonly title: string;
  readonly url?: string;
  readonly author?: string;
  readonly publisher?: string;
  readonly publicationYear?: number;
}

export interface HistoricalLocation {
  readonly name: string;
  readonly latitude?: number;
  readonly longitude?: number;
}

export type VisualReferenceKind = "abstract-scene" | "image" | "illustration" | "svg";

export interface VisualReference {
  readonly id: string;
  readonly kind: VisualReferenceKind;
  readonly alt?: string;
}

export interface MapReference {
  readonly id: string;
  readonly layerIds?: readonly string[];
}

export interface HistoricalEvent {
  readonly id: string;
  readonly title: string;
  readonly dateStart: HistoricalDate;
  readonly dateEnd?: HistoricalDate;
  readonly approximateDate: boolean;
  readonly description: string;
  readonly significance?: string;
  readonly categories: readonly string[];
  readonly location?: HistoricalLocation;
  readonly people: readonly string[];
  readonly relatedEvents: readonly string[];
  readonly visualReference?: VisualReference;
  readonly mapReference?: MapReference;
  readonly sources: readonly HistoricalSource[];
}

export interface HistoricalPeriod {
  readonly id: string;
  readonly title: string;
  readonly dateStart?: HistoricalDate;
  readonly dateEnd?: HistoricalDate;
  readonly events: readonly HistoricalEvent[];
}

export interface HistoricalEra {
  readonly id: string;
  readonly title: string;
  readonly order: number;
  readonly periods: readonly HistoricalPeriod[];
}
