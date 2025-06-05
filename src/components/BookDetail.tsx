import { useBookDetail } from '@/apis/BooksApi.ts';
import { BookAuthors } from './BookAuthors';
import { Rating } from './Rating';
import { Reviews } from './Reviews';

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

  const reviewsId = 'reviews';

  return (
    <section>
      <h1 className="text-5xl font-bold text-gray-900 text-center">
        {book.title}
      </h1>
      <h2 className="text-2xl font-medium text-center p-3">
        <BookAuthors authors={book.authors} />
      </h2>

      <span className="flex justify-center items-center">
        <p>Published date: {book.release_year}</p>
        {book.rating && (
          <Rating
            rating={book.rating}
            reviewsCount={book.reviews_count}
            reviewsLink={`#${reviewsId}`}
          />
        )}
      </span>

      {book.image?.url && (
        <img
          className="m-auto h-80 md:h-100 p-6"
          src={book.image.url}
          alt={book.title!}
        />
      )}

      <p>{book.description}</p>

      <Reviews id={reviewsId} reviews={book.reviews} />
    </section>
  );
};
