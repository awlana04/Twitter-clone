import React from 'react';
import { useQuery } from '@apollo/client';
import { FiUser } from 'react-icons/fi';

import ME_QUERY from '../../schemas/Queries/Me';

import { Container } from './styles';

const Avatar: React.FC = () => {
  const { loading, error, data } = useQuery(ME_QUERY);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Container>
      {data.me.profile[0].avatar ? (
        <img
          src={data.me.profile[0].avatar}
          alt={`${data.me.profile[0].name}' avatar`}
        />
      ) : (
        <FiUser size="64" color="#1a91da" />
      )}
    </Container>
  );
};

export default Avatar;
