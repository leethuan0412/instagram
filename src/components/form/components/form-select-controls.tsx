import React, { useState } from 'react';
import { useFormikContext } from 'formik';

interface Props {
  children: ({ setFieldValue, value }: any) => void;
  name: string;
}

export default function FormSelectControls({ children, name }: Props) {
  const { setFieldValue } = useFormikContext();
  const [value, setValue] = useState<any>();

  function setControlValue(data: { label: string; value: string }) {
    setFieldValue(name, data.value);
    setValue(data);
  }

  return <>{children({ setControlValue, value })}</>;
}
