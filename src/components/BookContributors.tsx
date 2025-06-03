import type { BookContributions } from '@/apis/BooksApi.ts'

export type BookContributorsProps = {
  contributions: BookContributions
}

export const BookContributors = ({ contributions }: BookContributorsProps) => {
  const authors = contributions.map(c => c.author)

  return (
    <p>
      Author:{' '}
      {authors.map(author => (
        <span key={author?.id}>{author?.name}</span>
      ))}
    </p>
  )
}