import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import {
  TrendingBooks,
  type TrendingBooksProps,
} from '@/components/trending/TrendingBooks';
import {
  expectTextToBeVisible,
  renderWithProviders,
} from '@/utils/TestUtils.tsx';
import {
  book1,
  book2,
  booksSummariesResponse,
  trendingBooksResponse,
} from '@/apis/mocks.ts';
import {
  booksSummariesDoc,
  trendingBooksDoc,
} from '@/apis/hardcover/queryDocuments.ts';
import { mockQuery } from '@/utils/MockServer.ts';

const renderComponent = (props: TrendingBooksProps) =>
  renderWithProviders(<TrendingBooks {...props} />);

describe('TrendingBooks', () => {
  beforeEach(() => {
    mockQuery(trendingBooksDoc, trendingBooksResponse);
    mockQuery(booksSummariesDoc, booksSummariesResponse);
  });

  it('should show progressbar', async () => {
    await renderComponent({ duration: 'lastWeek' });
    expect(screen.getByRole('progressbar')).toBeVisible();
  });

  it('should show error', async () => {
    mockQuery(trendingBooksDoc, trendingBooksResponse, { status: 500 });
    await renderComponent({ duration: 'lastWeek' });
    await waitForElementToBeRemoved(screen.getByRole('progressbar'));
    expectTextToBeVisible('Error loading trending books');
  });

  it('should show books', async () => {
    await renderComponent({ duration: 'lastWeek' });
    await waitForElementToBeRemoved(screen.getByRole('progressbar'));
    expectTextToBeVisible(book1.title!);
    expectTextToBeVisible(book2.title!);
  });
});
