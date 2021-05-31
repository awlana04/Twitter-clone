import styled from 'styled-components';
import Modal from 'react-modal';

export const Container = styled.div`
  svg:hover {
    background-color: #1aa1f2;
  }
`;

export const StyledModal = styled(Modal)`
  max-width: 36em;
  min-width: 24em;
  min-height: 16em;
  margin-top: 14%;
  margin-left: 48%;

  background-color: #ffff;

  border-radius: 25px;

  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  textarea {
    max-width: 38em;
    min-width: 28em;
    min-height: 8em;
    margin-left: 86px;

    border: none;
  }

  button {
    width: 80px;
    margin-left: 36em;
    margin-bottom: 10px;
  }
`;

export const ButtonClose = styled.div`
  max-width: 38em;
  min-width: 36em;

  border-bottom: 1.5px solid rgb(0, 0, 0, 0.4);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  button {
    width: 36px;
    height: 36px;
    margin: 8px 8px;

    background-color: #ffffff;

    border-radius: 50%;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    &:hover {
      background-color: rgba(29, 161, 242, 0.1);
    }

    svg {
      margin: 7px;
    }
  }
`;
