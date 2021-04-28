import { gql } from '@apollo/client';

const IS_LOGGED_IN = gql`
  query {
    me {
      id
    }
  }
`;

export default IS_LOGGED_IN;
