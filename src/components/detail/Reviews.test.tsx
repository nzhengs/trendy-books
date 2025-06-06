import { book1Detail } from '@/apis/mocks.ts';
import { Reviews } from '@/components/detail/Reviews';
import { expectTextToBeVisible } from '@/utils/TestUtils';
import { render, screen } from '@testing-library/react';

describe('Reviews', () => {
  it('should render reviews', () => {
    const reviews = book1Detail.reviews;
    render(<Reviews id="reviews" reviews={reviews} />);
    expectTextToBeVisible('Latest Reviews');
    expect(screen.getAllByText('reviewed on')).toHaveLength(reviews.length);
  });
});
