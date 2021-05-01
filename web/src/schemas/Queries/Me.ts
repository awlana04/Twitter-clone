import { gql } from '@apollo/client';

const ME_QUERY = gql`
  query {
    me {
      id
      name
      avatar
      email
      bio
      location
      website
    }
  }
`;

export default ME_QUERY;
