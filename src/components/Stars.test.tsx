import { render, screen } from '@testing-library/react';
import { Stars } from '@/components/Stars.tsx';

describe('Stars', () => {
  it('should render stars', () => {
    render(<Stars number={3} />);
    expect(screen.getAllByTitle('Star')).toHaveLength(3);
  });

  it('should render rounded up stars', () => {
    render(<Stars number={3.5} />);
    expect(screen.getAllByTitle('Star')).toHaveLength(4);
  });
});