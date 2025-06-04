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

export const bookDetailDoc = graphql(`
  query GetBookDetail($id: Int!) {
    books_by_pk(id: $id) {
      id
      title
      subtitle
      description
      slug
      rating
      contributions {
        author {
          id
          name
        }
      }
      user_books(
        limit: 10
        where: {
          review_raw: { _is_null: false }
          has_review: { _eq: true }
          reviewed_at: { _is_null: false }
        }
        order_by: { reviewed_at: desc }
      ) {
        review_raw
        reviewed_at
      }
    }
  }
`);
