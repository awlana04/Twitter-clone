import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { formatDistance, subDays } from 'date-fns';
import { FiUser, FiHeart } from 'react-icons/fi';

import TWEETS_QUERY from '../../schemas/Queries/Tweets';
import ME_QUERY from '../../schemas/Queries/Me';
import LIKED_TWEETS_MUTATIONS from '../../schemas/Mutations/LikedTweets';

import {
  Container,
  Tweet,
  TweetInfo,
  Content,
  Interactions,
  Like,
} from './styles';

interface TweetsInterface {
  id: string;
  content: string;
  likes: Array<{
    id: string;
  }>;
  createdAt: number;
  author: {
    profile: Array<{
      name: string;
      avatar: string;
    }>;
  };
}

interface TweetProps {
  id: string;
}

const AllTweets: React.FC<TweetProps> = ({ id }: TweetProps) => {
  const { loading, error, data } = useQuery(TWEETS_QUERY);
  const { loading: meLoading, error: meError, data: meData } = useQuery(
    ME_QUERY,
  );

  const [likeTweet] = useMutation(LIKED_TWEETS_MUTATIONS, {
    variables: {
      id: '',
    },
    refetchQueries: [{ query: TWEETS_QUERY }],
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (meLoading) {
    return <p>Loading...</p>;
  }

  if (meError) {
    return <p>{meError.message}</p>;
  }

  const handleCreateLike = async () => {
    await likeTweet({
      variables: {
        id,
      },
    });
  };

  return (
    <Container>
      {data.tweets.map((tweet: TweetsInterface) => (
        <Tweet key={tweet.id}>
          <TweetInfo>
            {tweet.author.profile[0].avatar ? (
              <img
                src={tweet.author.profile[0].avatar}
                alt={`${tweet.author.profile[0].name}' avatar`}
              />
            ) : (
              <FiUser size="64" color="#1a91da" />
            )}

            <h6>{tweet.author.profile[0].name}</h6>
            <span>
              {formatDistance(
                subDays(new Date(tweet.createdAt), 0),
                new Date(),
              )}{' '}
              ago
            </span>
          </TweetInfo>

          <Content>
            <p>{tweet.content}</p>
          </Content>

          <Interactions>
            <Like>
              <button type="button" onClick={handleCreateLike}>
                <span>
                  <FiHeart size="20" />

                  <p>{tweet.likes.length}</p>
                </span>
              </button>
            </Like>
          </Interactions>
        </Tweet>
      ))}
    </Container>
  );
};

export default AllTweets;
