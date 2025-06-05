import { Star } from '@/components/Star.tsx';

export type RatingProps = {
  rating: number;
  reviewsCount: number;
  reviewsLink: string;
};

export const Rating = ({ rating, reviewsCount, reviewsLink }: RatingProps) => (
  <div className="flex items-center">
    <Star />
    <p className="ms-2 text-sm font-bold text-gray-900">
      {rating.toFixed(2)}
    </p>
    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
    <a
      href={reviewsLink}
      className="text-sm font-medium text-gray-900 underline hover:no-underline"
    >
      {reviewsCount} reviews
    </a>
  </div>
);