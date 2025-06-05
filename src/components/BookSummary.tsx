import type { BookSummaryT } from '@/apis/BooksApi.ts';
import { BookAuthors } from './BookAuthors';
import { Link } from '@tanstack/react-router';

export type BookSummaryProps = {
  book: BookSummaryT;
};

export const BookSummary = ({ book }: BookSummaryProps) => {
  return (
    <li key={book.id} className="hover:bg-teal-200 ">
      <Link
        to="/books/$bookId/$slug"
        params={{ bookId: String(book.id), slug: book.slug ?? '' }}
      >
        <h2 className="text-sm/8 font-bold text-gray-900">{book.title}</h2>
        <p className="text-sm/6 text-gray-900">
          <BookAuthors authors={book.authors} />
        </p>
      </Link>
    </li>
  );
};
