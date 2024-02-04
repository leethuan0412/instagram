import React from 'react';
import { StyleSheet } from 'react-native';
import Text from 'src/components/text';
import { Colors } from 'src/themes';

export default function LogoBar() {
  return (
    <Text style={styles.text} bold="bold" fontSize="xxLarge">
      Best One
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.primary,
    fontWeight: '800',
    lineHeight: 31,
  },
});
