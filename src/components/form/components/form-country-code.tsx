import { StyleSheet, TextStyle, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { AppInput, BottomSheet, BottomSheetRef, Text } from 'src/components';
import { Images, Fonts, Colors, Metrics } from 'src/themes';
import { useFormikContext } from 'formik';
import _ from 'lodash';

interface Props {
  fieldName: string;
  label: string;
  isRequire?: boolean;
  editable?: boolean;
  inputStyle?: TextStyle;
}

const COUNTRY_CODE = ['+82', '+01'];

export default function FormCountryCode({
  label,
  fieldName,
  isRequire,
  editable = true,
  inputStyle,
}: Props) {
  const { setFieldValue, errors, submitCount, setFieldTouched, values } =
    useFormikContext();
  const refBottomSheet = useRef<BottomSheetRef>(null);
  const [active, setActive] = useState<number>(0);
  const [value, setValue] = useState<string>('');

  const errorTarget = _.get(errors, fieldName, false);

  const isShowError = errorTarget && submitCount !== 0;

  const handleOpenModal = () => {
    if (editable) {
      refBottomSheet.current?.onOpen();
    }
  };

  function onClose() {
    refBottomSheet.current?.onClose();
  }

  const handleActive = (num: number) => {
    setActive(num);
    setValue(COUNTRY_CODE[num]);
    setFieldValue(fieldName, COUNTRY_CODE[num]);
    setFieldTouched(fieldName, true);
    onClose();
  };

  return (
    <View>
      <AppInput
        placeholder="(+82)"
        label={label}
        value={`(${value || (values as any)[fieldName] || '+82'})`}
        isRequire={isRequire}
        inputStyle={[styles.input, inputStyle]}
        containerStyle={styles.marginTop}
        placeholderColor={Colors.gray[300]}
        editable={false}
        rightIcon={<Images.ArrowDown />}
        onPress={handleOpenModal}
      />
      {isShowError && (
        <View style={styles.errorContainer}>
          <Text style={styles.error} fontSize="small" bold="semiBold">
            {errorTarget}
          </Text>
        </View>
      )}
      <BottomSheet
        ref={refBottomSheet}
        heightRBSheet={Metrics.screenHeight / 3}
      >
        <View style={styles.background}>
          <View style={styles.header}>
            <Text bold="bold" fontSize="xLarge" style={styles.title}>
              국가 코드
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Images.Close />
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <TouchableOpacity
              style={[
                styles.button,
                active === 0 ? styles.borderPrimary : null,
              ]}
              onPress={() => handleActive(0)}
            >
              <Text
                style={[
                  styles.text,
                  active === 0 ? styles.textPrimary : styles.gray900,
                ]}
              >
                +82
              </Text>
              <Text
                style={[
                  styles.text,
                  active === 0 ? styles.textPrimary : styles.gray900,
                ]}
              >
                {' '}
                대한민국
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                active === 1 ? styles.borderPrimary : null,
              ]}
              onPress={() => handleActive(1)}
            >
              <Text
                style={[
                  styles.text,
                  active === 1 ? styles.textPrimary : styles.gray900,
                ]}
              >
                +01
              </Text>
              <Text
                style={[
                  styles.text,
                  active === 1 ? styles.textPrimary : styles.gray900,
                ]}
              >
                {' '}
                미국
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
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
  marginTop: {
    marginTop: 20,
    fontFamily: Fonts.family.Pretendard_Regular,
  },
  input: {
    fontWeight: Fonts.weight.bold,
    fontSize: Fonts.size.H3,
    fontFamily: Fonts.family.Pretendard_Regular,
    color: Colors.black,
    paddingBottom: 4,
  },
  background: {
    backgroundColor: Colors.white,
    width: '100%',
    minHeight: 224,
    borderRadius: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    marginVertical: 20,
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
    color: Colors.gray[900],
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 10,
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: Colors.gray[300],
  },
  borderPrimary: {
    borderBottomColor: Colors.primary,
  },
  textPrimary: {
    color: Colors.primary,
  },
  gray900: {
    color: Colors.gray[900],
  },
  text: {
    fontSize: Fonts.size.H3,
    fontWeight: Fonts.weight.normal,
  },
});
