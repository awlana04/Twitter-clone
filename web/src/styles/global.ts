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

  input {
    margin-bottom: 24px;
    padding: 18px 18px;

    border: 1px solid rgb(0, 0, 0, 0.3);
    border-radius: 5px;

    font-size: 16px;
    font-weight: 400;
  }

  button, a {
    cursor: pointer;
  }

  textarea {
    margin-bottom: 27px;
    padding: 10px 20px;

    border: 2px solid lightgray;
    border-radius: 5px;

    color: rgb(38, 50, 56);
    font-size: 16px;
    font-weight: 600;

    letter-spacing: 1px;
  }

  textarea:focus {
    border-color: #1a91da;
    box-shadow: 0 0 3px #1a91da;
  }
`;
