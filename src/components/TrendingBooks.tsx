import { useTrendingBooks } from '@/apis/BooksApi.ts';
import { BookSummary } from './BookSummary';
import { getDateRangeUpToTodayWithDiff } from '@/utils/DateUtils';
import { durationOptions, type DurationOption } from './durationOptions';

export type TrendingBooksProps = {
  duration: DurationOption;
};

export const TrendingBooks = ({ duration }: TrendingBooksProps) => {
  const { diff, unit } = durationOptions.find(o => o.key === duration)!;
  const dateRange = getDateRangeUpToTodayWithDiff(diff, unit);

  const {
    data: trendingBooks,
    isPending, 
    isError,
  } = useTrendingBooks(dateRange);

    if (isPending) {
    // <progress> is broken with tailwindcss
    // https://github.com/tailwindlabs/tailwindcss/issues/3357
    // return <progress aria-label="Loading..."></progress>;
    return <span role="progressbar">Loading...</span>;
  }

  if (isError) {
    return <div>Error loading trending books</div>;
  }

  return (
    <ol className="divide-y divide-gray-200 ">
      {trendingBooks.map(book => (
        <BookSummary key={book.id} book={book} />
      ))}
    </ol>
  );
};
