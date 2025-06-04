import { useBookDetail } from '@/apis/BooksApi.ts';

export type BookDetailProps = {
  id: number;
};

export const BookDetail = ({ id }: BookDetailProps) => {
  const { data: book } = useBookDetail(id);
  return <pre>{JSON.stringify(book, null, 2)}</pre>;
};
