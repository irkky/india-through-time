import type { HistoricalDate } from "./historical-date";
import type { HistoricalEra, HistoricalEvent, HistoricalPeriod } from "./history";

export interface TimelineEventNode {
  readonly era: HistoricalEra;
  readonly period: HistoricalPeriod;
  readonly event: HistoricalEvent;
}

export interface TimelinePoint {
  readonly id: string;
  readonly date: HistoricalDate;
  readonly approximate: boolean;
  readonly dateLabel: string;
}

export interface ResolvedTimelinePosition<T> {
  readonly index: number;
  readonly item: T;
  readonly date: HistoricalDate;
  readonly dateLabel: string;
  readonly progress: number;
  readonly segmentProgress: number;
  readonly fromIndex: number;
  readonly toIndex: number;
}

export interface TimelineNavigationPeriod {
  readonly id: string;
  readonly title: string;
  readonly firstEventIndex: number | null;
}

export interface TimelineNavigationEra {
  readonly id: string;
  readonly title: string;
  readonly firstEventIndex: number | null;
  readonly periods: readonly TimelineNavigationPeriod[];
}
