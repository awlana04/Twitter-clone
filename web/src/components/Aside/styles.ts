import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 18px;

  position: absolute;

  top: 0;
  right: 0;

  h3 {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const Tweets = styled.div`
  margin-top: 18px;

  p {
    width: 288px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  span {
    font-weight: 500;
  }

  p,
  span {
    margin-left: 6px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  img,
  svg {
    width: 38px;
    height: 38px;

    border-radius: 50%;
  }

  h5 {
    margin: 8px;

    font-size: 16px;
    font-weight: 500;
  }
`;

export const Likes = styled.div`
  margin-left: 6px;

  display: flex;
  flex-direction: row;

  svg {
    margin-top: 9px;
    margin-right: 6px;
  }

  p {
    margin-bottom: -2px;
  }
`;
