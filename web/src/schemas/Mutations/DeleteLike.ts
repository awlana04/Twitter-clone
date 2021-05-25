import { gql } from '@apollo/client';

const DELETE_LIKE_MUTATIONS = gql`
  mutation deleteLike($id: String!) {
    deleteLike(id: $id) {
      id
    }
  }
`;

export default DELETE_LIKE_MUTATIONS;
