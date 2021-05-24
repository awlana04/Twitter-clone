import React from 'react';
import { useMutation } from '@apollo/client';
import { FiHeart } from 'react-icons/fi';

import LIKED_TWEETS_MUTATIONS from '../../schemas/Mutations/LikedTweets';
import ME_QUERY from '../../schemas/Queries/Me';
import TWEETS_QUERY from '../../schemas/Queries/Tweets';

import { Container } from './styles';

interface Props {
  id: string;
}

const LikeTweet: React.FC<Props> = ({ id }: Props) => {
  const [likeTweet] = useMutation(LIKED_TWEETS_MUTATIONS, {
    refetchQueries: [{ query: TWEETS_QUERY }, { query: ME_QUERY }],
  });

  const handleCreateLike = async () => {
    await likeTweet({
      variables: { id },
    });
  };

  return (
    <Container>
      <button type="button" onClick={handleCreateLike}>
        <span>
          <FiHeart size="20" />
        </span>
      </button>
    </Container>
  );
};

export default LikeTweet;
