import type { BookSummaryT } from '@/apis/BooksApi'
import { beforeEach, describe, expect, it } from 'vitest'
import { BookSummary } from './BookSummary'
import { render, screen } from '@testing-library/react'

const bookSummary: BookSummaryT = {
  title: 'I am title',
  id: 2,
  subtitle: 'I am subtitle',
  slug: 'book-title-slug',
  contributions: [],
  rating: undefined,
}

describe('BookSummary', () => {
  beforeEach(() => render(<BookSummary book={bookSummary} />))

  it.todo('should render book title correctly', () => {
    expect(screen.getByText('I am title')).toBeVisible()
  })

  it.todo('should render detail link ', () => {

  })
})
