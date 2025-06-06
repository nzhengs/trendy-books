import type { BookReviewT } from '@/apis/BooksApi.ts';
import { Stars } from '@/components/Stars.tsx';

export type ReviewProps = {
  review: BookReviewT;
};
export const Review = ({ review }: ReviewProps) => {
  const reviewedDate = new Date(review.reviewed_at!).toLocaleDateString();
  return (
    <li className="py-3">
      <div className="font-medium">
        <span>{review.user.name}</span>
        <span> reviewed on </span>
        <span>{reviewedDate} </span>
        {review.rating && <Stars number={review.rating} />}
      </div>
      <p className="py-2">{review.review_raw}</p>
    </li>
  );
};
