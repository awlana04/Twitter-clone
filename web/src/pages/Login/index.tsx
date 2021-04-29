import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import LOGIN_MUTATION from '../../schemas/Mutations/Login';

import Logo from '../../components/Logo';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import Links from '../../components/Links';

import { Container, ForgotPassword, Register } from './styles';

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
      <Logo>
        <h3>Entrar no Twitter</h3>
      </Logo>

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
          <InputField name="email" type="text" placeholder="Email" />
          <InputField name="password" type="password" placeholder="Password" />

          <Button>
            <span>Entrar</span>
          </Button>
        </Form>
      </Formik>

      <ForgotPassword>
        <Links to="/forgot">
          <h4>Esqueceu a senha?</h4>
        </Links>
      </ForgotPassword>

      <Register>
        <Links to="/signup">
          <h4>· Inscrever-se no Twitter</h4>
        </Links>
      </Register>
    </Container>
  );
};

export default Signup;
