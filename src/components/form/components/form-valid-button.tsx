import React, { memo } from 'react';
import { useFormikContext } from 'formik';
import _ from 'lodash';

interface Props {
  children: ({
    isInvalid,
    submitForm,
  }: {
    isInvalid: boolean;
    submitForm: () => void;
  }) => void;
}

function FormControl({ children }: Props) {
  const { errors, submitForm, initialValues, values } = useFormikContext();

  const isInvalid = !(
    !_.isEqual(initialValues, values) && Object.keys(errors).length === 0
  );

  return <>{children({ submitForm, isInvalid })}</>;
}

export default memo(FormControl);
