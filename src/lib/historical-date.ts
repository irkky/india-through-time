import type { CalendarEra, HistoricalDate } from "@/types/historical-date";

const assertHistoricalYear = (year: number) => {
  if (!Number.isInteger(year) || year < 1) {
    throw new RangeError(`Historical years must be positive integers. Received: ${year}`);
  }
};

export const historicalDate = (year: number, era: CalendarEra): HistoricalDate => {
  assertHistoricalYear(year);
  return { year, era };
};

export const bce = (year: number) => historicalDate(year, "BCE");

export const ce = (year: number) => historicalDate(year, "CE");

/**
 * Converts a historical date to a continuous sortable coordinate.
 * 2 BCE = -1, 1 BCE = 0, 1 CE = 1, 2 CE = 2.
 */
export const toTimelineOrdinal = (date: HistoricalDate) => {
  assertHistoricalYear(date.year);
  return date.era === "BCE" ? 1 - date.year : date.year;
};

export const fromTimelineOrdinal = (ordinal: number): HistoricalDate => {
  const roundedOrdinal = Math.round(ordinal);

  return roundedOrdinal <= 0 ? bce(1 - roundedOrdinal) : ce(roundedOrdinal);
};

export const compareHistoricalDates = (left: HistoricalDate, right: HistoricalDate) =>
  toTimelineOrdinal(left) - toTimelineOrdinal(right);

export const interpolateHistoricalDates = (
  from: HistoricalDate,
  to: HistoricalDate,
  progress: number,
) => {
  const boundedProgress = Math.min(Math.max(progress, 0), 1);
  const fromOrdinal = toTimelineOrdinal(from);
  const toOrdinal = toTimelineOrdinal(to);

  return fromTimelineOrdinal(fromOrdinal + (toOrdinal - fromOrdinal) * boundedProgress);
};

interface FormatHistoricalDateOptions {
  readonly approximate?: boolean;
}

export const formatHistoricalDate = (
  date: HistoricalDate,
  { approximate = false }: FormatHistoricalDateOptions = {},
) => `${approximate ? "~" : ""}${date.year.toLocaleString("en-IN")} ${date.era}`;
