import styled from 'styled-components';

export const Container = styled.div``;

export const TweetContent = styled.div`
  width: 544px;
  margin-bottom: 26px;

  display: grid;
  align-items: center;
  justify-items: end;
  justify-content: center;
`;

export const TweetInfo = styled.div`
  margin-top: 68px;

  display: flex;
  flex-direction: row;

  img,
  svg {
    width: 56px;
    height: 56px;
    margin-left: -186px;

    border-radius: 50%;
  }

  h5 {
    margin-top: 16px;
    margin-left: 12px;

    font-size: 16px;
    font-weight: 600;
  }
`;

export const Content = styled.div`
  p {
    width: 544px;
    margin-top: 4px;

    margin-left: -184px;

    font-size: 20px;

    position: absolute;
  }
`;

export const TweetAnalytics = styled.div`
  margin-top: 192px;
  margin-left: 360px;

  position: absolute;
  display: grid;
  grid-template-columns: 3fr 3fr 6fr;

  span {
    margin-right: 26px;

    color: #5b7083;
    font-size: 15px;

    strong {
      color: #000000;
    }
  }
`;

export const Interactions = styled.div`
  margin-top: 84px;
  margin-bottom: 28px;

  display: flex;
  flex-direction: row;

  button {
    margin-top: 12px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    transition: 0.4s;

    &:hover {
      cursor: pointer;
    }

    span {
      width: 34px;
      height: 34px;

      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      margin-top: 2px;
      color: #607486;
    }
  }
`;

export const Like = styled.div`
  button {
    &:hover {
      span {
        background-color: rgba(224, 36, 94, 0.1);
      }

      svg,
      p {
        color: #e0245e;
      }
    }
  }
`;

export const Liked = styled.div`
  display: flex;
  flex-direction: row;

  p {
    color: #e0245e;
    margin-top: 22px;
  }
`;

export const NoLiked = styled.div`
  display: flex;
  flex-direction: row;

  p {
    margin-top: 22px;
  }
`;

export const Replies = styled.div`
  width: 544px;
  margin-bottom: 26px;

  display: grid;
  align-items: center;
  justify-items: end;
  justify-content: center;
`;

export const ReplyInfo = styled.div`
  /* margin-left: 338px; */

  display: flex;
  flex-direction: row;

  img,
  svg {
    width: 62px;
    height: 62px;
    margin-left: 512px;

    border-radius: 50%;
  }

  h5 {
    width: 112px;
    margin-top: 16px;
    margin-left: 12px;

    font-size: 16px;
    font-weight: 600;
  }

  span {
    width: 152px;
    margin-top: 18px;
    margin-left: 4px;

    color: #607486;
    font-size: 14px;
  }
`;

export const ReplyContent = styled.div`
  p {
    width: 544px;
    margin-top: 8px;

    margin-left: -334px;

    font-size: 16px;

    position: absolute;
  }
`;
