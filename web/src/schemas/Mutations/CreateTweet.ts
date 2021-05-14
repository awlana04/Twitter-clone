import { gql } from '@apollo/client';

const CREATE_TWEET_MUTATION = gql`
  mutation createTweet($content: String) {
    createTweet(content: $content) {
      id
    }
  }
`;

export default CREATE_TWEET_MUTATION;
