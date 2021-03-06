import { gql } from '@apollo/client';

const CREATE_PROFILE_MUTATION = gql`
  mutation createProfile(
    $avatar: String
    $name: String
    $bio: String
    $location: String
    $website: String
  ) {
    createProfile(
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

export default CREATE_PROFILE_MUTATION;
