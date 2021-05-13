import { gql } from '@apollo/client';

const UPDATE_PROFILE_MUTATION = gql`
  mutation updateProfile(
    $id: String!
    $avatar: String
    $name: String
    $bio: String
    $location: String
    $website: String
  ) {
    updateProfile(
      id: $id
      avatar: $avatar
      name: $name
      bio: $bio
      location: $location
      website: $website
    ) {
      id
    }
  }
`;

export default UPDATE_PROFILE_MUTATION;
