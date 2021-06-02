import styled from 'styled-components';
import Modal from 'react-modal';

export const Container = styled.div`
  button {
    width: 240px;
    height: 50px;
    margin-left: -15px;

    background: #1da1f2;
    border-radius: 25px;

    transition: 0.4s;

    &:hover {
      background: #1a91da;
    }

    h3 {
      color: #ffffff;
      font-size: 16px;
    }
  }
`;

export const StyledModal = styled(Modal)`
  max-width: 36em;
  min-width: 24em;
  min-height: 16em;
  margin-top: 14%;
  margin-left: 48%;

  background-color: #ffff;

  border-radius: 15px;

  transform: translate(-50%, -50%);

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

  img,
  svg {
    width: 52px;
    height: 52px;
    margin-top: 22px;
    margin-left: 16px;
    margin-bottom: -50px;

    border-radius: 50%;
  }
`;

export const Close = styled.div`
  svg {
    width: 22px;
    height: 22px;
  }
`;
