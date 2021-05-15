import React, { useRef, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FiUser, FiX } from 'react-icons/fi';

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
  const inputFile = useRef<HTMLInputElement | null>(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [image, setImage] = useState('');
  const [imageLoading, setImageLoading] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const updateImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files!;
    const data = new FormData();

    data.append('file', files[0]);
    data.append('upload_preset', 'l3e3ee55');

    setImageLoading(true);

    const response = await fetch(
      process.env.REACT_APP_CLOUDINARY_API_URL as string,
      {
        method: 'POST',
        body: data,
      },
    );

    const file = await response.json();

    setImage(file.secure_url);
    setImageLoading(false);
  };

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
        style={{
          overlay: {
            background: '#9e9e9e69',
          },
        }}
      >
        <input
          name="file"
          type="file"
          placeholder="Adicionar foto"
          onChange={updateImage}
          ref={inputFile}
          style={{ display: 'none' }}
        />

        <>
          <div>
            <button type="button" onClick={closeModal}>
              <h5>
                <FiX size="24" color="#1da1f2" />
              </h5>

              <span>Editar Perfil</span>
            </button>
          </div>
        </>

        {imageLoading ? (
          <h3>Loading...</h3>
        ) : (
          <>
            {data.me.profile[0].avatar ? (
              <button type="button" onClick={() => inputFile.current?.click()}>
                <span>
                  <img
                    src={data.me.profile[0].avatar}
                    alt={`${data.me.profile[0].name}' avatar`}
                  />
                </span>
              </button>
            ) : (
              <button type="button" onClick={() => inputFile.current?.click()}>
                <span>
                  <FiUser size="26" color="#1a91da" />
                </span>
              </button>
            )}
          </>
        )}

        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);

            await updateProfile({
              variables: { ...values, avatar: image },
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
              <span>Salvar</span>
            </Button>
          </Form>
        </Formik>
      </StyledModal>
    </Container>
  );
};

export default UpdateProfile;
