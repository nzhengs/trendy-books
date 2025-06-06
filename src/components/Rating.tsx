import { Star } from '@/components/Star.tsx';
import { DotSeparator } from './DotSeparator';

export type RatingProps = {
  rating: number;
  reviewsCount: number;
  reviewsLink: string;
};

export const Rating = ({ rating, reviewsCount, reviewsLink }: RatingProps) => (
  <div className="flex items-center">
    <span className="flex items-center">
      <DotSeparator />
      <Star />
      <p className="ms-2 text-sm font-bold text-gray-900">
        {rating.toFixed(2)}
      </p>
    </span>
    <span className="flex items-center">
      <DotSeparator />
      <a
        href={reviewsLink}
        className="text-sm font-medium text-gray-900 underline hover:no-underline"
      >
        {reviewsCount} reviews
      </a>
    </span>
  </div>
);
