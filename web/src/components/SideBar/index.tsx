import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link, useHistory } from 'react-router-dom';
import {
  FiHome,
  FiUser,
  FiMail,
  FiBell,
  FiMoreHorizontal,
} from 'react-icons/fi';

import ME_QUERY from '../../schemas/Queries/Me';

import TwitterLogo from '../../assets/logo.png';

import Tweet from '../Tweet';

import {
  Container,
  Logo,
  Navigation,
  Home,
  Profile,
  Messages,
  Notifications,
  More,
  StyledModal,
  MoreOptions,
  Content,
  Avatar,
  Name,
  Logout,
} from './styles';

interface SideBarProps {
  page?: 'home' | 'profile' | 'messages' | 'notifications';
}

const SideBar: React.FC<SideBarProps> = ({ page }: SideBarProps) => {
  const history = useHistory();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLogout = async () => {
    localStorage.removeItem('token');

    history.push('/login');
  };

  const { loading, error, data } = useQuery(ME_QUERY);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Container>
      <Logo>
        <Link to="/home">
          <img src={TwitterLogo} alt="Home" />
        </Link>
      </Logo>

      <Navigation>
        <Home>
          <Link to="/home">
            <h2>
              {page === 'home' ? (
                <FiHome size="26" color="#1da1f2" />
              ) : (
                <FiHome size="26" />
              )}
              <span>Home</span>
            </h2>
          </Link>
        </Home>

        <Profile>
          <Link to="/profile">
            <h2>
              {page === 'profile' ? (
                <FiUser size="26" color="#1da1f2" />
              ) : (
                <FiUser size="26" />
              )}

              <span>Profile</span>
            </h2>
          </Link>
        </Profile>

        <Messages>
          <Link to="/users">
            <h2>
              {page === 'messages' ? (
                <FiMail size="26" color="#1da1f2" />
              ) : (
                <FiMail size="26" />
              )}
              <span>Messages</span>
            </h2>
          </Link>
        </Messages>

        <Notifications>
          <Link to="users">
            <h2>
              {page === 'notifications' ? (
                <FiBell size="26" color="#1da1f2" />
              ) : (
                <FiBell size="26" />
              )}
              <span>Notifications</span>
            </h2>
          </Link>
        </Notifications>

        <More>
          <Link to="users">
            <h2>
              <FiMoreHorizontal size="22" />
              <span>More</span>
            </h2>
          </Link>
        </More>
      </Navigation>

      <Tweet />

      <MoreOptions type="button" onClick={openModal}>
        <Content>
          <Avatar>
            {data.me.profile[0].avatar ? (
              <img
                src={data.me.profile[0].avatar}
                alt={`${data.me.profile[0].name}' avatar`}
              />
            ) : (
              <span>
                <FiUser size="26" color="#1a91da" />
              </span>
            )}
          </Avatar>
          <Name>
            <h5>{data.me.profile[0].name}</h5>
          </Name>

          <FiMoreHorizontal size="22" />
        </Content>
      </MoreOptions>

      <StyledModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        ariaHideApp={false}
        style={{
          overlay: {
            position: 'static',
          },
        }}
      >
        <Content>
          <Avatar>
            {data.me.profile[0].avatar ? (
              <img
                src={data.me.profile[0].avatar}
                alt={`${data.me.profile[0].name}' avatar`}
              />
            ) : (
              <span>
                <FiUser size="26" color="#1a91da" />
              </span>
            )}
          </Avatar>
          <Name>
            <h5>{data.me.profile[0].name}</h5>
          </Name>

          <Logout onClick={handleLogout}>
            <p>Sair da conta</p>
          </Logout>
        </Content>
      </StyledModal>
    </Container>
  );
};

export default SideBar;
