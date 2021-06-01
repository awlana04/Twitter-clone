import styled from 'styled-components';

export const Container = styled.div`
  p {
    margin-left: 14px;
    margin-top: 6px;

    font-size: 14px;
  }
`;

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
    width: 468px;
    margin-top: 12px;
    margin-left: 66px;

    font-size: 15px;
  }
`;

export const Interactions = styled.div`
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
