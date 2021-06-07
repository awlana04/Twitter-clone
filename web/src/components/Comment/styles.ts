import styled from 'styled-components';
import Modal from 'react-modal';

export const Container = styled.div`
  span {
    width: 36px;
    height: 36px;

    margin-left: 62px;
    margin-right: 78px;
    margin-bottom: -34px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: rgba(26, 161, 242, 0.2);
    }
  }
`;

export const StyledModal = styled(Modal)`
  max-width: 36em;
  min-width: 24em;
  min-height: 16em;
  margin-top: 17%;
  margin-left: 50%;

  background-color: #ffff;

  border-radius: 25px;

  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  textarea {
    max-width: 38em;
    min-width: 28em;
    min-height: 8em;
    margin-left: 86px;

    border: none;
  }

  button {
    width: 118px;
    margin-left: 33em;
    margin-bottom: 10px;
  }
`;

export const ReplyUser = styled.div``;

export const ReplyInfo = styled.div`
  display: flex;
  flex-direction: row;

  h5 {
    margin-top: 46px;
    margin-left: 26px;
    margin-right: 16px;

    font-size: 16px;
  }

  span {
    margin-top: 48px;

    color: #607486;
    font-size: 14px;
  }
`;

export const Avatar = styled.div`
  width: 52px;
  height: 52px;
  margin-top: 22px;
  margin-left: 16px;
  margin-bottom: -50px;

  border-radius: 50%;
`;

export const ReplyLine = styled.div`
  margin-top: 14px;
  margin-left: 48px;
  padding-top: -2px;
  padding-left: 48px;

  border-left: 2px solid rgba(96, 116, 134, 0.4);

  h6 {
    margin-top: 12px;

    color: #607486;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const UserAvatar = styled.div`
  width: 52px;
  height: 52px;
  margin-left: 16px;
  margin-bottom: -50px;

  border-radius: 50%;
`;
