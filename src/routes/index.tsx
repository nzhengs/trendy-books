import { Books } from '@/components/trending/Books';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Books,
});
