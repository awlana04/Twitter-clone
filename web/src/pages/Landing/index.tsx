import React from 'react';
import { FiSearch, FiUser, FiMessageCircle } from 'react-icons/fi';

import Logo from '../../components/Logo';
import ButtonLink from '../../components/ButtonLink';

import {
  Container,
  LeftContainer,
  RightContainer,
  Buttons,
  Register,
  Login,
} from './styles';

const Landing: React.FC = () => (
  <Container>
    <LeftContainer>
      <h2>
        <FiSearch size="20" color="white" />
        Siga os seus interesses.
      </h2>

      <h2>
        <FiUser size="20" color="white" />
        Escute o que as pessoas estão falando.
      </h2>

      <h2>
        <FiMessageCircle size="20" color="white" />
        Entre na conversa.
      </h2>
    </LeftContainer>

    <RightContainer>
      <Logo>
        <h3>Acontecendo agora</h3>
      </Logo>

      <h4>Inscreva-se no Twitter hoje mesmo.</h4>

      <Buttons>
        <Register>
          <ButtonLink to="/signup">
            <span>Inscreva-se</span>
          </ButtonLink>
        </Register>

        <br />

        <Login>
          <ButtonLink to="/login">
            <span>Entrar</span>
          </ButtonLink>
        </Login>
      </Buttons>

      <footer>
        <p>Fake © 2021 Twitter, Inc.</p>
      </footer>
    </RightContainer>
  </Container>
);

export default Landing;
