import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  padding-top: 2px;
  padding-bottom: 2px;

  background-color: #1da1f2;

  border: 0;
  border-radius: 25px;

  color: #fff;
  font-weight: bold;

  transition: 0.4s;

  &:hover {
    background: #1a91da;
  }

  &:disabled {
    opacity: 0.5;
  }

  span {
    padding: 0.4em 0.2em;

    font-size: 15px;

    display: block;
  }
`;
