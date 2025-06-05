import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import { BookDetail } from '@/components/BookDetail.tsx';
import { book1Detail, book1DetailResponse } from '@/apis/mocks.ts';
import { mockQuery } from '@/utils/MockServer.ts';
import { bookDetailDoc } from '@/apis/hardcover/queryDocuments.ts';
import { renderWithProviders } from '@/utils/TestUtils.tsx';

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
    expect(screen.getByText('Error loading book detail')).toBeVisible();
  });

  it('should show message for invalid book id', async () => {
    mockQuery(bookDetailDoc, { data: { books_by_pk: null } });
    await renderComponent();
    await waitForElementToBeRemoved(screen.getByRole('progressbar'));
    expect(screen.getByText('Unable to find the book')).toBeVisible();
  });

  it('should render book detail', async () => {
    await renderComponent();
    await waitForElementToBeRemoved(screen.getByRole('progressbar'));
    expect(screen.getByText(book1Detail.title!)).toBeVisible();

    expect(screen.getByText('Reviews')).toBeVisible();
    expect(screen.getByText('Rating:')).toBeVisible();
    expect(screen.getByAltText(book1Detail.title!)).toHaveAttribute(
      'src',
      book1Detail.image!.url,
    );
  });
});
