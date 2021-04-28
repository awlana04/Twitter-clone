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
  }
`;

export const ForgotPassword = styled.button`
  margin-top: 30px;
  margin-left: 34px;
  margin-right: 5px;
`;

export const Register = styled.button``;
