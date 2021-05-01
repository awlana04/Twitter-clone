import React from 'react';
import { useQuery } from '@apollo/client';

import { Link } from 'react-router-dom';
import USERS_QUERY from '../schemas/Queries/Users';

interface User {
  id: string;
  email: string;
}

const Users: React.FC = () => {
  const { loading, error, data } = useQuery(USERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {data.allUsers.map((allUser: User) => (
        <p key={allUser.id}>{allUser.email}</p>
      ))}
    </div>
  );
};

export default Users;
