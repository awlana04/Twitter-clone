import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;

  background: #1a91da;
  color: white;
  font-weight: bold;
  text-decoration: none;

  transition: 0.4s;

  &:disabled {
    opacity: 0.5;
  }

  span {
    padding: 0.4em 0.2em;

    font-size: 15px;

    display: block;
  }
`;
