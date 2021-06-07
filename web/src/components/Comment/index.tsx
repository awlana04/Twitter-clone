import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FiMessageCircle, FiUser, FiX } from 'react-icons/fi';

import { formatDistance, subDays } from 'date-fns';
import ME_QUERY from '../../schemas/Queries/Me';
import CREATE_COMMENT_MUTATION from '../../schemas/Mutations/Comment';
import TWEET_QUERY from '../../schemas/Queries/Tweet';

import Button from '../Button';
import ButtonClose from '../CloseButton';

import {
  Container,
  StyledModal,
  ReplyUser,
  ReplyInfo,
  Avatar,
  ReplyLine,
  UserAvatar,
} from './styles';

interface CommentProps {
  content: string;
}

interface Props {
  id: string;
  avatar: string;
  name: string;
  createdAt: number;
  tweet: string;
}

const Comment: React.FC<Props> = ({
  id,
  avatar,
  name,
  createdAt,
  tweet,
}: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { loading, error, data } = useQuery(ME_QUERY);

  const [comment] = useMutation(CREATE_COMMENT_MUTATION, {
    variables: {
      id: '',
      content: '',
    },
    refetchQueries: [{ query: ME_QUERY }, { query: TWEET_QUERY }],
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const initialValues: CommentProps = {
    content: '',
  };

  const validationSchema = Yup.object({
    content: Yup.string()
      .required()
      .min(1, 'Must be more than one character')
      .max(256, 'Must be less than 257 characters'),
  });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Container>
      <button type="button" onClick={openModal}>
        <span>
          <FiMessageCircle size="22" />
        </span>
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

            await comment({
              variables: { ...values, id },
            });

            setSubmitting(false);
            setModalIsOpen(false);
          }}
        >
          <Form>
            <ButtonClose closeModal={closeModal} />

            <ReplyUser>
              <ReplyInfo>
                <Avatar>
                  {avatar ? (
                    <img src={avatar} alt={`${name}' avatar`} />
                  ) : (
                    <FiUser size="64" color="#1a91da" />
                  )}
                </Avatar>

                <h5>{name}</h5>

                <span>
                  {formatDistance(subDays(new Date(createdAt), 0), new Date())}{' '}
                  ago
                </span>
              </ReplyInfo>

              <ReplyLine>
                <p>{tweet}</p>
                <h6>Respondendo a {name}</h6>
              </ReplyLine>
            </ReplyUser>

            <UserAvatar>
              {avatar ? (
                <img
                  src={data.me.profile[0].avatar}
                  alt={`${data.me.profile[0].name}' avatar`}
                />
              ) : (
                <FiUser size="64" color="#1a91da" />
              )}
            </UserAvatar>

            <Field
              type="text"
              as="textarea"
              name="content"
              placeholder="Tweete sua resposta"
            />
            <ErrorMessage name="content" component="div" />

            <Button>
              <span>Responder</span>
            </Button>
          </Form>
        </Formik>
      </StyledModal>
    </Container>
  );
};

export default Comment;
