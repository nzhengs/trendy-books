import type { BookSummaryT } from '@/apis/BooksApi';
import { beforeEach, describe, expect, it } from 'vitest';
import { BookSummary } from './BookSummary';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/utils/TestUtils';

const bookSummary: BookSummaryT = {
  title: 'I am title',
  id: 2,
  subtitle: 'I am subtitle',
  slug: 'book-title-slug',
  contributions: [],
  rating: undefined,
};

describe('BookSummary', async () => {
  beforeEach(
    async () => await renderWithProviders(<BookSummary book={bookSummary} />),
  );

  it('should render book title correctly', () => {
    expect(screen.getByText('I am title')).toBeVisible();
  });

  it('should render link ', () => {
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `/books/${bookSummary.id}/${bookSummary.slug}`,
    );
  });
});
