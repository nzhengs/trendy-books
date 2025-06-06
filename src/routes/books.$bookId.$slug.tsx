import { createFileRoute } from '@tanstack/react-router';
import { BookDetail } from '@/components/detail/BookDetail';

export const Route = createFileRoute('/books/$bookId/$slug')({
  component: BookDetailRouteComponent,
});

function BookDetailRouteComponent() {
  const { bookId } = Route.useParams();

  return <BookDetail id={Number(bookId)} />;
}
