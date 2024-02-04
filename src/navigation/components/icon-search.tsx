import React from 'react';
import FastImage from 'react-native-fast-image';
import { Images } from 'src/themes';

interface Props {
  focused: boolean;
}

export default function IconSearch({ focused }: Props) {
  return focused ? (
    <FastImage
      source={Images.ic_search_active}
      resizeMode="contain"
      style={{ height: 23, width: 23 }}
    />
  ) : (
    <FastImage
      source={Images.ic_search}
      resizeMode="contain"
      style={{ height: 23, width: 23 }}
    />
  );
}
