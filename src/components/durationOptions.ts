export const durationOptions = [
  {
    key: 'lastWeek',
    label: 'Last Week',
    diff: 7,
    unit: 'day',
  },

  {
    key: 'lastMonth',
    label: 'Last Month',
    diff: 1,
    unit: 'month',
  },
  {
    key: 'last3Months',
    label: 'Last 3 Months',
    diff: 3,
    unit: 'month',
  },
  {
    key: 'lastYear',
    label: 'Last Year',
    diff: 1,
    unit: 'year',
  },
] as const;

export type DurationOption = (typeof durationOptions)[number]['key'];
