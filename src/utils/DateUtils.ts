/**
 * Converts a Date object to a string in the format YYYY-MM-DD.
 * @param date
 */
const toApiDate = (date: Date) => date.toISOString().slice(0, 10);

/**
 * Gets a date range from a specified number of months ago up to today.
 * @param diff
 * @param unit
 */
export const getDateRangeUpToTodayWithDiff = (
  diff: number,
  unit: 'day' | 'month' | 'year',
) => {
  const toDate = new Date();
  const fromDate = new Date(
    toDate.getFullYear() - (unit === 'year' ? diff : 0),
    toDate.getMonth() - (unit === 'month' ? diff : 0),
    toDate.getDate() - (unit === 'day' ? diff : 0),
  );
  return {
    from: toApiDate(fromDate),
    to: toApiDate(toDate),
  };
};
