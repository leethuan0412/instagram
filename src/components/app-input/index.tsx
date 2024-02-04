import { isEqual } from 'lodash';
import React, { memo, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Text from 'src/components/text';
import { Colors, Fonts, Images } from 'src/themes';
import { RNInputProps } from './RNInput.props';

const AppInput = (props: RNInputProps<any>) => {
  const {
    label,
    containerStyle,
    placeholder,
    placeholderColor,
    leftIcon,
    secureTextEntry,
    errorMessage,
    onChangeText,
    onFocus,
    keyboardType,
    editable,
    onBlur,
    autoFocus,
    value,
    touched,
    inputStyle,
    returnKeyType,
    textLeft,
    onSubmitEditing,
    maxLength,
    ref,
    inputContainerStyle,
    errorStyle = {},
    isRequire,
    isCheckline,
    multiline,
    rightIcon,
    labelStyle = {},
    onPress,
    autoCapitalize = 'none',
    onChange,
    onEndEditing,
    tintColorRight,
    tintColorLeft,
  } = props;

  const [isSecureText, setIsSecureText] = useState<boolean | undefined>(
    secureTextEntry,
  );
  const [, setFocus] = useState<boolean>(false);
  const onFocusInput = () => {
    setFocus(true);
    onFocus && onFocus();
  };
  const onBlurInput = () => {
    setFocus(false);
    onBlur && onBlur();
  };

  return (
    <View style={[containerStyle]}>
      {!!label && (
        <Text
          color="darkGrey"
          fontSize="small"
          style={[styles.label, labelStyle]}
        >
          {label}{' '}
          {!!isRequire && <Text style={{ color: Colors.primary }}>*</Text>}
        </Text>
      )}

      <TouchableOpacity
        style={[styles.v_container, inputContainerStyle]}
        onPress={onPress}
        activeOpacity={1}
      >
        {!!leftIcon && (
          <FastImage
            source={leftIcon}
            style={styles.iconLeft}
            resizeMode="contain"
            tintColor={tintColorLeft}
          />
        )}
        {textLeft && (
          <Text style={styles.textLeft} bold="semiBold">
            {textLeft}
          </Text>
        )}
        <TextInput
          onPressIn={onPress}
          autoFocus={autoFocus || false}
          ref={ref}
          onFocus={onFocusInput}
          editable={editable}
          onChangeText={onChangeText}
          value={value}
          maxLength={maxLength}
          placeholderTextColor={placeholderColor || Colors.gray[93]}
          style={[styles.textInput, inputStyle]}
          placeholder={placeholder}
          onBlur={onBlurInput}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          onEndEditing={onEndEditing}
          onSubmitEditing={onSubmitEditing}
          secureTextEntry={isSecureText}
          returnKeyType={returnKeyType}
          multiline={multiline}
          onChange={onChange}
        />

        {!!secureTextEntry && (
          <TouchableOpacity onPress={() => setIsSecureText(!isSecureText)}>
            <FastImage
              source={isSecureText ? Images.ic_eye : Images.ic_eye_hide}
              style={styles.iconRight}
              resizeMode="contain"
              tintColor={tintColorRight}
            />
          </TouchableOpacity>
        )}
        {rightIcon && (
          <FastImage
            source={rightIcon}
            style={styles.iconRight}
            resizeMode="contain"
            tintColor={tintColorRight}
          />
        )}
      </TouchableOpacity>
      {isCheckline && <View style={styles.line} />}
      {!!errorMessage && touched && (
        <Text
          style={[styles.error_message, errorStyle]}
          children={errorMessage}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textLeft: {
    marginLeft: 10,
    fontSize: 18,
  },
  v_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    borderWidth: 1,
    height: 56,
    borderColor: Colors.gray[600],
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  line: {
    height: 1,
    backgroundColor: '#BFBFBF',
  },
  label: {
    color: '#8C8E94',
  },
  iconRight: {
    width: 24,
    height: 24,
    // aspectRatio: 1,
  },
  iconArrowRight: {
    height: 7,
    width: 14,
    aspectRatio: 1,
    right: 10,
    position: 'absolute',
  },
  iconLeft: {
    width: 34,
    height: 34,
    bottom: 2,
  },
  textPlaceholder: {
    color: '#8C8C8C',
    fontSize: 16,
  },
  textInput: {
    fontSize: Fonts.size.B0,
    flex: 1,
    paddingVertical: 0,
    color: Colors.black,
  },
  error_message: {
    fontSize: 12,
    textAlign: 'right',
    color: Colors.state.error,
  },
});

const RNTextInput = memo(AppInput, isEqual);

export default RNTextInput;
