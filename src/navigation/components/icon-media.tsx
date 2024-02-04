import React from 'react';
import FastImage from 'react-native-fast-image';
import { Images } from 'src/themes';

interface Props {
  focused: boolean;
}

export default function IconMedia({ focused }: Props) {
  return focused ? (
    <FastImage
      source={Images.ic_media_active}
      resizeMode="contain"
      style={{ height: 24, width: 24 }}
    />
  ) : (
    <FastImage
      source={Images.ic_media}
      resizeMode="contain"
      style={{ height: 24, width: 24 }}
    />
  );
}
