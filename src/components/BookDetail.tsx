import { useBookDetail } from '@/apis/BooksApi.ts';
import { BookAuthors } from './BookAuthors';

export type BookDetailProps = {
  id: number;
};

export const BookDetail = ({ id }: BookDetailProps) => {
  const { data: book, isPending, isError } = useBookDetail(id);

  if (isPending) {
    // TODO: https://github.com/tailwindlabs/tailwindcss/issues/3357
    return <progress aria-label="Loading..."></progress>;
  }

  if (isError) {
    return <div>Error loading book detail</div>;
  }

  if (!book) {
    return <div>Unable to find the book</div>;
  }

  return (
    <section>
      <h1 className="text-5xl font-bold text-gray-900 text-center">
        {book.title}
      </h1>

      <h2 className="text-2xl font-medium">
        <BookAuthors authors={book.authors} />
      </h2>
      <p>
        <span className="font-bold">Rating:</span> {book.rating?.toFixed(2)}
      </p>

      {book.image?.url && (
        <img
          className="m-auto h-80 md:h-100 p-6"
          src={book.image.url}
          alt={book.title!}
        />
      )}

      <p>{book.description}</p>

      <h2 className="py-3 text-2xl ">Reviews</h2>
      {book.reviews.map(r => (
        <>
          <p className="py-2">{r.review_raw}</p>
          <p>Rating: {r.rating}</p>
        </>
      ))}
    </section>
  );
};
