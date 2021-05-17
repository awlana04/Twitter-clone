import { gql } from '@apollo/client';

const TWEETS_QUERY = gql`
  query {
    tweets {
      id
      content
      createdAt
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

export default TWEETS_QUERY;
