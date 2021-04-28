import React from 'react';
import { LinkProps, Link } from 'react-router-dom';

import { Container } from './styles';

const Links: React.FC<LinkProps> = ({ children, ...rest }) => (
  <Container as={Link} {...rest}>
    <h4>{children}</h4>
  </Container>
);

export default Links;
