import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    border: none;
  }

  form {
    display: grid;
    grid-template-columns: 0.5fr;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  button, a {
    cursor: pointer;
  }
`;
