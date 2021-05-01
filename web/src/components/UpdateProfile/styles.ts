import styled from 'styled-components';
import Modal from 'react-modal';

export const Container = styled.div``;

export const StyledModal = styled(Modal)`
  max-width: 40em;
  min-width: 20em;
  min-height: 20em;
  margin-right: -50%;

  background: red;

  border-radius: 25px;

  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;

  transform: translate(-50%, -50%);

  overlay {
    background: #9e9e9e69;
  }
`;
