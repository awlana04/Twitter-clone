import styled from 'styled-components';

export const Container = styled.div`
  h3 {
    font-size: 22px;
  }

  aside {
    margin-top: 296px;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileInfo = styled.div``;

export const ProfileHeader = styled.div`
  margin-top: 16px;

  display: flex;
  flex-direction: row;

  button {
    width: 36px;
    height: 36px;

    background-color: #ffffff;

    border-radius: 50%;

    &:hover {
      background-color: rgba(29, 161, 242, 0.1);
    }

    svg {
      margin: 7px;
    }
  }

  span {
    margin-top: 6px;
    margin-left: 22px;

    font-size: 22px;
    font-weight: 600;
  }
`;

export const Avatar = styled.div`
  img,
  svg {
    width: 156px;
    height: 156px;
    margin-top: 116px;

    border: 2px solid #ffffff;
    border-radius: 50%;
  }
`;

export const MakeProfile = styled.div`
  width: 544px;
  margin-top: -66px;
  margin-bottom: 26px;

  display: grid;
  justify-items: end;
`;

export const ProfileWebsite = styled.div`
  margin-top: 22px;
  margin-bottom: 15px;

  display: flex;
  flex-direction: row;

  svg {
    margin-right: 5px;
  }

  a {
    margin-top: 2px;

    color: #1da1f2;
    font-size: 15px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Followers = styled.div`
  margin-right: 200px;

  font-size: 14px;

  display: grid;
  grid-template-columns: 3fr 3fr 6fr;

  strong {
    font-weight: 800;
  }

  span {
    margin-left: 6px;
    color: #5b7083;
  }
`;
