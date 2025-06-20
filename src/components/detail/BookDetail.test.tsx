import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { BookDetail } from '@/components/detail/BookDetail';
import { book1Detail, book1DetailResponse } from '@/apis/mocks.ts';
import { mockQuery } from '@/utils/MockServer.ts';
import { bookDetailDoc } from '@/apis/hardcover/queryDocuments.ts';
import {
  expectTextToBeVisible,
  renderWithProviders,
} from '@/utils/TestUtils.tsx';

const renderComponent = () =>
  renderWithProviders(<BookDetail id={book1Detail.id} />);

describe('BookDetail', () => {
  beforeEach(() => mockQuery(bookDetailDoc, book1DetailResponse));

  it('should show progressbar', async () => {
    await renderComponent();
    expect(screen.getByRole('progressbar')).toBeVisible();
  });

  it('should show error', async () => {
    mockQuery(bookDetailDoc, book1DetailResponse, { status: 500 });
    await renderComponent();
    await waitForElementToBeRemoved(screen.getByRole('progressbar'));
    expectTextToBeVisible('Error loading book detail');
  });

  it('should show message for invalid book id', async () => {
    mockQuery(bookDetailDoc, { data: { books_by_pk: null } });
    await renderComponent();
    await waitForElementToBeRemoved(screen.getByRole('progressbar'));
    expectTextToBeVisible('Unable to find the book');
  });

  it('should render book detail', async () => {
    await renderComponent();
    await waitForElementToBeRemoved(screen.getByRole('progressbar'));
    expectTextToBeVisible(book1Detail.title!);

    expect(screen.getByAltText(book1Detail.title!)).toHaveAttribute(
      'src',
      book1Detail.image!.url,
    );
  });
});
