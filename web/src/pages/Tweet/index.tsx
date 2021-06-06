import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { formatDistance, subDays } from 'date-fns';
import { FiUser } from 'react-icons/fi';

import TWEET_QUERY from '../../schemas/Queries/Tweet';
import ME_QUERY from '../../schemas/Queries/Me';

import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import Reply from '../../components/Reply';
import DeleteLike from '../../components/DeleteLike';
import LikeTweet from '../../components/LikeTweet';
import Aside from '../../components/Aside';

import {
  Container,
  TweetContent,
  TweetInfo,
  Content,
  TweetAnalytics,
  Interactions,
  Like,
  Liked,
  NoLiked,
  Replies,
  ReplyInfo,
  ReplyContent,
} from './styles';

interface ParamType {
  id: string;
}

interface ReplyType {
  id: string;
  content: string;
  likes: [];
  replies: [];
  createdAt: number;
  user: {
    profile: Array<{
      avatar: string;
      name: string;
    }>;
  };
}

interface ReplyProps {
  id: string;
  tweet: {
    id: string;
  };
}

const Tweet: React.FC = () => {
  const { id } = useParams<ParamType>();

  const { loading, error, data } = useQuery(TWEET_QUERY, {
    variables: {
      id,
    },
  });

  const { loading: meLoading, error: meError, data: meData } = useQuery(
    ME_QUERY,
  );

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (meLoading) {
    return <p>Loading...</p>;
  }

  if (meError) {
    return <p>{meError.message}</p>;
  }

  return (
    <Container>
      <SideBar />

      <Header>
        <span>Tweet</span>
      </Header>

      <TweetContent>
        <TweetInfo>
          {data.tweet.author.profile[0].avatar ? (
            <img
              src={data.tweet.author.profile[0].avatar}
              alt={`${data.tweet.author.profile[0].name}'s avatar`}
            />
          ) : (
            <FiUser size="64" color="#1a91da" />
          )}

          <h5>{data.tweet.author.profile[0].name}</h5>
        </TweetInfo>

        <Content>
          <p>{data.tweet.content}</p>
        </Content>

        <TweetAnalytics>
          <span>
            <strong>{data.tweet.replies.length}</strong> Tweets com comentários
          </span>

          <span>
            <strong>{data.tweet.likes.length}</strong> Curtidas
          </span>
        </TweetAnalytics>

        <Interactions>
          <Reply
            id={data.tweet.id}
            avatar={data.tweet.author.profile[0].avatar}
            name={data.tweet.author.profile[0].name}
            createdAt={data.tweet.createdAt}
            tweet={data.tweet.content}
          />

          <Like>
            {meData.me.likedTweets
              .map((r: ReplyProps) => r.tweet.id)
              .includes(data.tweet.id) ? (
              <Liked>
                <DeleteLike
                  id={
                    meData.me.likedTweets.filter(
                      (like: ReplyProps) => like.tweet.id === data.tweet.id,
                    )[0].id
                  }
                />
              </Liked>
            ) : (
              <NoLiked>
                <LikeTweet id={data.tweet.id} />
              </NoLiked>
            )}
          </Like>
        </Interactions>

        <Replies>
          {data.tweet.replies.map((reply: ReplyType) => (
            <>
              <ReplyInfo>
                {reply.user.profile[0].avatar ? (
                  <img
                    src={data.tweet.author.profile[0].avatar}
                    alt={`${data.tweet.author.profile[0].name}'s avatar`}
                  />
                ) : (
                  <FiUser size="64" color="#1a91da" />
                )}

                <h5>{reply.user.profile[0].name}</h5>

                {/* <span>
                  {formatDistance(
                    subDays(new Date(reply.createdAt), 0),
                    new Date(),
                  )}{' '}
                  ago
                </span> */}
              </ReplyInfo>

              <ReplyContent>
                <p>{reply.content}</p>
              </ReplyContent>
            </>
          ))}
        </Replies>
      </TweetContent>

      <Aside />
    </Container>
  );
};

export default Tweet;
