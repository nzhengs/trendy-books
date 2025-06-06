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
  <fieldset className="flex flex-col md:flex-row">
    <legend className="font-bold text-xl ">Choose duration</legend>
    {durationOptions.map(option => (
      <div key={option.key} className="mx-2 cursor-pointer inline">
        <input
          type="radio"
          name="duration"
          id={option.key}
          value={option.key}
          defaultChecked={option.key === value}
          onChange={() => onChange(option.key)}
        />
        <label htmlFor={option.key} className="ms-2 text-sm">
          {option.label}
        </label>
      </div>
    ))}
  </fieldset>
);
