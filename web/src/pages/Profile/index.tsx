import React from 'react';
import { useQuery } from '@apollo/client';

import ME_QUERY from '../../schemas/Queries/Me';

import UpdateProfile from '../../components/UpdateProfile';

import { Container } from './styles';

const Profile: React.FC = () => {
  const { loading, error, data } = useQuery(ME_QUERY);

  if (loading) return <p>Loading</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <Container>
      <h1>Profile</h1>

      <UpdateProfile />

      <p>{data.me.name}</p>
      <p>{data.me.bio}</p>
      <p>{data.me.location}</p>
      <p>{data.me.website}</p>
    </Container>
  );
};

export default Profile;
