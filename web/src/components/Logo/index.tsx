import React from 'react';

import TwitterLogo from '../../assets/logo.png';

import { Container, LogoImage } from './styles';

const Logo: React.FC = ({ children }) => (
  <Container>
    <LogoImage src={TwitterLogo} alt="Twitter's blue bird logo" />
    <h3>{children}</h3>
  </Container>
);

export default Logo;
