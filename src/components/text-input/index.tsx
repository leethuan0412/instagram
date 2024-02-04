import React, {
  forwardRef,
  LegacyRef,
  ReactElement,
  useState,
  memo,
} from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextStyle,
  View,
  KeyboardType,
  ReturnKeyType,
  TextInputSubmitEditingEventData,
  NativeSyntheticEvent,
} from 'react-native';
import { Colors, Fonts } from 'src/themes';
import Text from 'src/components/text';

interface Props {
  fieldName: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  inputStyle?: TextStyle;
  keyboardType?: KeyboardType;
  returnKeyType?: ReturnKeyType;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  label?: string;
  RightIcon?: ReactElement;
  onChangeText?: (value: string) => void;
}

export type FormTextInputRef = LegacyRef<RNTextInput>;

function TextInput(
  {
    onChangeText,
    placeholder,
    secureTextEntry,
    inputStyle,
    keyboardType,
    returnKeyType,
    onSubmitEditing,
    onFocus,
    label,
    RightIcon,
  }: Props,
  ref: FormTextInputRef,
) {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  function handleFocus(
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) {
    setIsFocus(true);

    onFocus && onFocus(e);
  }

  function onBlur() {
    setIsFocus(false);
  }

  return (
    <View>
      {label && (
        <Text fontSize="tiny" color="grey">
          {label}
        </Text>
      )}
      <View style={[styles.inputContainer, isFocus && styles.inputFocus]}>
        <RNTextInput
          ref={ref}
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          autoCapitalize="none"
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          onFocus={handleFocus}
          placeholderTextColor={Colors.gray[300]}
          onBlur={onBlur}
        />
        {RightIcon && RightIcon}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: Colors.white,
    paddingVertical: 14,
    fontSize: Fonts.size.B0,
    fontWeight: Fonts.weight.bold as any,
    lineHeight: Fonts.lineHeight.B0,
    color: Colors.gray[900],
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

export default memo(forwardRef<RNTextInput, Props>(TextInput));
