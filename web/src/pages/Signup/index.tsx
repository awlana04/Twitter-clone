import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import SIGNUP_MUTATION from '../../schemas/Mutations/Signup';

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
      <h1>Sign Up</h1>

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
          <Field name="email" type="text" placeholder="Email" />
          <ErrorMessage name="email" component="div" />

          <Field name="name" type="text" placeholder="Name" />
          <ErrorMessage name="name" component="div" />

          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />

          <Field
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
          <ErrorMessage name="confirmPassword" component="div" />

          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </Container>
  );
};

export default Signup;
