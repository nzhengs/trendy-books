import {
  expectTextToBeVisible,
  renderWithProviders,
} from '@/utils/TestUtils.tsx';
import { Header } from '@/components/Header.tsx';

const renderComponent = () => renderWithProviders(<Header />);

describe('Header', () => {
  it('should display header', async () => {
    await renderComponent();
    expectTextToBeVisible('Trendy Books');
  });
});
