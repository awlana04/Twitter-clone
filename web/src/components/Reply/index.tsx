import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

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

  return (
    <Container>
      <p>Hello world!</p>
    </Container>
  );
};

export default Reply;
