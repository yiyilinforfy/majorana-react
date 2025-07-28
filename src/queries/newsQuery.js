import { gql } from '@apollo/client';

export const GET_NEWS = gql`
  query GetNews($page: Int!, $limit: Int!) {
    news(page: $page, limit: $limit) {
      news {
        url
        title
        description
        publishedAt
        source {
          name
        }
      }
      totalPages
      totalNews
    }
  }
`;