import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FiArrowLeft, FiUser } from 'react-icons/fi';

import TWEET_QUERY from '../../schemas/Queries/Tweet';

import SideBar from '../../components/SideBar';
import BackButton from '../../components/BackButton';
import Aside from '../../components/Aside';

import { Container } from './styles';

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

      <Tweet>
        <BackButton />

        <span>Tweet</span>
      </Tweet>

      <Aside />
    </Container>
  );
};

export default Tweet;
