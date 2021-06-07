import { gql } from '@apollo/client';

const CREATE_COMMENT_MUTATION = gql`
  mutation createComment($id: String!, $content: String!) {
    createComment(id: $id, content: $content) {
      id
    }
  }
`;

export default CREATE_COMMENT_MUTATION;
