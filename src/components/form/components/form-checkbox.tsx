import { useFormikContext } from 'formik';
import _ from 'lodash';
import React, { ReactElement, memo } from 'react';
import CheckBox from 'src/components/check-box';

interface Props {
  name: string;
  textComponent: ReactElement;
}

export default memo(function FormCheckbox({ name, textComponent }: Props) {
  const { setFieldValue, values } = useFormikContext();

  const value = _.get(values, name, false);

  return (
    <CheckBox
      textComponent={textComponent}
      onPress={(isChecked) => {
        setFieldValue(name, isChecked);
      }}
      isChecked={value}
    />
  );
});
