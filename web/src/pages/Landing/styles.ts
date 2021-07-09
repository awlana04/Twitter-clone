import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  h3 {
    margin-top: 46px;
    margin-bottom: 46px;

    font-size: 68px;
  }

  h4 {
    margin-bottom: 26px;

    font-size: 32px;
    font-weight: 800;
  }

  button {
    width: 386px;
    height: 46px;
    margin-bottom: 20px;

    border-radius: 25px;
  }

  p {
    position: absolute;
    bottom: 16px;
    margin-left: 128px;

    color: #5b7071;
    font-size: 14px;
  }
`;

export const LeftContainer = styled.div`
  width: 44%;
  height: 100vh;

  background-color: #1da1f2;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    margin-left: 46px;
    margin-bottom: 42px;

    color: white;

    font-size: 20px;
    font-weight: bold;

    svg {
      margin-right: 18px;
    }
  }
`;

export const RightContainer = styled.div`
  margin-top: 256px;
  margin-left: 36px;
`;

export const Buttons = styled.div``;

export const Register = styled.button`
  background-color: #1da1f2;
  color: #fff;

  &:hover {
    background: #1a91da;
  }
`;

export const Login = styled.button`
  background-color: white;
  color: #1a91da;
  border: 1px solid #1a91da;

  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }

  span {
    color: #1a91da;
  }
`;
