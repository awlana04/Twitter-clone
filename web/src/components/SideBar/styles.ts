import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 22px;
  margin-left: 68px;

  font-size: 14px;

  img {
    width: 28px;
    margin-bottom: 28px;

    display: block;
  }

  a {
    color: black;
    text-decoration: none;
  }

  h2 {
    margin-bottom: 24px;

    span {
      margin-left: 20px;
    }
  }
`;

export const Logo = styled.div``;

export const Navigation = styled.div`
  transition: 0.4s;

  h2 {
    width: 200px;
    height: 25px;

    display: flex;
    flex-direction: row;

    &:hover {
      color: #1da1f2;
    }

    span {
      margin-top: 2px;
    }
  }
`;

export const Home = styled.div``;

export const Profile = styled.div``;

export const Messages = styled.div``;

export const Notifications = styled.div``;

export const More = styled.div``;

export const MoreOptions = styled.div`
  width: 200px;
  height: 64px;
  margin-top: 44px;

  background-color: #ffffff;

  cursor: pointer;

  &:hover {
    background-color: rgba(29, 161, 242, 0.5);
  }

  svg {
    margin-left: 200px;
  }
`;

export const Avatar = styled.div`
  img {
    width: 48px;
    height: 48px;
    margin-bottom: -32px;

    border-radius: 50%;
  }
`;

export const Name = styled.div`
  margin-left: 58px;
  margin-bottom: -20px;

  h5 {
    font-size: 16px;
    font-weight: 500;
  }
`;
