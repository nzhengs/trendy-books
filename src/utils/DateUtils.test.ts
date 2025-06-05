import { getDateRangeUpToTodayWithDiff } from '@/utils/DateUtils.ts';
import { describe, vi, expect, it } from 'vitest';

describe('getDateRangeUpToTodayWithDiff', () => {
  const today = '2025-06-05';

  const testData = {
    diff: 1,
    unit: 'month',
    fromDate: '2025-05-05',
  };

  it('should render the difference of 1 month', () => {
    vi.setSystemTime(new Date(today + 'T15:31:10.000Z'));

    const { from, to } = getDateRangeUpToTodayWithDiff(testData.diff, 'month');
    expect(from).toBe(testData.fromDate);
    expect(to).toBe(today);
  });
});
