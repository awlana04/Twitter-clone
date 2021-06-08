import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { formatDistance, subDays } from 'date-fns';
import * as Yup from 'yup';
import { FiMessageCircle, FiUser, FiX } from 'react-icons/fi';

import ME_QUERY from '../../schemas/Queries/Me';
import CREATE_REPLY_MUTATION from '../../schemas/Mutations/Reply';
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

interface ReplyProps {
  content: string;
}

interface Props {
  id: string;
  avatar: string;
  name: string;
  createdAt: number;
  reply: string;
  replyId: string;
}

const Reply: React.FC<Props> = ({
  id,
  avatar,
  name,
  createdAt,
  reply,
  replyId,
}: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { loading, error, data } = useQuery(ME_QUERY);

  const [comment] = useMutation(CREATE_REPLY_MUTATION, {
    variables: {
      id: '',
      content: '',
      replyId: '',
    },
    refetchQueries: [
      { query: ME_QUERY },
      { query: TWEET_QUERY, variables: { id } },
    ],
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const initialValues: ReplyProps = {
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
              variables: { ...values, id, replyId },
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
                <p>{reply}</p>
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

export default Reply;
