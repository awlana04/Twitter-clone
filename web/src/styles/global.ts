import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    border: none;

    font-family: 'Roboto', sans-serif;
  }

  form {
    display: grid;
    grid-template-columns: 0.5fr;
  }

  input, textarea {
    margin-bottom: 24px;
    padding: 18px 18px;

    border: 1px solid rgb(0, 0, 0, 0.3);
    border-radius: 5px;

    font-size: 16px;
    font-weight: 400;
  }

  textarea {
    height: 125px;
  }

  button, a {
    cursor: pointer;
  }
`;
