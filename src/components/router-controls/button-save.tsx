import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Metrics } from 'src/themes';
import Text from '../text';

interface Props {
  onPress: () => void;
  disabled?: boolean;
}

function ButtonSave({ onPress, disabled = false }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      disabled={disabled}
    >
      <Text color={disabled ? 'disabled' : 'black'}>Save</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: Metrics.smallMargin,
  },
});

export default ButtonSave;
