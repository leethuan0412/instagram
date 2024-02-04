import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors, Fonts, Images } from 'src/themes';
import { RNInputProps } from './RNInput.props';

const InputMessage = (props: RNInputProps<any>) => {
  const [, setFocus] = useState<boolean>(false);
  const {
    placeholder,
    placeholderColor,
    onChangeText,
    keyboardType,
    editable,
    autoFocus,
    value,
    inputStyle,
    returnKeyType,
    onSubmitEditing,
    maxLength,
    ref,
    multiline,
    onPress,
    autoCapitalize = 'none',
    onChange,
    onEndEditing,
    onFocus,
    onBlur,
    rightIcon,
    leftIcon,
    onSend,
  } = props;
  const onFocusInput = () => {
    setFocus(true);
    onFocus && onFocus();
  };
  const onBlurInput = () => {
    setFocus(false);
    onBlur && onBlur();
  };

  return (
    <View style={styles.v_container}>
      {leftIcon && leftIcon}
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
        returnKeyType={returnKeyType}
        multiline={multiline}
        onChange={onChange}
      />
      {rightIcon && (
        // <FastImage
        //   source={rightIcon}
        //   style={styles.iconRight}
        //   resizeMode="contain"
        //   tintColor={tintColorRight}
        // />
        <TouchableOpacity onPress={onSend}>
          <Images.Send />
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  iconRight: {
    width: 24,
    height: 24,
    // aspectRatio: 1,
  },
  v_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  textInput: {
    fontSize: Fonts.size.B0,
    flex: 1,
    paddingVertical: 0,
    color: Colors.black,
  },
});
export default InputMessage;
