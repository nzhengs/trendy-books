import { useQuery } from '@tanstack/react-query'
import { gql, GraphQLClient } from 'graphql-request'

// Ref: https://docs.hardcover.app/api/getting-started/

const endpoint = 'https://api.hardcover.app/v1/graphql'
const authorization = import.meta.env.VITE_HARDCOVER_API_KEY

console.assert(
  Boolean(authorization),
  'VITE_HARD_COVER_API_KEY is not defined. Please set the api key on .env.local file.',
)

const hardcoverClient = new GraphQLClient(endpoint, {
  headers: { authorization },
})

const trendingBooksGql = gql`
  query trendingBooksQuery($from: date!, $to: date!) {
    books_trending(from: $from, to: $to, offset: 10, limit: 10) {
      ids
      error
    }
  }
`
export type UseTrendingBooksParams = {
  from: string
  to: string
}

export const useTrendingBooks = (params: UseTrendingBooksParams) =>
  useQuery({
    queryKey: ['trendingBooks', params],
    queryFn: () => hardcoverClient.request(trendingBooksGql, params),
    staleTime: 1 * 60 * 60 * 1000 // 1 hour
  })
