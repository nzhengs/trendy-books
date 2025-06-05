import { render, screen } from '@testing-library/react';
import { Rating } from '@/components/Rating.tsx';

describe('Rating', () => {
  it('should render rating', () => {
    render(<Rating rating={3.382} reviewsCount={837} reviewsLink="#reviews" />);
    expect(screen.getByTitle('Star')).toBeInTheDocument();
    expect(screen.getByText('3.38')).toBeVisible();
    expect(screen.getByRole('link', { name: '837 reviews' })).toHaveAttribute(
      'href',
      '#reviews',
    );
  });
});
