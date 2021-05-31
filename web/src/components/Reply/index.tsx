import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FiMessageCircle, FiX } from 'react-icons/fi';

import ME_QUERY from '../../schemas/Queries/Me';
import REPLY from '../../schemas/Mutations/Reply';

import Button from '../Button';

import { Container, StyledModal, ButtonClose } from './styles';

interface ReplyProps {
  content: string;
}

interface Props {
  id: string;
  avatar: string;
  name: string;
  tweet: string;
}

const Reply: React.FC<Props> = ({ id, avatar, name, tweet }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { loading, error, data } = useQuery(ME_QUERY);

  const [reply] = useMutation(REPLY, {
    variables: {
      id: '',
      content: '',
    },
    refetchQueries: [{ query: ME_QUERY }],
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
        <FiMessageCircle size="20" />
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

            await reply({
              variables: { ...values, id },
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
