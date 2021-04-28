import styled from 'styled-components';

export const Container = styled.div`
  width: 50vw;
  margin: 2em 31rem;

  img {
    width: 50px;

    display: block;
  }

  h3 {
    margin-top: 30px;
    margin-bottom: 30px;

    color: black;

    font-size: 36px;
    font-weight: bolder;
  }

  form {
    display: grid;
    grid-template-columns: 0.5fr;

    input {
      margin-bottom: 24px;
      padding: 18px 18px;

      border: 1px solid rgb(0, 0, 0, 0.3);
      border-radius: 5px;

      font-size: 16px;
      font-weight: 400;
    }

    button {
      width: 100%;
      padding-top: 8px;
      padding-bottom: 8px;

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

      &:active span {
        background-color: rgba(0, 0, 0, 0.2);
      }

      & span:focus {
        outline: 0;
      }
    }
  }
`;

export const Links = styled.div`
  margin-left: 20px;

  button {
    margin-top: 30px;

    border: none;
    transition: 0.4s;

    h4 {
      color: #1b95e0;

      font-size: 14px;
      font-weight: 400;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const ForgotPassword = styled.button``;

export const Register = styled.button`
  margin-left: 5px;
`;
