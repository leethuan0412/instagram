import React, {
  forwardRef,
  memo,
  useImperativeHandle,
  useState,
  useMemo,
} from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Images } from 'src/themes';
import _ from 'lodash';
import Text from '../text';

interface Props {
  children: string;
  style?: ViewStyle;
  type: 'success' | 'error' | 'warning';
}

export interface RibbonAlertRef {
  show: () => void;
  hide: () => void;
}

export default memo(
  forwardRef<RibbonAlertRef, Props>(function RibbonAlert(
    { children, style, type },
    ref,
  ) {
    const [visible, setVisible] = useState<boolean>(false);

    const textStyle = useMemo(() => {
      if (type === 'success') {
        return styles.text;
      }
      if (type === 'error') {
        return styles.textError;
      }
      if (type === 'warning') {
        return styles.textWarning;
      }

      return {};
    }, [type]);

    const Image = useMemo(() => {
      if (type === 'success') {
        return Images.Success;
      }
      if (type === 'error') {
        return Images.Error;
      }
      if (type === 'warning') {
        return Images.Warning;
      }

      return Images.Success;
    }, [type]);

    useImperativeHandle(
      ref,
      () => ({
        show: () => {
          setVisible(true);

          setTimeout(() => {
            setVisible(false);
          }, 3000);
        },
        hide: () => {
          setVisible(false);
        },
      }),
      [],
    );

    if (!visible) {
      return <></>;
    }

    return (
      <View style={[styles.container, _.get(styles, type, {}), style]}>
        <Image width={21} height={21} />
        <Text style={textStyle} fontSize="xSmall">
          {children}
        </Text>
      </View>
    );
  }),
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: Colors.state.success,
    borderRadius: 5,
    backgroundColor: 'rgba(153, 204, 106, 0.05)',
  },
  success: {
    borderColor: Colors.state.success,
    backgroundColor: 'rgba(153, 204, 106, 0.05)',
  },
  error: {
    borderColor: 'rgba(236, 121, 142, 1)',
    backgroundColor: 'rgba(236, 121, 142, 0.05)',
  },
  warning: {
    borderColor: 'rgba(250, 196, 92, 1)',
    backgroundColor: 'rgba(250, 196, 92, 0.05)',
  },
  text: {
    color: Colors.state.success,
    marginLeft: 10,
  },
  textError: {
    color: Colors.state.error,
    marginLeft: 10,
  },
  textWarning: {
    color: Colors.state.warning,
    marginLeft: 10,
  },
});
