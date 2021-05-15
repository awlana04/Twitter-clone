import styled from 'styled-components';
import Modal from 'react-modal';

export const Container = styled.div`
  button {
    width: 122px;
    height: 42px;

    border: 1px solid #1da1f2;
    border-radius: 25px;

    color: #1da1f2;
    font-size: 14px;
    font-weight: 500;

    letter-spacing: 0.7px;

    transition: 0.4s;

    &:hover {
      background-color: rgba(29, 161, 242, 0.1);
    }
  }
`;

export const StyledModal = styled(Modal)`
  max-width: 34em;
  min-width: 20em;
  min-height: 34em;
  margin-top: 22%;
  margin-left: 48%;

  background-color: #ffff;

  border-radius: 16px;

  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    max-width: 36em;
    min-width: 33.9em;
    margin-top: -8px;

    background-color: #ffffff;
    border-top-right-radius: 50%;
    /* border-top-right-radius: 50%; */
    border-bottom: 1.5px solid rgb(0, 0, 0, 0.4);

    button {
      margin-bottom: 16px;
    }

    h5 {
      width: 36px;
      height: 36px;
      margin-left: 8px;
      margin-bottom: -28px;

      border-radius: 50%;

      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      &:hover {
        cursor: pointer;

        background-color: rgba(29, 161, 242, 0.1);
      }

      svg {
        margin: 7px;
      }
    }

    span {
      margin-left: 68px;

      font-size: 18px;
      font-weight: 600;

      letter-spacing: 1px;
    }
  }

  img {
    width: 25px;
    height: 25px;
  }

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
