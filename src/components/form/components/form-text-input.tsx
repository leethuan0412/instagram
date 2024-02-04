import React, {
  forwardRef,
  LegacyRef,
  ReactElement,
  useState,
  memo,
} from 'react';
import {
  TextInput,
  StyleSheet,
  TextStyle,
  View,
  KeyboardType,
  ReturnKeyType,
  TextInputSubmitEditingEventData,
  NativeSyntheticEvent,
  ViewStyle,
} from 'react-native';
import { useFormikContext } from 'formik';
import { Colors, Fonts } from 'src/themes';
import _ from 'lodash';
import Text from '../../text';

interface Props {
  fieldName: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  inputStyle?: TextStyle | TextStyle[];
  keyboardType?: KeyboardType;
  returnKeyType?: ReturnKeyType;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  label?: string;
  RightIcon?: ReactElement;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  isRequired?: boolean;
  maxLength?: number;
  editable?: boolean;
  onPressIn?: () => void;
}

export type FormTextInputRef = LegacyRef<TextInput>;

function FormTextInput(
  {
    fieldName,
    placeholder,
    secureTextEntry,
    inputStyle,
    keyboardType,
    returnKeyType,
    onSubmitEditing,
    onFocus,
    label,
    RightIcon,
    containerStyle,
    labelStyle,
    isRequired,
    maxLength,
    editable,
    onPressIn,
  }: Props,
  ref: FormTextInputRef,
) {
  const {
    setFieldValue,
    errors,
    // submitCount,
    values,
    setFieldTouched,
    touched,
  } = useFormikContext();
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const errorTarget = _.get(errors, fieldName, false);
  const touch = _.get(touched, fieldName, false);

  // const isShowError = errorTarget && submitCount !== 0;
  const isShowError = errorTarget && touch;

  function handleFocus(
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) {
    setIsFocus(true);

    onFocus && onFocus(e);
  }

  function onBlur() {
    setIsFocus(false);
    // setFieldTouched(fieldName, true);
  }

  return (
    <View style={containerStyle}>
      {label && (
        <Text fontSize="tiny" color="grey" style={labelStyle}>
          {label}{' '}
          {!!isRequired && <Text style={{ color: Colors.primary }}>*</Text>}
        </Text>
      )}
      <View
        style={[
          styles.inputContainer,
          isFocus && styles.inputFocus,
          isShowError && styles.inputError,
        ]}
      >
        <TextInput
          ref={ref}
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          onChangeText={(text) => {
            setFieldValue(fieldName, text);
          }}
          autoCapitalize="none"
          onEndEditing={() => setFieldTouched(fieldName, true)}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
          onSubmitEditing={onSubmitEditing}
          onFocus={handleFocus}
          placeholderTextColor={Colors.gray[300]}
          onBlur={onBlur}
          value={(values as any)[fieldName] ?? ''}
          editable={editable}
          onPressIn={onPressIn}
        />
        {RightIcon && RightIcon}
      </View>
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
  input: {
    flex: 1,
    overflow: 'hidden',
    paddingVertical: 14,
    fontSize: Fonts.size.B0,
    fontWeight: Fonts.weight.bold as any,
    lineHeight: Fonts.lineHeight.B0,
    color: Colors.gray[900],
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: Colors.gray[300],
    marginBottom: 4,
  },
  inputError: {
    borderBottomColor: Colors.state.error,
  },
  inputFocus: {
    borderBottomColor: Colors.primary,
  },
  errorContainer: {
    marginBottom: 4,
  },
  error: {
    color: Colors.state.error,
  },
  rightIcon: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(forwardRef<TextInput, Props>(FormTextInput));
