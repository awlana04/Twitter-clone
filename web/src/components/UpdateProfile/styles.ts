import styled from 'styled-components';
import Modal from 'react-modal';

export const Container = styled.div``;

export const StyledModal = styled(Modal)`
  max-width: 34em;
  min-width: 20em;
  min-height: 28em;
  margin-top: 22%;
  margin-left: 48%;

  border: 1px solid rgb(0, 0, 0, 0.2);

  border-radius: 25px;

  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 30rem;
    margin-bottom: 24px;
    padding: 18px 18px;

    border: 1px solid rgb(0, 0, 0, 0.3);
    border-radius: 5px;

    font-size: 16px;
    font-weight: 400;
  }
`;
