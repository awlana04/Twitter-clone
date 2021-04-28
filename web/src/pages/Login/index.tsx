import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import LOGIN_MUTATION from '../../schemas/Mutations/Login';

import Logo from '../../assets/logo.png';

import { Container, Register } from './styles';

interface SignUpValues {
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const history = useHistory();

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: '',
      password: '',
    },
  });

  const initialValues: SignUpValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Email required')
      .email('Invalid email address'),
    password: Yup.string().required('Password required'),
  });

  return (
    <Container>
      <img src={Logo} alt="Twitter's logo" />
      <h3>Entrar no Twitter</h3>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);

          const response = await login({
            variables: values,
          });

          localStorage.setItem('token', response.data.login.token);

          setSubmitting(false);

          history.push('/users');
        }}
      >
        <Form>
          <Field name="email" type="text" placeholder="Email" />
          <ErrorMessage name="email" component="div" />

          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />

          <button type="submit">
            <span>Login</span>
          </button>
        </Form>
      </Formik>

      <Register>
        <h4>Don't have an account?</h4>

        <Link to="/signup" />
      </Register>
    </Container>
  );
};

export default Signup;
