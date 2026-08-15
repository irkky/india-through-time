import type { HistoricalDate } from "./historical-date";

export interface HistoricalSource {
  readonly id: string;
  readonly title: string;
  readonly url?: string;
  readonly author?: string;
  readonly publisher?: string;
  readonly publicationYear?: number;
}

export interface HistoricalCitation {
  readonly sourceId: string;
  readonly locator?: string;
  readonly note?: string;
}

export interface HistoricalLocation {
  readonly name: string;
  readonly region?: string;
  readonly latitude?: number;
  readonly longitude?: number;
}

export interface ArchaeologicalSite {
  readonly id: string;
  readonly name: string;
  readonly location?: HistoricalLocation;
}

export type HistoricalMediaKind = "image" | "video" | "audio" | "illustration" | "map";

export interface HistoricalMediaReference {
  readonly id: string;
  readonly kind: HistoricalMediaKind;
  readonly alt: string;
  readonly caption?: string;
  readonly creator?: string;
  readonly credit?: string;
  readonly license?: string;
  readonly attribution?: string;
  readonly sourceUrl?: string;
  readonly historicalContext?: string;
  readonly usageLocations?: readonly string[];
}

export type VisualReferenceKind =
  "abstract-scene" | "cinematic-scene" | "image" | "illustration" | "svg";

export interface VisualReference {
  readonly id: string;
  readonly kind: VisualReferenceKind;
  readonly alt?: string;
}

export interface MapReference {
  readonly id: string;
  readonly layerIds?: readonly string[];
}

export interface HistoricalInterpretationNote {
  readonly kind: "uncertainty" | "scholarly-interpretation";
  readonly text: string;
  readonly sourceIds?: readonly string[];
}

interface HistoricalFactAnnotationBase {
  readonly id: string;
  readonly eyebrow: string;
  readonly text: string;
}

export interface HistoricalChronologyFactAnnotation extends HistoricalFactAnnotationBase {
  readonly kind: "chronology";
  readonly primaryStatistic: string;
  readonly statisticQualifier: string;
  readonly location: readonly string[];
  readonly supportingLine?: string;
}

export interface HistoricalDistributionFactAnnotation extends HistoricalFactAnnotationBase {
  readonly kind: "distribution";
  readonly statement: readonly string[];
  readonly siteLine: string;
  readonly evidenceLabel: string;
}

export type HistoricalFactAnnotation =
  HistoricalChronologyFactAnnotation | HistoricalDistributionFactAnnotation;

export interface HistoricalEvent {
  readonly id: string;
  readonly title: string;
  readonly dateStart: HistoricalDate;
  readonly dateEnd?: HistoricalDate;
  readonly approximateDate: boolean;
  readonly contentStatus?: "placeholder" | "researched";
  readonly description: string;
  readonly significance?: string;
  readonly categories: readonly string[];
  readonly regions?: readonly string[];
  readonly locations?: readonly HistoricalLocation[];
  readonly archaeologicalSites?: readonly ArchaeologicalSite[];
  readonly people: readonly string[];
  readonly hominins?: readonly string[];
  readonly relatedEvents: readonly string[];
  readonly media?: readonly HistoricalMediaReference[];
  readonly visualReference?: VisualReference;
  readonly mapReferences?: readonly MapReference[];
  readonly sources: readonly HistoricalSource[];
  readonly citations?: readonly HistoricalCitation[];
  readonly interpretationNotes?: readonly HistoricalInterpretationNote[];
  readonly factAnnotations?: readonly HistoricalFactAnnotation[];
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
  readonly subtitle?: string;
  readonly order: number;
  readonly periods: readonly HistoricalPeriod[];
}
