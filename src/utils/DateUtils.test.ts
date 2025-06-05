import { getDateRangeUpToTodayWithDiff } from '@/utils/DateUtils.ts';

describe('getDateRangeUpToTodayWithDiff', () => {
  const today = '2025-06-05';
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(today + 'T15:31:10.000Z'));
  });

  afterEach(() => vi.useRealTimers());

  const testData = [
    {
      diff: 7,
      unit: 'day',
      fromDate: '2025-05-29',
    },
    {
      diff: 1,
      unit: 'month',
      fromDate: '2025-05-05',
    },
    {
      diff: 3,
      unit: 'month',
      fromDate: '2025-03-05',
    },
    {
      diff: 1,
      unit: 'year',
      fromDate: '2024-06-05',
    },
  ] as const;

  test.each(testData)(
    `should return from=$fromDate for to='${today}' and diff = $diff $unit`,
    ({ diff, unit, fromDate }) => {
      const { from, to } = getDateRangeUpToTodayWithDiff(diff, unit);
      expect(from).toBe(fromDate);
      expect(to).toBe(today);
    },
  );
});