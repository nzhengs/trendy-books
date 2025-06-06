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
  <div className="flex flex-col md:flex-row border-gray-400 border-b">
    {durationOptions.map(option => (
      <label key={option.key} className="mr-2 cursor-pointer inline text-sm">
        <input
          type="radio"
          name="duration"
          value={option.key}
          defaultChecked={option.key === value}
          onChange={() => onChange(option.key)}
          className="mr-1"
        />
        {option.label}
      </label>
    ))}
  </div>
);
