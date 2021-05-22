import { gql } from '@apollo/client';

const LIKED_TWEETS_MUTATIONS = gql`
  mutation LikedTweet($id: String!) {
    likedTweet(id: $id) {
      id
    }
  }
`;

export default LIKED_TWEETS_MUTATIONS;
