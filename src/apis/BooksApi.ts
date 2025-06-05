import { useQuery } from '@tanstack/react-query';
import { hardcoverClient } from './hardcover/client';
import {
  trendingBooksDoc,
  booksSummariesDoc,
  bookDetailDoc,
} from './hardcover/queryDocuments';

export type UseTrendingBooksParams = {
  from: string;
  to: string;
};

const fetchTrendingBooksIds = (params: UseTrendingBooksParams) =>
  hardcoverClient
    .request(trendingBooksDoc, params)
    .then(data => data.books_trending?.ids)
    .then(ids => ids?.filter(id => id !== null));

const fetchTrendingBooksSummaries = (params: UseTrendingBooksParams) =>
  fetchTrendingBooksIds(params).then(ids =>
    ids?.length
      ? hardcoverClient
          .request(booksSummariesDoc, { ids })
          .then(data => data.books)
      : [],
  );

export const useTrendingBooks = (params: UseTrendingBooksParams) =>
  useQuery({
    queryKey: ['trendingBooks', params],
    queryFn: () => fetchTrendingBooksSummaries(params),
    staleTime: 1 * 60 * 60 * 1000, // 1 hour
  });

const fetchBookDetail = (id: number) =>
  hardcoverClient.request(bookDetailDoc, { id }).then(data => data.books_by_pk);

export const useBookDetail = (id: number) => {
  return useQuery({
    queryKey: ['bookDetail', id],
    queryFn: () => fetchBookDetail(id),
    staleTime: 1 * 60 * 60 * 1000, // 1 hour
  });
};

type BookSummaries = Awaited<ReturnType<typeof fetchTrendingBooksSummaries>>;
export type BookSummaryT = BookSummaries[number];
export type BookAuthorsT = BookSummaryT['authors'];
export type BookAuthor = BookAuthorsT[number]['author'];

export type BookDetailT = NonNullable<
  Awaited<ReturnType<typeof fetchBookDetail>>
>;
