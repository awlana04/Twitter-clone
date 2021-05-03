import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 26px;
  margin-left: 48px;

  img {
    width: 34px;
    margin-bottom: 32px;

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

  h2:hover {
    color: #1da1f2;
  }
`;

export const Home = styled.div``;

export const Profile = styled.div``;

export const Messages = styled.div``;

export const Notifications = styled.div``;

export const More = styled.div`
  p {
    width: 26px;
    height: 26px;

    border: 2px solid #000000;

    border-radius: 50px;

    &:hover {
      border: 2px solid #1da1f2;
    }
  }
`;
