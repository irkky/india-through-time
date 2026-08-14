export const getTimelineProgressForIndex = (index: number, itemCount: number) => {
  if (!Number.isInteger(index) || itemCount < 1) {
    throw new RangeError("Timeline navigation requires a valid index and at least one item.");
  }

  const boundedIndex = Math.min(Math.max(index, 0), itemCount - 1);
  return itemCount === 1 ? 0 : boundedIndex / (itemCount - 1);
};

export const getScrollPositionForProgress = (progress: number, start: number, end: number) => {
  const boundedProgress = Math.min(Math.max(progress, 0), 1);
  return start + (end - start) * boundedProgress;
};
