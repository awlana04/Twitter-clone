import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FiX, FiUser } from 'react-icons/fi';

import CREATE_TWEET_MUTATION from '../../schemas/Mutations/CreateTweet';
import ME_QUERY from '../../schemas/Queries/Me';

import Button from '../Button';

import { Container, StyledModal, ButtonClose, Avatar } from './styles';

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
            <ButtonClose>
              <button type="button" onClick={closeModal}>
                <h5>
                  <FiX size="24" color="#1da1f2" />
                </h5>
              </button>
            </ButtonClose>

            <Avatar>
              {data.me.profile[0].avatar ? (
                <img
                  src={data.me.profile[0].avatar}
                  alt={`${data.me.profile[0].name}' avatar`}
                />
              ) : (
                <FiUser size="64" color="#1a91da" />
              )}
            </Avatar>

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
