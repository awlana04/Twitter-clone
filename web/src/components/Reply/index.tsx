import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import * as Yup from 'yup';
import { FiMessageCircle } from 'react-icons/fi';

import REPLY from '../../schemas/Mutations/Reply';
import ME_QUERY from '../../schemas/Queries/Me';

import { Container } from './styles';

interface ReplyProps {
  content: string;
}

interface Props {
  id: string;
  avatar: string;
  name: string;
  tweet: string;
}

const Reply: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [reply] = useMutation(REPLY, {
    variables: {
      id: '',
      content: '',
    },
    refetchQueries: [{ query: ME_QUERY }],
  });

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
        <FiMessageCircle />
      </button>
    </Container>
  );
};

export default Reply;
