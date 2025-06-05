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
      <h1 className="text-5xl text-center">{book.title}</h1>
      <h2 className="text-2xl text-center">{book.subtitle}</h2>
      <BookAuthors authors={book.authors} />
      <p>Publised date: {book.release_year}</p>

      {book.image?.url && (
        <img
          className="m-auto h-100 md:h-180 p-6"
          src={book.image.url}
          alt={book.title!}
        />
      )}

      <p>{book.description}</p>

      <h3 className="py-3">Reviews</h3>
      {book.reviews.map(r => (
        <p className="py-2">{r.review_raw}</p>
      ))}
    </section>
  );
};
