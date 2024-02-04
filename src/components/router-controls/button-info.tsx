import React from 'react';
import { TouchableOpacity } from 'react-native';
import Text from '../text';

interface Props {
  onPress?: () => void;
}

function Info({ onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Text>Info</Text>
    </TouchableOpacity>
  );
}

export default Info;
