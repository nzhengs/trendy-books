import type { BookAuthorsT } from '@/apis/BooksApi.ts';

export type BookAuthorsProps = {
  authors: BookAuthorsT;
};

export const BookAuthors = ({ authors }: BookAuthorsProps) => {
  const author = authors.map(a => a.author);

  return (
    <>
      {author.map(a => (
        <span key={a?.id}>{a?.name}</span>
      ))}
    </>
  );
};
