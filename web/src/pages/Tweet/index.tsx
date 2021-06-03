import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FiUser } from 'react-icons/fi';

import TWEET_QUERY from '../../schemas/Queries/Tweet';

import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import Aside from '../../components/Aside';

import {
  Container,
  TweetContent,
  TweetInfo,
  Content,
  TweetAnalytics,
} from './styles';

interface ParamType {
  id: string;
}

const Tweet: React.FC = () => {
  const { id } = useParams<ParamType>();

  const { loading, error, data } = useQuery(TWEET_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Container>
      <SideBar />

      <Header>
        <span>Tweet</span>
      </Header>

      <TweetContent>
        <TweetInfo>
          {data.tweet.author.profile[0].avatar ? (
            <img
              src={data.tweet.author.profile[0].avatar}
              alt={`${data.tweet.author.profile[0].name}'s avatar`}
            />
          ) : (
            <FiUser size="64" color="#1a91da" />
          )}

          <h5>{data.tweet.author.profile[0].name}</h5>
        </TweetInfo>

        <Content>
          <p>{data.tweet.content}</p>
        </Content>

        <TweetAnalytics>
          <span>
            <strong>{data.tweet.replies.length}</strong> Tweets com comentários
          </span>

          <span>
            <strong>{data.tweet.likes.length}</strong> Curtidas
          </span>
        </TweetAnalytics>
      </TweetContent>

      <Aside />
    </Container>
  );
};

export default Tweet;
