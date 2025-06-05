import { createFileRoute } from '@tanstack/react-router';
import { Books } from '@/components/Books';

export const Route = createFileRoute('/')({
  component: Books,
});
