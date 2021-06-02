import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const BackButton: React.FC = ({ children }) => {
  const history = useHistory();

  return (
    <Container>
      <button type="button" onClick={() => history.goBack()}>
        <FiArrowLeft size="22" color="#1a91da" />
      </button>

      <span>{children}</span>
    </Container>
  );
};

export default BackButton;
