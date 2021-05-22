import React from 'react';
import { useQuery } from '@apollo/client';
import { formatDistance, subDays } from 'date-fns';
import { FiUser } from 'react-icons/fi';

import TWEETS_QUERY from '../../schemas/Queries/Tweets';

import { Container, Tweet, TweetInfo, Content, Interactions } from './styles';

interface TweetsInterface {
  id: string;
  content: string;
  createdAt: number;
  author: {
    profile: Array<{
      name: string;
      avatar: string;
    }>;
  };
}

const AllTweets: React.FC = () => {
  const { loading, error, data } = useQuery(TWEETS_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
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
          <Interactions />
        </Tweet>
      ))}
    </Container>
  );
};

export default AllTweets;
