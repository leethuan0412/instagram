import React from 'react';
import Text from '../text';

export default function TextHeader(props: { label: string }) {
  return (
    <Text bold="semiBold" fontSize="xxLarge">
      {props.label}
    </Text>
  );
}

// const styles = StyleSheet.create({
//   container: {},
// });
