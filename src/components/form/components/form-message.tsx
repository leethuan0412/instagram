import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'src/components';
import { Colors } from 'src/themes';
import _ from 'lodash';
import { useFormikContext } from 'formik';

interface Props {
  fieldName: string;
}

export default memo(function FormMessage({ fieldName }: Props) {
  const { errors, touched } = useFormikContext();

  const errorTarget = _.get(errors, fieldName, '');
  const touch = _.get(touched, fieldName, false);
  const isShowError = errorTarget && touch;

  if (!isShowError) {
    return <></>;
  }

  return (
    <View style={styles.errorContainer}>
      <Text style={styles.error} fontSize="small" bold="semiBold">
        {errorTarget}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  errorContainer: {
    marginBottom: 4,
  },
  error: {
    color: Colors.state.error,
  },
});
