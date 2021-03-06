import styled from 'styled-components';

export const Container = styled.div``;

export const HomePage = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  h3 {
    margin-top: 22px;

    font-size: 20px;
    font-weight: 700;
  }
`;

export const Tweet = styled.div`
  margin-top: 12px;

  textarea {
    max-width: 30em;
    min-width: 26em;
    height: 56px;
    margin-left: 56px;

    border: none;
  }

  img,
  svg {
    width: 52px;
    height: 52px;
    margin-top: 18px;
    margin-bottom: -50px;

    border-radius: 50%;
  }

  button {
    width: 80px;
    margin-left: 34em;
    margin-bottom: 10px;
  }
`;
