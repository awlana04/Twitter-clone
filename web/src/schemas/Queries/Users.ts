import { gql } from '@apollo/client';

const USERS_QUERY = gql`
  query {
    allUsers {
      id
      email
    }
  }
`;

export default USERS_QUERY;
