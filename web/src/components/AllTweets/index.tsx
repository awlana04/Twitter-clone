import React from 'react';
import { useQuery } from '@apollo/client';
import { FiUser } from 'react-icons/fi';

import TWEETS_QUERY from '../../schemas/Queries/Tweets';

import { Container, Tweets, Tweet, Content, Interactions } from './styles';

interface TweetsInterface {
  id: string;
  content: string;
  createdAt: number;
  author: {
    profile: {
      name: string;
      avatar: string;
    };
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
          {tweet.author.profile.avatar ? (
            <img
              src={tweet.author.profile.avatar}
              alt={`${tweet.author.profile.name}' avatar`}
            />
          ) : (
            <FiUser size="64" color="#1a91da" />
          )}

          <h6>{tweet.author.profile.name}</h6>
          <span>{tweet.createdAt}</span>

          <Content>
            <p>{tweet.content}</p>
          </Content>

          <Interactions />
        </Tweet>
      ))}
      <Tweets />
    </Container>
  );
};

export default AllTweets;
