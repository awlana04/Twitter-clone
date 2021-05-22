import styled from 'styled-components';

export const Container = styled.div``;

export const Tweet = styled.div``;

export const TweetInfo = styled.div`
  display: flex;
  flex-direction: row;

  img,
  svg {
    width: 52px;
    height: 52px;
    margin-top: 18px;
    margin-bottom: -50px;
    margin-right: 12px;

    border-radius: 50%;
  }

  h6 {
    margin-top: 24px;
    margin-right: 14px;

    font-size: 16px;
  }

  span {
    margin-top: 25px;

    color: #607486;
    font-size: 14px;
  }
`;

export const Content = styled.div`
  p {
    margin-top: 12px;
    margin-left: 66px;

    font-size: 15px;
  }
`;

export const Interactions = styled.div``;
