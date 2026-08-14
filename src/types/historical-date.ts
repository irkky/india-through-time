export type CalendarEra = "BCE" | "CE";

/**
 * A human historical year. `year` is always a positive integer; BCE/CE carries
 * the direction, so content never needs a fictional year zero.
 */
export interface HistoricalDate {
  readonly year: number;
  readonly era: CalendarEra;
}
