import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  margin-left: 356px;

  display: flex;
  flex-direction: row;

  button {
    width: 36px;
    height: 36px;
    margin-right: 16px;

    background-color: #ffffff;

    border-radius: 50%;

    &:hover {
      background-color: rgba(29, 161, 242, 0.1);
    }

    svg {
      margin: 7px;
    }
  }

  span {
    margin-top: 8px;

    font-size: 18px;
    font-weight: 700;
  }
`;
