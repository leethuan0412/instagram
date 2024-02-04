import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Text from 'src/components/text';

interface Props {
  style?: StyleProp<ViewStyle>;
  text: string;
}

export default function Badge({ style, text }: Props) {
  return (
    <View style={[styles.container, style]}>
      <Text color="white" fontSize="xSmall">
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    alignSelf: 'baseline',
  },
});
