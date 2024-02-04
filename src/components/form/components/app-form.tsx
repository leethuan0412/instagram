import React, { forwardRef, ForwardedRef, ReactElement, useRef } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Schema } from 'yup';

interface Props {
  initValues?: object;
  onSubmit: (values: any) => void | Promise<any>;
  validationSchema: Schema;
  children: ReactElement | ReactElement[];
}

function Form(
  { initValues = {}, onSubmit, validationSchema, children }: Props,
  ref: ForwardedRef<any>,
) {
  async function handleSubmit(
    values: any,
    { setSubmitting }: FormikHelpers<any>,
  ) {
    setSubmitting(true);
    await onSubmit(values);
    setSubmitting(false);
  }

  return (
    <Formik
      initialValues={initValues}
      innerRef={ref}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export function useForm() {
  const refForm = useRef<any>(null);

  function handleSubmit() {
    refForm.current?.handleSubmit();
  }

  function setFieldError(field: string, error: string) {
    refForm.current?.setFieldError(field, error);
  }

  function setFieldValue(field: string, value: string | number | undefined) {
    refForm.current?.setFieldValue(field, value);
  }

  function setFieldTouched(field: string) {
    refForm.current?.setFieldTouched(field, true);
  }

  return {
    refForm,
    handleSubmit,
    setFieldError,
    setFieldValue,
    setFieldTouched,
  };
}

export default forwardRef(Form);
