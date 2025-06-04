import { server } from '@/utils/MockServer';
import { describe, expect, it } from 'vitest';
import { graphql, HttpResponse } from 'msw';
import { useTrendingBooks } from './BooksApi';
import { bookSummaryDoc, trendingBooksDoc } from './hardcover/queryDocuments';
import { book1, book2 } from './mocks';
import { renderHookWithQuery } from '@/utils/TestUtils';
import { waitFor } from '@testing-library/dom';

const booksIds = [book1.id, book2.id];
const booksSummaries = [book1, book2];
const dateRange = { from: '2025-01-01', to: '2025-02-01' };

describe('BooksApi', () => {
  describe('useTrendingBooks', () => {
    it('should fetch trending books', async () => {
      server.use(
        graphql.query(trendingBooksDoc, () =>
          HttpResponse.json({
            data: {
              books_trending: {
                ids: booksIds,
                error: null,
              },
            },
          }),
        ),

        graphql.query(bookSummaryDoc, () =>
          HttpResponse.json({
            data: { books: [book1, book2] },
          }),
        ),
      );

      const { result } = renderHookWithQuery(() => useTrendingBooks(dateRange));

      expect(result.current.isPending).toBe(true);
      expect(result.current.isLoading).toBe(true);
      expect(result.current.data).toBeUndefined();

      await waitFor(() => expect(result.current.isSuccess).toBe(true));
      expect(result.current.data).toEqual(booksSummaries);
    });
  });
});
