import React from 'react';
import { useFormikContext } from 'formik';
import _ from 'lodash';

interface Props {
  children: ({ setFieldValue, value }: any) => void;
  name: string;
  data: any[];
}

export default function FormSelectControl({ children, name, data }: Props) {
  const { setFieldValue, values } = useFormikContext();

  const temp = _.get(values, name, '');
  const selectedValue = data.filter((item) => item.value === temp).pop();

  function setControlValue(value: any) {
    setFieldValue(name, value);
  }

  return <>{children({ setControlValue, value: selectedValue })}</>;
}
