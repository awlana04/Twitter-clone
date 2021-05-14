import styled from 'styled-components';

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

// export const TweetButton = styled.button`
//   width: 244px;
//   height: 50px;
//   margin-left: -15px;

//   background: #1da1f2;
//   border-radius: 25px;

//   transition: 0.4s;

//   &:hover {
//     background: #1a91da;
//   }

//   h3 {
//     color: #ffffff;
//     font-size: 16px;
//   }
// `;
