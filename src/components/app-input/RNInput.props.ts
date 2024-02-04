import { LegacyRef } from 'react';
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  StyleProp,
  TextInputChangeEventData,
  TextInputSubmitEditingEventData,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { Source } from 'react-native-fast-image';

export interface RNInputProps<T> {
  textLeft?: string;
  multiline?: boolean;
  isCheckline?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  value?: string;
  ref?: LegacyRef<T>;
  placeholder?: string;
  inputStyle?: StyleProp<TextStyle>;
  labelStyle?: TextStyle;
  leftIcon?: number | Source;
  rightIcon?: any;
  label?: string;
  isRequire?: boolean;
  borderBottomColor?: any;
  rightText?: string | undefined;
  returnKeyType?: ReturnKeyTypeOptions;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  errorMessage?: string;
  autoFocus?: boolean;
  touched?: boolean;
  maxLength?: number;
  editable?: boolean;
  onBlur?: any;
  onChangeText?: ((text: string) => void) | undefined;
  onFocus?: any;
  onRight?: () => void;
  inputContainerStyle?: StyleProp<ViewStyle>;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
  onEndEditing?: () => void;
  placeholderColor?: any;
  errorStyle?: TextStyle;
  isPlaceholderRequire?: boolean;
  isFocused?: any;
  colorValue?: any;
  onPress?: () => void;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  onChange?: (data: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  tintColorRight?: string;
  tintColorLeft?: string;
}
