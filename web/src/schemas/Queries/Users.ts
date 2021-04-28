import { gql } from '@apollo/client';

const USERS_QUERY = gql`
  query {
    allUsers {
      id
      name
    }
  }
`;

export default USERS_QUERY;
