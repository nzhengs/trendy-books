import {
  trendingBooksDoc,
  booksSummariesDoc,
} from '@/apis/hardcover/queryDocuments';
import { trendingBooksResponse, booksSummariesResponse } from '@/apis/mocks';
import { mockQuery } from '@/utils/MockServer';
import { Books } from './Books';
import { expectTextToBeVisible, renderWithProviders } from '@/utils/TestUtils';

const renderComponent = () => renderWithProviders(<Books />);

describe('Books', () => {
  it('should render the heading', async () => {
    mockQuery(trendingBooksDoc, trendingBooksResponse);
    mockQuery(booksSummariesDoc, booksSummariesResponse);
    await renderComponent();
    expectTextToBeVisible('Trending Books');
  });
});
