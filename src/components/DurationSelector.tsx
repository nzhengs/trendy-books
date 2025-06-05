import type { DurationOption } from '@/components/durationOptions.ts';
import { durationOptions } from '@/components/durationOptions.ts';

export type DurationSelectorProps = {
  value: DurationOption;
  onChange: (value: DurationOption) => void;
};
export const DurationSelector = ({
  value,
  onChange,
}: DurationSelectorProps) => (
  <fieldset>
    {durationOptions.map(option => (
      <label key={option.key} className="mx-2 cursor-pointer">
        <input
          type="radio"
          name="duration"
          value={option.key}
          defaultChecked={option.key === value}
          onChange={() => onChange(option.key)}
        />
        {' '}{option.label}
      </label>
    ))}
  </fieldset>
);