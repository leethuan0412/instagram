import React, { ReactElement, memo } from 'react';
import { useFormikContext } from 'formik';

interface Props {
  children: ({
    hasError,
  }: {
    hasError: boolean;
    hasTouched: boolean;
    hasFalsyValue: boolean;
    values: any;
    dirty: boolean;
  }) => ReactElement | ReactElement[];
}

export default memo(function FormProvider({ children }: Props) {
  const { errors, touched, values, dirty } = useFormikContext();

  const hasError = Object.keys(errors).length !== 0;
  const hasTouched = Object.keys(touched).length !== 0;
  const hasFalsyValue = checkObjectHasNullValues(values);

  return (
    <>{children({ hasError, hasTouched, hasFalsyValue, values, dirty })}</>
  );
});

export function checkObjectHasNullValues(obj: any) {
  const values = Object.values(obj);
  if (!values.length) {
    return true;
  }

  return values.some(
    (value) =>
      value === undefined || value === null || value === '' || value === false,
  );
}
