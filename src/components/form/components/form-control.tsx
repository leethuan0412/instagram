import React from 'react';
import { useFormikContext } from 'formik';
import _ from 'lodash';

interface Props {
  children: ({ setFieldValue, value }: any) => void;
  name: string;
}

export default function FormControl({ children, name }: Props) {
  const { setFieldValue, values } = useFormikContext();

  function setControlValue(value: any) {
    setFieldValue(name, value);
  }

  return <>{children({ setControlValue, value: _.get(values, name, '') })}</>;
}
