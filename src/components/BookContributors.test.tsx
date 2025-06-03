import type { BookAuthor } from '@/apis/BooksApi'
import { BookContributors } from './BookContributors'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('BookContributors', () => {
  it('should render authors correctly', () => {
    const author1: BookAuthor = { id: 1, name: 'Author 1' }
    const author2: BookAuthor = { id: 2, name: 'Author 2' }
    const contributions = [{ author: author1 }, { author: author2 }]

    render(<BookContributors contributions={contributions} />)

    expect(screen.getByText('Author:')).toBeVisible()
    expect(screen.getByText(author1.name)).toBeVisible()
    expect(screen.getByText(author2.name)).toBeVisible()
  })
})
