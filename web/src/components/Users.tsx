import React from 'react';
import { gql, useQuery } from '@apollo/client';

import USERS_QUERY from '../schemas/Queries/Users';

interface User {
  name: string;
}

const Users: React.FC = () => {
  const { loading, error, data } = useQuery(USERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {data.allUsers.map((allUser: User) => (
        <p>{allUser.name}</p>
      ))}
    </div>
  );
};

export default Users;
