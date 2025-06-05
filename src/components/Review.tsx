import type { BookReviewT } from '@/apis/BooksApi.ts';
import { Stars } from '@/components/Stars.tsx';

export type ReviewProps = {
  review: BookReviewT;
};
export const Review = ({ review }: ReviewProps) => {
  const reviewedDate = new Date(review.reviewed_at!).toLocaleDateString();
  return (
    <div className="py-3">
      <div>
        <span className="font-medium">{review.user.name}</span>
        <span> reviewed on </span>
        <span className="font-medium">{reviewedDate} </span>
        {review.rating && <Stars number={review.rating} />}
      </div>
      <p className="py-2">{review.review_raw}</p>
    </div>
  );
};
