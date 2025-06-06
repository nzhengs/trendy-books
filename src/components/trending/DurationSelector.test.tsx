import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { DurationSelector } from '@/components/trending/DurationSelector.tsx';
import { durationOptions } from '@/components/trending/durationOptions.ts';

describe('DurationSelector', () => {
  it('renders all duration options', () => {
    const onChange = vi.fn();
    render(
      <DurationSelector value={durationOptions[0].key} onChange={onChange} />,
    );
    durationOptions.forEach(option => {
      expect(screen.getByLabelText(option.label)).toBeVisible();
    });
  });

  it('selects the correct radio button', () => {
    const onChange = vi.fn();
    const selectedOption = durationOptions[1];
    render(<DurationSelector value={selectedOption.key} onChange={onChange} />);
    const radio = screen.getByRole('radio', { name: selectedOption.label });
    expect(radio).toBeChecked();
  });

  it('calls onChange when a different option is selected', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(
      <DurationSelector value={durationOptions[0].key} onChange={onChange} />,
    );
    const newOption = durationOptions[1];
    const radio = screen.getByRole('radio', { name: newOption.label });
    await user.click(radio);
    expect(onChange).toHaveBeenCalledWith(newOption.key);
  });
});
