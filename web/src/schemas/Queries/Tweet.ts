import { gql } from '@apollo/client';

const TWEETS_QUERY = gql`
  query tweet($id: String!) {
    tweet(id: $id) {
      id
      content
      likes {
        id
      }
      replies {
        id
        content
        createdAt
        user {
          id
          profile {
            id
            avatar
            name
          }
        }
      }
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
