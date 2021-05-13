import styled from 'styled-components';

export const Container = styled.div`
  h3 {
    font-size: 22px;
  }
`;

export const ProfileContent = styled.div`
  margin-top: -340px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileInfo = styled.div``;

export const ProfileHeader = styled.div`
  margin-top: 36px;

  span {
    margin-left: 22px;

    font-size: 22px;
    font-weight: 600;
  }
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 126px;
  margin-left: 24px;

  border-radius: 50%;
`;

export const MakeProfile = styled.div`
  width: 600px;
  margin-top: -26px;
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
