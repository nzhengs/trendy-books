/**
 * Converts a Date object to a string in the format YYYY-MM-DD.
 * @param date
 */
const toApiDate = (date: Date) => date.toISOString().slice(0, 10);

/**
 * Gets a date range from a specified number of months ago up to today.
 * @param diff
 * @param _unit
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getDateRangeUpToTodayWithDiff = (diff: number, _unit: 'month') => {
  const today = new Date();
  const fromDate = new Date(
    today.getFullYear(),
    today.getMonth() - diff,
    today.getDate(),
  );
  return { from: toApiDate(fromDate), to: toApiDate(today) };
};
