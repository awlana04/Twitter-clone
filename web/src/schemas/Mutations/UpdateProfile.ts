import { gql } from '@apollo/client';

const UPDATE_PROFILE_MUTATION = gql`
  mutation updateProfile(
    $name: String!
    $bio: String!
    $location: String!
    $website: String!
  ) {
    updateProfile(
      name: $name
      bio: $bio
      location: $location
      website: $website
    ) {
      id
      token
    }
  }
`;

export default UPDATE_PROFILE_MUTATION;
