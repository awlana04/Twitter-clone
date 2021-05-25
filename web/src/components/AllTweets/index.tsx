/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { formatDistance, subDays } from 'date-fns';
import { FiUser, FiHeart } from 'react-icons/fi';

import TWEETS_QUERY from '../../schemas/Queries/Tweets';
import ME_QUERY from '../../schemas/Queries/Me';

import {
  Container,
  Tweet,
  TweetInfo,
  Content,
  Interactions,
  Like,
  Liked,
  NoLiked,
} from './styles';
import LikeTweet from '../LikeTweet';

interface TweetsInterface {
  id: string;
  content: string;
  likes: [];
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
  tweet: {
    id: string;
  };
}

const AllTweets: React.FC = () => {
  const { loading, error, data } = useQuery(TWEETS_QUERY);
  const { loading: meLoading, error: meError, data: meData } = useQuery(
    ME_QUERY,
  );

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
              {meData.me.likedTweets
                .map((t: TweetProps) => t.tweet.id)
                .includes(tweet.id) ? (
                <Liked>
                  <button type="button">
                    <span>
                      <FiHeart size="20" color="#e0245e" fill="#e0245e" />
                    </span>

                    <p>{tweet.likes.length}</p>
                  </button>
                </Liked>
              ) : (
                <NoLiked>
                  <LikeTweet id={tweet.id} />

                  <p>{tweet.likes.length}</p>
                </NoLiked>
              )}
            </Like>
          </Interactions>
        </Tweet>
      ))}
    </Container>
  );
};

export default AllTweets;
