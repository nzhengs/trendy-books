import { graphql } from './graphql';


export const trendingBooksDoc = graphql(`
  query GetTrendingBooks($from: date!, $to: date!) {
    books_trending(from: $from, to: $to, offset: 10, limit: 10) {
      ids
      error
    }
  }
`);

export const bookSummaryDoc = graphql(`
  query GetBookSummary($ids: [Int!]!) {
    books(where: { id: { _in: $ids } }) {
      id
      title
      subtitle
      slug
      contributions {
        author {
          id
          name
        }
      }
      rating
      slug
    }
  }
`);
