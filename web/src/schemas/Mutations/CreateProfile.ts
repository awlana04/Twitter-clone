import { gql } from '@apollo/client';

const CREATE_PROFILE_MUTATION = gql`
  mutation createProfile(
    $name: String!
    $bio: String!
    $location: String!
    $website: String!
  ) {
    createProfile(
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
