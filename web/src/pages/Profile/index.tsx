import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FiLink } from 'react-icons/fi';

import ME_QUERY from '../../schemas/Queries/Me';

import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import Avatar from '../../components/Avatar';
import CreateProfile from '../../components/CreateProfile';
import UpdateProfile from '../../components/UpdateProfile';
import Aside from '../../components/Aside';

import {
  Container,
  ProfileContent,
  ProfileInfo,
  MakeProfile,
  ProfileWebsite,
  Followers,
} from './styles';

const Profile: React.FC = () => {
  const { loading, error, data } = useQuery(ME_QUERY);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Container>
      <SideBar />

      <Header>
        <span>{data.me.profile[0].name}</span>
      </Header>

      <ProfileContent>
        <ProfileInfo>
          <Avatar />

          <MakeProfile>
            {data.me.profile[0] ? <UpdateProfile /> : <CreateProfile />}
          </MakeProfile>

          <h3>{data.me.profile[0].name}</h3>
          {data.me.profile[0] ? (
            <ProfileWebsite>
              <FiLink size="18" color="#5b7083" />
              <Link
                to={{ pathname: `http://${data.me.profile[0].website}` }}
                target="_blank"
              >
                {data.me.profile[0].website}
              </Link>
            </ProfileWebsite>
          ) : null}

          <Followers>
            <p>
              <strong>70</strong>
              <span>Seguindo</span>
            </p>
            <p>
              <strong>12</strong>
              <span>Seguidores</span>
            </p>
          </Followers>
        </ProfileInfo>
      </ProfileContent>

      <aside>
        <Aside />
      </aside>
    </Container>
  );
};

export default Profile;
