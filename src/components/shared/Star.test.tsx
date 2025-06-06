import { render, screen } from '@testing-library/react';
import { Star } from './Star';

describe('Star', () => {
  it('should render star', () => {
    render(<Star />);
    expect(screen.getByTitle('Star')).toBeInTheDocument();
  });
});
