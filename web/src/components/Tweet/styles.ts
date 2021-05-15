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
  max-width: 34em;
  min-width: 20em;
  min-height: 16em;
  margin-top: 14%;
  margin-left: 48%;

  background-color: #ffff;

  border-radius: 25px;

  transform: translate(-50%, -50%);

  div {
    max-width: 36em;
    min-width: 33.9em;

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
  }

  textarea {
    max-width: 32em;
    min-width: 24em;
    min-height: 8em;
    margin-left: 86px;

    border: none;
  }

  img {
    width: 52px;
    height: 52px;
    margin-top: 18px;
    margin-left: 16px;
    margin-bottom: -50px;

    border-radius: 50%;
  }

  button {
    width: 80px;
    margin-left: 34em;
    margin-bottom: 10px;
  }
`;
