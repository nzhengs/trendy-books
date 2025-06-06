import type { BookReviewsT } from '@/apis/BooksApi.ts';
import { Review } from './Review';

export type ReviewsProps = {
  id: string;
  reviews: BookReviewsT;
};
export const Reviews = ({ id, reviews }: ReviewsProps) => {
  return (
    <div id={id} className="scroll-mt-12">
      <h3 className="py-3 text-xl font-bold"> Latest Reviews</h3>
      <ul className="divide-y divide-gray-200 ">
        {reviews.map(r => (
          <Review key={r.user.id} review={r} />
        ))}
      </ul>
    </div>
  );
};
