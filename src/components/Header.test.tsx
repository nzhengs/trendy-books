import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/utils/TestUtils.tsx';
import { Header } from '@/components/Header.tsx';

const renderComponent = () => renderWithProviders(<Header />);

describe('Header', () => {
  it('should display header', async () => {
    await renderComponent();
    expect(screen.getByText('Trendy Books')).toBeVisible();
  });
});
