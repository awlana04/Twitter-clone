import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FiArrowLeft, FiUser, FiLink } from 'react-icons/fi';

import ME_QUERY from '../../schemas/Queries/Me';

import SideBar from '../../components/SideBar';
import CreateProfile from '../../components/CreateProfile';
import UpdateProfile from '../../components/UpdateProfile';

import {
  Container,
  ProfileContent,
  ProfileInfo,
  ProfileHeader,
  Avatar,
  MakeProfile,
  ProfileWebsite,
  Followers,
} from './styles';
import Aside from '../../components/Aside';

const Profile: React.FC = () => {
  const history = useHistory();

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

      <ProfileContent>
        <ProfileInfo>
          <ProfileHeader>
            <button type="button" onClick={() => history.goBack()}>
              <FiArrowLeft size="22" color="#1a91da" />
            </button>

            <span>{data.me.profile[0].name}</span>
          </ProfileHeader>

          <Avatar>
            {data.me.profile[0].avatar ? (
              <img
                src={data.me.profile[0].avatar}
                alt={`${data.me.profile[0].name}' avatar`}
              />
            ) : (
              <FiUser size="64" color="#1a91da" />
            )}
          </Avatar>

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
