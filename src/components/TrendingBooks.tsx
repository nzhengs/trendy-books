import { useTrendingBooks } from '@/apis/BooksApi.ts';
import { BookSummary } from './BookSummary';
import { getDateRangeUpToTodayWithDiff } from '@/utils/DateUtils';

const dateRange = getDateRangeUpToTodayWithDiff(1, 'month');

export const TrendingBooks = () => {
  const {
    data: trendingBooks,
    isPending,
    isError,
  } = useTrendingBooks(dateRange);

  if (isPending) {
    return <div>Loading...</div>;
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
