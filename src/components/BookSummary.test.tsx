import { beforeEach, describe, expect, it } from 'vitest';
import { BookSummary } from './BookSummary';
import { screen } from '@testing-library/react';
import { expectTextToBeVisible, renderWithProviders } from '@/utils/TestUtils';
import { book1 } from '@/apis/mocks';

describe('BookSummary', async () => {
  beforeEach(
    async () => await renderWithProviders(<BookSummary book={book1} />),
  );

  it('should render book title correctly', () => {
    expectTextToBeVisible(book1.title!);
  });

  it('should render link ', () => {
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `/books/${book1.id}/${book1.slug}`,
    );
  });
});
