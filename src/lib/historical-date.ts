import type {
  CalendarEra,
  CalendarHistoricalDate,
  HistoricalDate,
  YearsAgoHistoricalDate,
} from "@/types/historical-date";

const assertHistoricalYear = (year: number) => {
  if (!Number.isInteger(year) || year < 1) {
    throw new RangeError(`Historical years must be positive integers. Received: ${year}`);
  }
};

const assertYearsAgo = (years: number) => {
  if (!Number.isInteger(years) || years < 1) {
    throw new RangeError(`Years-ago dates must be positive integers. Received: ${years}`);
  }
};

export const historicalDate = (year: number, era: CalendarEra): CalendarHistoricalDate => {
  assertHistoricalYear(year);
  return { kind: "calendar", year, era };
};

export const bce = (year: number) => historicalDate(year, "BCE");

export const ce = (year: number) => historicalDate(year, "CE");

export const yearsAgo = (years: number): YearsAgoHistoricalDate => {
  assertYearsAgo(years);
  return { kind: "years-ago", years };
};

/**
 * Converts a historical date to a continuous sortable coordinate.
 * 2 BCE = -1, 1 BCE = 0, 1 CE = 1, 2 CE = 2.
 */
export const toTimelineOrdinal = (date: HistoricalDate) => {
  if (date.kind === "years-ago") {
    assertYearsAgo(date.years);
    return 1 - date.years;
  }

  assertHistoricalYear(date.year);
  return date.era === "BCE" ? 1 - date.year : date.year;
};

export const fromTimelineOrdinal = (ordinal: number): CalendarHistoricalDate => {
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

  const ordinal = fromOrdinal + (toOrdinal - fromOrdinal) * boundedProgress;
  const usesDeepTime = from.kind === "years-ago" || to.kind === "years-ago";

  return usesDeepTime && ordinal <= -9_999
    ? yearsAgo(Math.round(1 - ordinal))
    : fromTimelineOrdinal(ordinal);
};

interface FormatHistoricalDateOptions {
  readonly approximate?: boolean;
}

export const formatHistoricalDate = (
  date: HistoricalDate,
  { approximate = false }: FormatHistoricalDateOptions = {},
) => {
  const prefix = approximate ? "~" : "";

  if (date.kind === "calendar") {
    return `${prefix}${date.year.toLocaleString("en-IN")} ${date.era}`;
  }

  const value =
    date.years >= 1_000_000
      ? `${Number((date.years / 1_000_000).toFixed(2))} million`
      : date.years >= 1_000
        ? `${Number((date.years / 1_000).toFixed(1))} thousand`
        : date.years.toLocaleString("en-IN");

  return `${prefix}${value} years ago`;
};
