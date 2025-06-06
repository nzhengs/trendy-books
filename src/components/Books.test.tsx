import {
  trendingBooksDoc,
  booksSummariesDoc,
} from '@/apis/hardcover/queryDocuments';
import { trendingBooksResponse, booksSummariesResponse } from '@/apis/mocks';
import { mockQuery } from '@/utils/MockServer';
import { Books } from './Books';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/utils/TestUtils';

const renderComponent = () => renderWithProviders(<Books />);

describe('Books', () => {
  it('should render the heading', async () => {
    mockQuery(trendingBooksDoc, trendingBooksResponse);
    mockQuery(booksSummariesDoc, booksSummariesResponse);
    await renderComponent();
    expect(screen.getByText('Trending Books')).toBeVisible();
  });
});
