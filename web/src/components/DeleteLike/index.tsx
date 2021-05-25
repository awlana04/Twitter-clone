import React from 'react';
import { useMutation } from '@apollo/client';
import { FiHeart } from 'react-icons/fi';

import DELETE_LIKE_MUTATIONS from '../../schemas/Mutations/DeleteLike';
import ME_QUERY from '../../schemas/Queries/Me';
import TWEETS_QUERY from '../../schemas/Queries/Tweets';

import { Container } from './styles';

interface Props {
  id: string;
}

const DeleteLike: React.FC<Props> = ({ id }: Props) => {
  const [deleteLike] = useMutation(DELETE_LIKE_MUTATIONS, {
    refetchQueries: [{ query: TWEETS_QUERY }, { query: ME_QUERY }],
  });

  const handleDeleteLike = async () => {
    await deleteLike({
      variables: { id },
    });
  };

  return (
    <Container>
      <button type="button" onClick={handleDeleteLike}>
        <span>
          <FiHeart size="20" color="#e0245e" fill="#e0245e" />
        </span>
      </button>
    </Container>
  );
};

export default DeleteLike;
