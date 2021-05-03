import { gql } from '@apollo/client';

const ME_QUERY = gql`
  query {
    me {
      id
      email
      profile {
        id
        avatar
        name
        bio
        location
        website
      }
    }
  }
`;

export default ME_QUERY;