import { Star } from './Star';

export type StarsProps = {
  number: number;
};
export const Stars = ({ number }: StarsProps) => (
  <span>
    {[...Array(Math.round(number))].map((_, index) => (
      <span key={index} className="inline-flex">
        <Star />
      </span>
    ))}
  </span>
);
