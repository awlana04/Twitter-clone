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

export const Interactions = styled.div`
  button {
    width: 34px;
    height: 34px;
    margin-top: 12px;
    margin-left: 286px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.4s;

    &:hover {
      cursor: pointer;
      background-color: rgba(224, 36, 94, 0.1);

      svg,
      p {
        color: #e0245e;
      }
    }

    span {
      display: flex;
      flex-direction: row;

      svg {
        margin-top: 5px;
        color: #607486;
      }

      p {
        margin-left: 14px;
        margin-top: 7px;

        font-size: 14px;
      }
    }
  }
`;

export const Like = styled.div``;
