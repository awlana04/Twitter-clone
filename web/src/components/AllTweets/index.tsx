import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { formatDistance, subDays } from 'date-fns';

import TWEETS_QUERY from '../../schemas/Queries/Tweets';
import ME_QUERY from '../../schemas/Queries/Me';

import Avatar from '../Avatar';
import Reply from '../Comment';
import LikeTweet from '../LikeTweet';
import DeleteLike from '../DeleteLike';

import {
  Container,
  Tweet,
  TweetInfo,
  Content,
  Interactions,
  Like,
  Liked,
  NoLiked,
} from './styles';

interface TweetsInterface {
  id: string;
  content: string;
  likes: [];
  replies: [];
  createdAt: number;
  author: {
    profile: Array<{
      name: string;
      avatar: string;
    }>;
  };
}

interface TweetProps {
  id: string;
  tweet: {
    id: string;
  };
}

const AllTweets: React.FC = () => {
  const { loading, error, data } = useQuery(TWEETS_QUERY);
  const { loading: meLoading, error: meError, data: meData } = useQuery(
    ME_QUERY,
  );

  if (loading) {
    return <p>Loading...</p>;
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
      {data.tweets.map((tweet: TweetsInterface) => (
        <Tweet key={tweet.id}>
          <Link
            to={`/tweet/${tweet.id}`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <TweetInfo>
              <Avatar />

              <h6>{tweet.author.profile[0].name}</h6>
              <span>
                {formatDistance(
                  subDays(new Date(tweet.createdAt), 0),
                  new Date(),
                )}{' '}
                ago
              </span>
            </TweetInfo>

            <Content>
              <p>{tweet.content}</p>
            </Content>
          </Link>

          <Interactions>
            <Reply
              id={tweet.id}
              avatar={tweet.author.profile[0].avatar}
              name={tweet.author.profile[0].name}
              createdAt={tweet.createdAt}
              tweet={tweet.content}
            >
              {tweet.replies.length > 0 ? tweet.replies.length : null}
            </Reply>

            <Like>
              {meData.me.likedTweets
                .map((t: TweetProps) => t.tweet.id)
                .includes(tweet.id) ? (
                <Liked>
                  <DeleteLike
                    id={
                      meData.me.likedTweets.filter(
                        (like: TweetProps) => like.tweet.id === tweet.id,
                      )[0].id
                    }
                  />

                  <p>{tweet.likes.length > 0 ? tweet.likes.length : null}</p>
                </Liked>
              ) : (
                <NoLiked>
                  <LikeTweet id={tweet.id} />

                  <p>{tweet.likes.length > 0 ? tweet.likes.length : null}</p>
                </NoLiked>
              )}
            </Like>
          </Interactions>
        </Tweet>
      ))}
    </Container>
  );
};

export default AllTweets;
