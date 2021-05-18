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

export const ButtonClose = styled.div`
  max-width: 30em;
  min-width: 34em;
  height: 20px;

  border-bottom: 1.5px solid rgb(0, 0, 0, 0.4);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  button {
    width: 36px;
    height: 36px;
    margin-top: -18px;
    margin-left: 8px;

    background-color: #ffffff;

    border-radius: 50%;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    &:hover {
      background-color: rgba(29, 161, 242, 0.1);
    }

    svg {
      margin: 8px;
      margin-top: 4px;
    }
  }
`;

export const Title = styled.div`
  h5 {
    margin-top: -32px;
    margin-left: -208px;

    font-size: 18px;
    letter-spacing: 1px;
  }
`;
