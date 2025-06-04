import { useQuery } from '@tanstack/react-query';
import { hardcoverClient } from './hardcover/client';
import { trendingBooksDoc, bookSummaryDoc } from './hardcover/queryDocuments';

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
