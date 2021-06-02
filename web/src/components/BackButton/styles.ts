import styled from 'styled-components';

export const Container = styled.div`
  button {
    width: 36px;
    height: 36px;

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
