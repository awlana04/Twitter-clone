import { useQuery } from '@apollo/client';
import { format } from 'date-fns';
import React from 'react';
import { FiUser, FiHeart } from 'react-icons/fi';

import POPULAR_TWEETS_QUERY from '../../schemas/Queries/PopularTweets';

import { Container, Tweets, ProfileInfo, Likes } from './styles';

interface PopularTweetsInterface {
  id: string;
  content: string;
  createdAt: number;
  likes: {
    id: string;
    length: number;
  };
  author: {
    profile: Array<{
      avatar: string;
      name: string;
    }>;
  };
}

const Aside: React.FC = () => {
  const { loading, error, data } = useQuery(POPULAR_TWEETS_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const getPopularTweets = data.tweets
    .map((tweet: PopularTweetsInterface) => tweet)
    .sort(function (a: PopularTweetsInterface, b: PopularTweetsInterface) {
      return b.likes.length - a.likes.length;
    })
    .slice(0, 6);

  return (
    <Container>
      <h3>Tweets para ver</h3>

      {getPopularTweets.map((tweet: PopularTweetsInterface) => (
        <Tweets key={tweet.id}>
          <ProfileInfo>
            {tweet.author.profile[0].avatar ? (
              <img
                src={tweet.author.profile[0].avatar}
                alt={`${tweet.author.profile[0].name}'s avatar`}
              />
            ) : (
              <FiUser size="64" color="#1a91da" />
            )}

            <h5>{tweet.author.profile[0].name}</h5>
          </ProfileInfo>

          <p>{tweet.content}</p>

          <span>{format(new Date(tweet.createdAt), 'MM/dd/yyyy')}</span>

          <Likes>
            <FiHeart size="18" />

            <p>{tweet.likes.length}</p>
          </Likes>
        </Tweets>
      ))}
    </Container>
  );
};

export default Aside;
