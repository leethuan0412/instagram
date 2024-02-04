import React, { ReactElement } from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

interface Props {
  onPress: () => void;
  icon: ReactElement;
  style?: ViewStyle;
}

export default function LoginSocialButton({ onPress, icon, style }: Props) {
  return (
    <TouchableOpacity style={[styles.thirdPartyItem, style]} onPress={onPress}>
      {icon && icon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  thirdPartyItem: {
    padding: 6.5,
  },
  thirdPartyIcon: {
    width: 39,
    height: 39,
  },
});
