import { View, StyleSheet, Keyboard } from 'react-native';
import React, { useRef, useState } from 'react';
import { AppInput, DatePicker, Text } from 'src/components';
import { Colors, Fonts, Images } from 'src/themes';
import { Modalize } from 'react-native-modalize';
import moment from 'moment';
import { useFormikContext } from 'formik';
import _ from 'lodash';
import { FORMAT_DATE } from 'src/utils/utils';

interface Props {
  fieldName: string;
  label: string;
  isRequired?: boolean;
}

export default function FormDatePicker(props: Props) {
  const { fieldName, label, isRequired } = props;

  const { setFieldValue, setFieldTouched, errors, submitCount, values } =
    useFormikContext();
  const refDatePicker = useRef<Modalize>(null);
  const [date, setDate] = useState<string>('');

  const errorTarget = _.get(errors, fieldName, false);

  const isShowError = errorTarget && submitCount !== 0;

  const onSelected = (data: Date) => {
    const dateFormat = moment(data).format(FORMAT_DATE);
    setDate(dateFormat);
    setFieldValue(fieldName, data);
    refDatePicker.current?.close();
  };

  function onPress() {
    refDatePicker.current?.open();
    Keyboard.dismiss();
  }

  return (
    <View>
      <DatePicker
        ref={refDatePicker}
        initialDate={new Date()}
        onSelected={onSelected}
      />
      <AppInput
        label={label}
        placeholder={FORMAT_DATE}
        placeholderColor={Colors.gray[300]}
        isRequire={isRequired}
        editable={false}
        value={date || (values as any)[fieldName] || ''}
        inputStyle={styles.input}
        onEndEditing={() => setFieldTouched(fieldName, true)}
        onPress={onPress}
        rightIcon={<Images.DatePicker />}
      />
      {isShowError && (
        <View style={styles.errorContainer}>
          <Text style={styles.error} fontSize="small" bold="semiBold">
            {errorTarget}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    marginBottom: 4,
  },
  error: {
    color: Colors.state.error,
  },
  input: {
    color: Colors.black,
    fontWeight: Fonts.weight.bold,
  },
});
