/* eslint-disable array-callback-return */
import React from 'react';
import { gql, useQuery } from '@apollo/client';

const ALLUSERS_QUERY = gql`
  query {
    allUsers {
      name
    }
  }
`;

interface allUsers {
  name: String;
}

export default function Users() {
  const { loading, error, data } = useQuery(ALLUSERS_QUERY);

  if (loading) {
    <p>Loading...</p>;
  }

  if (error) {
    <p>{error.message}</p>;
  }

  return (
    <div>
      {data.allUsers.map((allUser: allUsers) => {
        <p>{allUser.name}</p>;
      })}
    </div>
  );
}
