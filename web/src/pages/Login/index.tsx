import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import LOGIN_MUTATION from '../../schemas/Mutations/Login';

import Logo from '../../assets/logo.png';

import { Container, Links, ForgotPassword, Register } from './styles';

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
      <img src={Logo} alt="Twitter's blue bird logo" />
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

          <Field name="password" type="password" placeholder="Senha" />
          <ErrorMessage name="password" component="div" />

          <button type="submit">
            <span>Entrar</span>
          </button>
        </Form>
      </Formik>

      <Links>
        <ForgotPassword>
          <h4>Esqueceu sua senha?</h4>

          <Link to="/forgot" />
        </ForgotPassword>

        <Register>
          <h4>· Inscrever-se no Twitter</h4>

          <Link to="/signup" />
        </Register>
      </Links>
    </Container>
  );
};

export default Signup;
