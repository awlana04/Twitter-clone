import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Redirect } from 'react-router-dom';

const IS_LOGGED_IN = gql`
  query {
    me {
      id
    }
  }
`;

interface Props {
  children?: React.ReactNode;
}

export default function IsAuthenticated({ children }: Props) {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);

  if (loading) {
    <p>Loading...</p>;
  }

  if (error) {
    <p>{error.message}</p>;
  }

  if (!data.me) {
    return <Redirect to={{ pathname: '/signup' }} />;
  }

  return <>{children}</>;
}