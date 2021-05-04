import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiHome,
  FiUser,
  FiMail,
  FiBell,
  FiMoreHorizontal,
} from 'react-icons/fi';

import TwitterLogo from '../../assets/logo.png';

import {
  Container,
  Logo,
  Navigation,
  Home,
  Profile,
  Messages,
  Notifications,
  More,
} from './styles';

const SideBar: React.FC = () => (
  <Container>
    <Logo>
      <Link to="/">
        <img src={TwitterLogo} alt="Home" />
      </Link>
    </Logo>

    <Navigation>
      <Home>
        <Link to="/">
          <h2>
            <FiHome size="26" />
            <span>Home</span>
          </h2>
        </Link>
      </Home>

      <Profile>
        <Link to="/users">
          <h2>
            <FiUser size="26" />
            <span>Profile</span>
          </h2>
        </Link>
      </Profile>

      <Messages>
        <Link to="/users">
          <h2>
            <FiMail size="26" />
            <span>Messages</span>
          </h2>
        </Link>
      </Messages>

      <Notifications>
        <Link to="users">
          <h2>
            <FiBell size="26" />
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
  </Container>
);

export default SideBar;
