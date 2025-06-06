import type { BookAuthor } from '@/apis/BooksApi';
import { BookAuthors } from './BookAuthors';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { expectTextToBeVisible } from '@/utils/TestUtils';

describe('BookAuthors', () => {
  it('should render authors correctly', () => {
    const author1: BookAuthor = { id: 1, name: 'Author 1' };
    const author2: BookAuthor = { id: 2, name: 'Author 2' };
    const contributions = [{ author: author1 }, { author: author2 }];

    render(<BookAuthors authors={contributions} />);

    expectTextToBeVisible(author1.name);
    expectTextToBeVisible(author2.name);
  });
});
