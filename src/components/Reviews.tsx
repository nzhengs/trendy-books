import type { BookReviewsT } from '@/apis/BooksApi.ts';
import { Review } from './Review';

export type ReviewsProps = {
  id: string;
  reviews: BookReviewsT;
};
export const Reviews = ({ id, reviews }: ReviewsProps) => {
  return (
    <div id={id}>
      <h3 className="py-3 text-xl font-bold"> Latest Reviews</h3>
      {reviews.map(r => (
        <Review key={r.user.id} review={r} />
      ))}
    </div>
  );
};