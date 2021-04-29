import React from 'react';
import { useField, ErrorMessage } from 'formik';

import { Container } from './styles';

const InputField: React.FC<{
  name: string;
  type: string;
  placeholder: string;
  validate?: (arg0: string) => string | undefined;
}> = ({ name, type, placeholder, validate }) => {
  const [field] = useField<string>({ name, validate });

  return (
    <>
      <Container
        name={field.name}
        type={type}
        onChange={field.onChange}
        onBlur={field.onBlur}
        placeholder={placeholder}
      />
      <ErrorMessage name={field.name} component="div" />
    </>
  );
};

export default InputField;
