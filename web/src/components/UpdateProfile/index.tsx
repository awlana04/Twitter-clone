import React, { useRef, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FiUser } from 'react-icons/fi';
// import * as Yup from 'yup';

import UPDATE_PROFILE_MUTATION from '../../schemas/Mutations/UpdateProfile';
import ME_QUERY from '../../schemas/Queries/Me';

import Button from '../Button';

import { Container, StyledModal } from './styles';

interface ProfileValues {
  id: string;
  avatar: string;
  name: string;
  bio: string;
  location: string;
  website: string;
}

const UpdateProfile: React.FC = () => {
  const inputFile = useRef(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [image, setImage] = useState('');
  const [imageLoading, setImageLoading] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // const updateImage = async (e) => {
  //   const files = e.target.files;
  //   const data = new FormData();

  //   data.append('file', files[0]);

  //   setImageLoading(true);

  //   // const response = await fetch()
  // };

  const { loading, error, data } = useQuery(ME_QUERY);

  const [updateProfile] = useMutation(UPDATE_PROFILE_MUTATION, {
    variables: {
      id: '',
      avatar: '',
      name: '',
      bio: '',
      location: '',
      website: '',
    },
    refetchQueries: [{ query: ME_QUERY }],
  });

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const initialValues: ProfileValues = {
    id: data.me.profile[0].id,
    avatar: data.me.profile[0].avatar,
    name: data.me.profile[0].name,
    bio: data.me.profile[0].bio,
    location: data.me.profile[0].location,
    website: data.me.profile[0].website,
  };

  // const validationSchema = Yup.object({
  //   name: Yup.string().required('Name required'),
  //   bio: Yup.string().required('Bio required'),
  //   location: Yup.string().required('Location required'),
  //   website: Yup.string().required('Website required'),
  // });

  return (
    <Container>
      <button type="button" onClick={openModal}>
        Editar perfil
      </button>

      <StyledModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        ariaHideApp={false}
      >
        {/* <input
          name="file"
          type="file"
          placeholder="Adicionar foto"
          onChange={updateImage}
          ref={inputFile}
        />

        {imageLoading ? (
          <h3>Loading...</h3>
        ) : (
          <>
            {data.me.profile[0].avatar ? (
              <span onClick={() => inputFile.current.click()}>
                <img
                  src={data.me.profile[0].avatar}
                  alt={`${data.me.profile[0].name}' avatar`}
                />
              </span>
            ) : (
              <span onClick={() => inputFile.current.click()}>
                <FiUser size="26" color="#1a91da" />
              </span>
            )}
          </>
        )} */}

        <Formik
          initialValues={initialValues}
          // validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);

            await updateProfile({
              variables: values,
            });

            setSubmitting(false);
            setModalIsOpen(false);
          }}
        >
          <Form>
            <Field name="name" type="text" placeholder="Nome" />
            <ErrorMessage name="name" component="div" />
            <Field name="bio" type="text" as="textarea" placeholder="Bio" />
            <ErrorMessage name="bio" component="div" />
            <Field name="location" type="text" placeholder="Localização" />
            <ErrorMessage name="location" component="div" />
            <Field name="website" type="text" placeholder="Website" />
            <ErrorMessage name="website" component="div" />

            <Button>
              <span>Atualizar perfil</span>
            </Button>
          </Form>
        </Formik>
      </StyledModal>
    </Container>
  );
};

export default UpdateProfile;
