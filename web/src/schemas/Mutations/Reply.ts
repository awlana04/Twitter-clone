import { gql } from '@apollo/client';

const REPLY = gql`
  mutation createReply($id: String!, $content: String!) {
    createReply(id: $id, content: $content) {
      id
    }
  }
`;

export default REPLY;
