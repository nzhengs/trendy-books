import { createFileRoute } from '@tanstack/react-router';
import { TrendingBooks } from '@/components/TrendingBooks';

export const Route = createFileRoute('/')({
  component: TrendingBooks,
});
