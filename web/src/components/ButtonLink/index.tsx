import React from 'react';
import { LinkProps, Link } from 'react-router-dom';

import { Container } from './styles';

const ButtonLink: React.FC<LinkProps> = ({ children, ...rest }) => (
  <Container as={Link} {...rest}>
    <span>{children}</span>
  </Container>
);

export default ButtonLink;
