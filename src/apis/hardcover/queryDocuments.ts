import { graphql } from './graphql';

export const trendingBooksDoc = graphql(`
  query GetTrendingBooks($from: date!, $to: date!) {
    books_trending(from: $from, to: $to, offset: 0, limit: 15) {
      ids
      error
    }
  }
`);

export const booksSummariesDoc = graphql(`
  query GetBookSummary($ids: [Int!]!) {
    books(where: { id: { _in: $ids } }) {
      id
      title
      subtitle
      slug
      authors: contributions {
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
      reviews_count
      image {
        url
      }
      release_year
      authors: contributions {
        author {
          id
          name
        }
      }
      reviews: user_books(
        limit: 10
        where: {
          review_raw: { _is_null: false }
          has_review: { _eq: true }
          reviewed_at: { _is_null: false }
        }
        order_by: { reviewed_at: desc }
      ) {
        rating
        review_raw
        reviewed_at
        user {
          id
          name
        }
      }
    }
  }
`);
