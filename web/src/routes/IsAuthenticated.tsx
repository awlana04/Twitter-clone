import React from 'react';
import { useQuery } from '@apollo/client';
import { Redirect } from 'react-router-dom';

import IS_LOGGED_IN from '../schemas/Queries/IsAuthenticated';

const IsAuthenticated: React.FC = ({ children }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  if (!data.me) {
    return <Redirect to={{ pathname: '/landing' }} />;
  }

  return <>{children}</>;
};

export default IsAuthenticated;
