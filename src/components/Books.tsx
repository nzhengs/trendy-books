import { TrendingBooks } from './TrendingBooks';

export const Books = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 mb-5">
        Trending Books
      </h1>
      <p>Duration Selector</p>
      <TrendingBooks />
    </>
  );
};
