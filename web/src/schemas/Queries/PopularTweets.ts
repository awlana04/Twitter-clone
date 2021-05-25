import { gql } from '@apollo/client';

const POPULAR_TWEETS_QUERY = gql`
  query {
    tweets {
      id
      content
      createdAt
      likes {
        id
      }
      author {
        id
        profile {
          id
          avatar
          name
        }
      }
    }
  }
`;

export default POPULAR_TWEETS_QUERY;
