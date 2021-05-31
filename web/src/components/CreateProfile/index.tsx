import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

import CREATE_PROFILE_MUTATION from '../../schemas/Mutations/CreateProfile';
import ME_QUERY from '../../schemas/Queries/Me';

import Button from '../Button';

import { Container, StyledModal } from './styles';

interface ProfileValues {
  avatar: string;
  name: string;
  bio: string;
  location: string;
  website: string;
}

const CreateProfile: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [createProfile] = useMutation(CREATE_PROFILE_MUTATION, {
    variables: {
      name: '',
      bio: '',
      location: '',
      website: '',
    },
    refetchQueries: [{ query: ME_QUERY }],
  });

  const initialValues: ProfileValues = {
    avatar: '',
    name: '',
    bio: '',
    location: '',
    website: '',
  };

  // const validationSchema = Yup.object({
  //   name: Yup.string().required('Name required'),
  //   bio: Yup.string().required('Bio required'),
  //   location: Yup.string().required('Location required'),
  //   website: Yup.string().required('Website required'),
  // });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Container>
      <button type="button" onClick={openModal}>
        Criar perfil
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
          // validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);

            await createProfile({
              variables: values,
            });

            setSubmitting(false);
            setModalIsOpen(false);
          }}
        >
          <Form>
            <Field name="name" type="text" placeholder="Nome" />
            <ErrorMessage name="name" component="div" />
            <Field name="bio" type="text" placeholder="Bio" />
            <ErrorMessage name="bio" component="div" />
            <Field name="location" type="text" placeholder="Localização" />
            <ErrorMessage name="location" component="div" />
            <Field name="website" type="text" placeholder="Website" />
            <ErrorMessage name="website" component="div" />

            <Button>
              <span>Criar perfil</span>
            </Button>
          </Form>
        </Formik>
      </StyledModal>
    </Container>
  );
};

export default CreateProfile;
