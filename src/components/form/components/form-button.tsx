import React from 'react';
import { ViewStyle } from 'react-native/types';
import { useFormikContext } from 'formik';
import Button from '../../button';

interface Props {
  children: string;
  style?: ViewStyle;
}

export default function FormButton({ children, style }: Props) {
  const { submitForm, isSubmitting } = useFormikContext();

  return (
    <Button onPress={submitForm} loading={isSubmitting} style={style}>
      {children}
    </Button>
  );
}
