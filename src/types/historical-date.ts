export type CalendarEra = "BCE" | "CE";

/**
 * A human historical year. `year` is always a positive integer; BCE/CE carries
 * the direction, so content never needs a fictional year zero.
 */
export interface CalendarHistoricalDate {
  readonly kind: "calendar";
  readonly year: number;
  readonly era: CalendarEra;
}

/** A deep-time expression that should not be forced into a BCE/CE label. */
export interface YearsAgoHistoricalDate {
  readonly kind: "years-ago";
  readonly years: number;
}

export type HistoricalDate = CalendarHistoricalDate | YearsAgoHistoricalDate;
