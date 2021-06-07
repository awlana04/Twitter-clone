import { gql } from '@apollo/client';

const CREATE_REPLY_MUTATION = gql`
  mutation createReply($id: String!, $content: String!, $replyId: String!) {
    createReply(id: $id, content: $content, replyId: $replyId) {
      id
    }
  }
`;

export default CREATE_REPLY_MUTATION;
