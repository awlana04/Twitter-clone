import React from 'react';
import { useQuery } from '@apollo/client';
import { FiUser } from 'react-icons/fi';

import TWEETS_QUERY from '../../schemas/Queries/Tweets';

import { Container, Tweets, Tweet, Content, Interactions } from './styles';

interface TweetsInterface {
  context: string;
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
    <p>Loading...</p>;
  }

  if (error) {
    <p>{error.message}</p>;
  }

  return (
    <Container>
      {data.tweets[0].map((tweet: TweetsInterface) => (
        <Tweet>
          {data.tweet[0].author[0].profile[0].avatar ? (
            <img
              src={data.tweet[0].author[0].profile[0].avatar}
              alt={`${data.tweet[0].author[0].profile[0].name}' avatar`}
            />
          ) : (
            <FiUser size="64" color="#1a91da" />
          )}

          <h6>{data.tweet[0].author[0].profile[0].name}</h6>
          <span>{data.tweet[0].createdAt}</span>

          <Content>
            <p>{data.tweet[0].content}</p>
          </Content>

          <Interactions />
        </Tweet>
      ))}
      {/* <Tweets>
      </Tweets> */}
    </Container>
  );
};

export default AllTweets;
