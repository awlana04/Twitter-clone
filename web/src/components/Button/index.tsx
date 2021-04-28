import React from 'react';

import { Container } from './styles';

const Button: React.FC = ({ children, ...rest }) => (
  <Container type="submit" {...rest}>
    <span>{children}</span>
  </Container>
);

export default Button;
