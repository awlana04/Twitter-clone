import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import CREATE_TWEET_MUTATION from '../../schemas/Mutations/CreateTweet';
import ME_QUERY from '../../schemas/Queries/Me';
import TWEETS_QUERY from '../../schemas/Queries/Tweets';

import Button from '../Button';
import CloseButton from '../CloseButton';
import Avatar from '../Avatar';

import { Container, StyledModal, Close } from './styles';

interface TweetValues {
  content: string;
}

const Tweet: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const { loading, error, data } = useQuery(ME_QUERY);

  const [createTweet] = useMutation(CREATE_TWEET_MUTATION, {
    variables: {
      content: '',
    },
    refetchQueries: [{ query: TWEETS_QUERY }],
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
      <button type="button" onClick={openModal}>
        <h3>Tweet</h3>
      </button>

      <StyledModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        ariaHideApp={false}
        style={{
          overlay: {
            background: '#9e9e9e69',
          },
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);

            await createTweet({
              variables: values,
            });

            setSubmitting(false);
            setModalIsOpen(false);
          }}
        >
          <Form>
            <Close>
              <CloseButton closeModal={closeModal} />
            </Close>

            <Avatar />

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
      </StyledModal>
    </Container>
  );
};

export default Tweet;
