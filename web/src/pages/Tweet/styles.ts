import styled from 'styled-components';

export const Container = styled.div``;

export const TweetContent = styled.div`
  width: 544px;
  margin-top: 18px;
  margin-bottom: 26px;

  display: grid;
  align-items: center;
  justify-items: end;
  justify-content: center;
`;

export const TweetInfo = styled.div`
  display: flex;
  flex-direction: row;

  img,
  svg {
    width: 56px;
    height: 56px;

    border-radius: 50%;
  }

  h5 {
    margin-top: 14px;
    margin-left: 8px;

    font-size: 18px;
    font-weight: 600;
  }
`;

export const Content = styled.div`
  p {
    margin-top: 16px;
    margin-left: -168px;

    font-size: 20px;
  }
`;

export const TweetAnalytics = styled.div`
  margin-top: 22px;
  margin-left: 362px;

  span {
    margin-right: 26px;

    color: #5b7083;
    font-size: 15px;

    strong {
      color: #000000;
    }
  }
`;
