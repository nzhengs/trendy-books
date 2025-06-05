import { mockQuery } from '@/utils/MockServer';
import { describe, expect, it } from 'vitest';
import { useTrendingBooks } from './BooksApi';
import { booksSummariesDoc, trendingBooksDoc } from './hardcover/queryDocuments';
import {
  book1,
  book2,
  book3,
  booksSummariesResponse,
  trendingBooksResponse,
} from './mocks';
import { renderHookWithQuery } from '@/utils/TestUtils';
import { waitFor } from '@testing-library/dom';

const dateRange = { from: '2025-01-01', to: '2025-02-01' };

describe('BooksApi', () => {
  describe('useTrendingBooks', () => {
    it('should fetch trending books', async () => {
      mockQuery(trendingBooksDoc, trendingBooksResponse);

      mockQuery(booksSummariesDoc, booksSummariesResponse);

      const { result } = renderHookWithQuery(() => useTrendingBooks(dateRange));

      expect(result.current.isPending).toBe(true);
      expect(result.current.isLoading).toBe(true);
      expect(result.current.data).toBeUndefined();

      await waitFor(() => expect(result.current.isSuccess).toBe(true));
      expect(result.current.data).toEqual([book1, book2, book3]);
    });
  });
});
