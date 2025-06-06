import { render, screen } from '@testing-library/react';
import { Rating } from '@/components/Rating.tsx';
import { expectTextToBeVisible } from '@/utils/TestUtils';

describe('Rating', () => {
  it('should render rating', () => {
    render(<Rating rating={3.382} reviewsCount={837} reviewsLink="#reviews" />);
    expect(screen.getByTitle('Star')).toBeInTheDocument();
    expectTextToBeVisible('3.38');
    expect(screen.getByRole('link', { name: '837 reviews' })).toHaveAttribute(
      'href',
      '#reviews',
    );
  });
});
