import { GenericFieldHTMLAttributes, FieldConfig } from 'formik';

export declare type FieldAttributes<T> = GenericFieldHTMLAttributes &
  FieldConfig & {
    name: string;
  };
