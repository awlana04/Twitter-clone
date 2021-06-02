import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FiUser } from 'react-icons/fi';

import TWEET_QUERY from '../../schemas/Queries/Tweet';

import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import Aside from '../../components/Aside';

import { Container, TweetContent } from './styles';

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

      <TweetContent>
        <Header>
          <span>Tweet</span>
        </Header>
      </TweetContent>

      <Aside />
    </Container>
  );
};

export default Tweet;
