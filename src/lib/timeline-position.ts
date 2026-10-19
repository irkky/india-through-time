import type { TimelinePoint } from "@/types/timeline";

export const createTimelineStops = (durations: readonly number[]) => {
  if (!durations.length || durations.some((value) => !Number.isFinite(value) || value <= 0))
    throw new RangeError("Scene durations must be positive.");
  const stops = [0];
  for (let index = 1; index < durations.length; index++)
    stops.push(stops[index - 1]! + (durations[index - 1]! + durations[index]!) / 2);
  const total = stops.at(-1)!;
  return stops.map((value) => (total ? value / total : 0));
};

export const getTimelineProgressForIndex = (
  index: number,
  items: number | readonly TimelinePoint[],
) => {
  const itemCount = typeof items === "number" ? items : items.length;
  if (!Number.isInteger(index) || itemCount < 1) {
    throw new RangeError("Timeline navigation requires a valid index and at least one item.");
  }

  const boundedIndex = Math.min(Math.max(index, 0), itemCount - 1);
  return typeof items !== "number" && items[boundedIndex]?.position !== undefined
    ? items[boundedIndex]!.position!
    : itemCount === 1
      ? 0
      : boundedIndex / (itemCount - 1);
};

export const getScrollPositionForProgress = (progress: number, start: number, end: number) => {
  const boundedProgress = Math.min(Math.max(progress, 0), 1);
  return start + (end - start) * boundedProgress;
};
