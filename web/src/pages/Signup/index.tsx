import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import SIGNUP_MUTATION from '../../schemas/Mutations/Signup';

import Logo from '../../components/Logo';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import Links from '../../components/Links';

import { Container } from './styles';

interface SignUpValues {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC = () => {
  const history = useHistory();

  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      name: '',
      email: '',
      password: '',
    },
  });

  const initialValues: SignUpValues = {
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Email required')
      .email('Invalid email address'),
    name: Yup.string(),
    password: Yup.string().required('Password required'),
    confirmPassword: Yup.string()
      .required('Confirm your password')
      .oneOf([Yup.ref('password'), null], 'Password must match'),
  });

  return (
    <Container>
      <Logo>
        <h3>Criar conta</h3>
      </Logo>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);

          const response = await signup({
            variables: values,
          });

          localStorage.setItem('token', response.data.signup.token);

          setSubmitting(false);

          history.push('/users');
        }}
      >
        <Form>
          <InputField name="email" type="text" placeholder="Email" />
          <InputField name="name" type="text" placeholder="Nome" />
          <InputField name="password" type="password" placeholder="Senha" />
          <InputField
            name="confirmPassword"
            type="password"
            placeholder="Confirmar senha"
          />

          <Button>
            <span>Criar conta</span>
          </Button>
        </Form>
      </Formik>

      <Links to="/login">
        <h4>Fazer login</h4>
      </Links>
    </Container>
  );
};

export default Signup;
