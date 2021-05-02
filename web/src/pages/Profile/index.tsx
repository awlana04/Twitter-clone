import React from 'react';
import { useQuery } from '@apollo/client';

import ME_QUERY from '../../schemas/Queries/Me';

import CreateProfile from '../../components/CreateProfile';

import { Container } from './styles';

const Profile: React.FC = () => {
  const { loading, error, data } = useQuery(ME_QUERY);

  if (loading) return <p>Loading</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <Container>
      <h1>Profile</h1>

      <CreateProfile />

      <p>{data.me.profile[0].name}</p>
      <p>{data.me.email}</p>
      <p>{data.me.profile[0].bio}</p>
      <p>{data.me.profile[0].location}</p>
      <p>{data.me.profile[0].website}</p>
    </Container>
  );
};

export default Profile;
