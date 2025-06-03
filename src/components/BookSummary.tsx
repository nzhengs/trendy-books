import type { BookSummaryT } from '@/apis/BooksApi.ts'
import { BookContributors } from './BookContributors'
import { Link } from '@tanstack/react-router'

export type BookSummaryProps = {
  book: BookSummaryT
}

export const BookSummary = ({ book }: BookSummaryProps) => {
  return (
    <li key={book.id} className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <h3>{book.title}</h3>
          <p className="text-sm/6 font-semibold text-gray-900">
            <BookContributors contributions={book.contributions} />
          </p>
        </div>
      </div>
      <Link
        to="/books/$bookId/$slug"
        params={{ bookId: String(book.id), slug: book.slug ?? '' }}
        className="text-blue-500 hover:underline"
      >
        Detail
      </Link>
    </li>
  )
}
