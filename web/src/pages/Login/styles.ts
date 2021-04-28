import styled from 'styled-components';

export const Container = styled.div`
  width: 50vw;
  margin: 5em auto;

  background-color: #fff;

  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

  img {
    width: 50px;

    display: block;
  }

  h3 {
    font-size: 30px;
    font-weight: bold;

    text-align: center;
  }

  form {
    display: grid;
    grid-template-columns: 1fr;
  }

  input {
    margin-bottom: 27px;
    padding: 10px 20px;

    border: none;
    border: 2px solid rgb(0, 0, 0, 0.2);
    border-radius: 20px;

    color: rgb(38, 50, 56);

    font-size: 16px;
    font-weight: 600;

    text-align: center;
    letter-spacing: 1px;

    outline: none;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;

    cursor: pointer;

    outline: none;
  }

  button,
  button span {
    border-radius: 25px;
  }

  button {
    border: 0;
    background-color: #55abee;

    color: #fff;

    font-weight: bold;
  }

  button span {
    padding: 0.4em 0.2em;

    font-size: 15px;

    display: block;
    transition: all 0.1s linear;
  }

  button:hover {
    background: #228dcf;
  }

  button:active span {
    background-color: rgba(0, 0, 0, 0.2);
  }

  button span:focus {
    outline: 0;
  }

  button:disabled {
    opacity: 0.5;
  }
`;

export const Register = styled.button``;
