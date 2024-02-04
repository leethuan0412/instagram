/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import { StyleSheet, View } from 'react-native';
import BouncyCheckbox, {
  IBouncyCheckboxProps,
} from 'react-native-bouncy-checkbox';
import React, { ReactElement } from 'react';
import { Colors, Images } from 'src/themes';
interface Props {
  textComponent?: ReactElement;
  onPress?: (checked: boolean) => void;
  type?: 'default' | 'all';
  isChecked?: boolean;
  propsCheckBox?: IBouncyCheckboxProps;
}

export default function CheckBox({
  textComponent,
  onPress,
  type = 'default',
  isChecked = undefined,
  propsCheckBox,
}: Props) {
  return (
    <BouncyCheckbox
      size={25}
      fillColor={Colors.primary}
      unfillColor={Colors.white}
      iconStyle={styles.icon}
      innerIconStyle={styles.innerIconStyle}
      onPress={onPress}
      textStyle={{ width: 0 }}
      isChecked={typeof isChecked !== 'undefined' ? isChecked : undefined}
      ImageComponent={() =>
        type === 'all' ? (
          <Images.Line height={14} width={10} />
        ) : (
          <Images.Check height={14} width={10} />
        )
      }
      textComponent={textComponent || <View />}
      {...propsCheckBox}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 16,
    height: 16,
    borderRadius: 2,
  },
  innerIconStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: Colors.gray[300],
    width: 16,
    height: 16,
  },
});
