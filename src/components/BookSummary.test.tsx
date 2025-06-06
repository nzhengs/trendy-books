import {  describe, expect, it } from 'vitest';
import { BookSummary } from './BookSummary';
import { screen } from '@testing-library/react';
import { expectTextToBeVisible, renderWithProviders } from '@/utils/TestUtils';
import { book1 } from '@/apis/mocks';

describe('BookSummary', async () => {
  it('should render book title correctly', async () => {
    await renderWithProviders(<BookSummary book={book1} />);
    expectTextToBeVisible(book1.title!);
  });

  it('should render link ', async () => {
    await renderWithProviders(<BookSummary book={book1} />);
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `/books/${book1.id}/${book1.slug}`,
    );
  });
});
