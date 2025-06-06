import { useState } from 'react';
import type { DurationOption } from './durationOptions';
import { DurationSelector } from './DurationSelector';
import { TrendingBooks } from './TrendingBooks';

export const Books = () => {
  const [duration, setDuration] = useState<DurationOption>('lastWeek');
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900">Trending Books</h1>
      <div className="py-5">
      <DurationSelector value={duration} onChange={setDuration} />
      </div>
      <TrendingBooks duration={duration}/>
    </>
  );
};
