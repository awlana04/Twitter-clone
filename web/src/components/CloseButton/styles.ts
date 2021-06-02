import styled from 'styled-components';

export const Container = styled.div`
  max-width: 38em;
  min-width: 36em;

  border-bottom: 1.5px solid rgb(0, 0, 0, 0.4);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  button {
    width: 36px;
    height: 36px;
    margin: 8px 8px;

    background-color: #ffffff;

    border-radius: 50%;

    &:hover {
      background-color: rgba(29, 161, 242, 0.1);
    }

    svg {
      margin: 7px;
    }
  }
`;
