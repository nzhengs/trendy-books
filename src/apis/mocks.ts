import type { BookSummaryT } from '@/apis/BooksApi.ts';

export const book1: BookSummaryT = {
  id: 561569,
  title: 'The Machine That Changed the World',
  subtitle: null,
  slug: 'machine-that-changed-the-world-the-story-of-lean-production',
  rating: 4,
  contributions: [
    {
      author: {
        id: 285397,
        name: 'James P. Womack',
      },
    },
    {
      author: {
        id: 329979,
        name: 'Daniel T. Jones',
      },
    },
    {
      author: {
        id: 329980,
        name: 'Daniel Roos',
      },
    },
  ],
};

export const book2: BookSummaryT = {
  id: 818052,
  title: "King's Bride",
  subtitle: 'The Chronicles of Urn',
  slug: 'kings-bride',
  rating: 4.7,
  contributions: [
    {
      author: {
        id: 245534,
        name: 'Beck Michaels',
      },
    },
  ],
};
