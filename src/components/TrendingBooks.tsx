import { useTrendingBooks } from '@/apis/BooksApi.ts';
import { BookSummary } from './BookSummary';

export const TrendingBooks = () => {
  const {
    data: trendingBooks,
    isPending,
    isError,
  } = useTrendingBooks({
    from: '2025-01-24',
    to: '2025-07-01',
  });

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
