import {
  expectTextToBeVisible,
  renderWithProviders,
} from '@/utils/TestUtils.tsx';
import { Header } from '@/components/shared/Header';

const renderComponent = () => renderWithProviders(<Header />);

describe('Header', () => {
  it('should display header', async () => {
    await renderComponent();
    expectTextToBeVisible('Trendy Books');
  });
});
