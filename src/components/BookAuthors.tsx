import type { BookAuthorsT } from '@/apis/BooksApi.ts';

export type BookAuthorsProps = {
  authors: BookAuthorsT;
};

export const BookAuthors = ({ authors }: BookAuthorsProps) => {
  const author = authors.map(a => a.author);

  return (
    <>
      Author:{' '}
      {author.map(a => (
        <span key={a?.id}>{a?.name}</span>
      ))}
    </>
  );
};
