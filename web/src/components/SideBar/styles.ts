import styled from 'styled-components';
import Modal from 'react-modal';

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

export const MoreOptions = styled.button`
  width: 238px;
  height: 68px;
  margin-top: 32px;

  background-color: #ffffff;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }

  svg {
    margin-left: 200px;
  }
`;

export const StyledModal = styled(Modal)`
  width: 338px;
  height: 122px;
  margin-left: 186px;
  margin-top: -76px;

  background-color: #ffff;

  border-top: 2px solid rgb(0, 0, 0, 0.1);
  border-bottom: 2px solid rgb(0, 0, 0, 0.1);

  cursor: pointer;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: row;
  justify-content: center;

  transition: 0.4s;

  img,
  span {
    margin-top: -22px;
    margin-left: 108px;
  }
`;

export const Content = styled.div`
  margin-top: 28px;
`;

export const Avatar = styled.div`
  img,
  svg {
    width: 48px;
    height: 48px;
    margin-left: -4px;
    margin-bottom: -32px;

    border-radius: 50%;
  }

  svg {
    margin-left: -164px;
  }
`;

export const Name = styled.div`
  margin-bottom: -20px;

  h5 {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Logout = styled.div`
  margin-top: 52px;
  margin-left: -10px;
  margin-bottom: 28px;

  font-size: 16px;
`;
