import { gql } from '@apollo/client';

const TWEETS_QUERY = gql`
  query {
    tweets {
      id
      content
      likes {
        id
      }
      createdAt
      author {
        id
        likedTweets {
          id
        }
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
