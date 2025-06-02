import { useQuery } from '@tanstack/react-query'
import { graphql } from './hardcover/graphql'
import { hardcoverClient } from './hardcover/client'

const trendingBooksDoc = graphql(`
  query GetTrendingBooks($from: date!, $to: date!) {
    books_trending(from: $from, to: $to, offset: 10, limit: 10) {
      ids
      error
    }
  }
`)

export type UseTrendingBooksParams = {
  from: string
  to: string
}

export const useTrendingBooks = (params: UseTrendingBooksParams) =>
  useQuery({
    queryKey: ['trendingBooks', params],
    queryFn: () => hardcoverClient.request(trendingBooksDoc, params),
    staleTime: 1 * 60 * 60 * 1000, // 1 hour
  })
