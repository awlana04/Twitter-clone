import React, { MouseEventHandler } from 'react';
import { FiX } from 'react-icons/fi';

import { Container } from './styles';

interface CloseButtonType {
  closeModal: MouseEventHandler<HTMLButtonElement>;
}

const BackButton: React.FC<CloseButtonType> = ({
  closeModal,
}: CloseButtonType) => (
  <Container>
    <button type="button" onClick={closeModal}>
      <h5>
        <FiX size="24" color="#1da1f2" />
      </h5>
    </button>
  </Container>
);

export default BackButton;
