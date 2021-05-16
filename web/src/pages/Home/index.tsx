import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FiX, FiUser } from 'react-icons/fi';

import CREATE_TWEET_MUTATION from '../../schemas/Mutations/CreateTweet';
import ME_QUERY from '../../schemas/Queries/Me';

import SideBar from '../../components/SideBar';
import Button from '../../components/Button';

import { Container, Tweet, Tweets } from './styles';

interface TweetValues {
  content: string;
}

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(ME_QUERY);

  const [createTweet] = useMutation(CREATE_TWEET_MUTATION, {
    variables: {
      content: '',
    },
    refetchQueries: [{ query: ME_QUERY }],
  });

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const initialValues: TweetValues = {
    content: '',
  };

  const validationSchema = Yup.object({
    content: Yup.string()
      .required()
      .min(1, 'Must be more than 1 character')
      .max(256, 'Must be less 257 characters'),
  });

  return (
    <Container>
      <SideBar />

      <Home>
        <Tweet>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true);

              await createTweet({
                variables: values,
              });

              setSubmitting(false);
            }}
          >
            <Form>
              {data.me.profile[0].avatar ? (
                <img
                  src={data.me.profile[0].avatar}
                  alt={`${data.me.profile[0].name}' avatar`}
                />
              ) : (
                <FiUser size="64" color="#1a91da" />
              )}

              <Field
                name="content"
                type="text"
                as="textarea"
                placeholder="O que está acontecendo?"
              />
              <ErrorMessage name="name" component="div" />

              <Button>
                <span>Tweet</span>
              </Button>
            </Form>
          </Formik>
        </Tweet>

        <Tweets>
          {data.me.profile.avatar ? (
            <img
              src={data.me.profile[0].avatar}
              alt={`${data.me.profile[0].name}' avatar`}
            />
          ) : (
            <FiUser size="64" color="#1a91da" />
          )}

          <p>{data.me.tweets}</p>
        </Tweets>
      </Home>
    </Container>
  );
};

export default Home;
