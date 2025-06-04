import { useQuery } from '@tanstack/react-query';
import { graphql } from './hardcover/graphql';
import { hardcoverClient } from './hardcover/client';

export const trendingBooksDoc = graphql(`
  query GetTrendingBooks($from: date!, $to: date!) {
    books_trending(from: $from, to: $to, offset: 10, limit: 10) {
      ids
      error
    }
  }
`);

export const bookSummaryDoc = graphql(`
  query GetBookSummary($ids: [Int!]!) {
    books(where: { id: { _in: $ids } }) {
      id
      title
      subtitle
      slug
      contributions {
        author {
          id
          name
        }
      }
      rating
      slug
    }
  }
`);

export type UseTrendingBooksParams = {
  from: string;
  to: string;
};

const fetchTrendingBooksIds = (params: UseTrendingBooksParams) =>
  hardcoverClient
    .request(trendingBooksDoc, params)
    .then(data => data.books_trending?.ids ?? [])
    .then(ids => ids.filter(id => id !== null));

const fetchTrendingBooksSummaries = (params: UseTrendingBooksParams) =>
  fetchTrendingBooksIds(params).then(ids =>
    hardcoverClient
    .request(bookSummaryDoc, { ids })
    .then(data => data.books),
  );

export const useTrendingBooks = (params: UseTrendingBooksParams) =>
  useQuery({
    queryKey: ['trendingBooks', params],
    queryFn: () => fetchTrendingBooksSummaries(params),
    staleTime: 1 * 60 * 60 * 1000, // 1 hour
  });

type BookSummaries = Awaited<ReturnType<typeof fetchTrendingBooksSummaries>>;
export type BookSummaryT = BookSummaries[number];
export type BookContributions = BookSummaryT['contributions'];
export type BookAuthor = BookContributions[number]['author'];
