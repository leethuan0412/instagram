/* eslint-disable react-native/no-inline-styles */
import React, {
  useImperativeHandle,
  forwardRef,
  useState,
  ForwardRefRenderFunction,
  ReactNode,
} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  TextStyle,
  ViewStyle,
} from 'react-native';
import RNModal from 'react-native-modal';
import { Colors, Images, Metrics } from 'src/themes';
import Text from 'src/components/text';
import Button from '../button';

type TIcon = 'warning' | 'error' | 'success';
interface Props {
  type?: TIcon;
  title: string;
  desc: string | ReactNode[];
  textButton: string;
  typeButton?: 'solid' | 'clear' | 'outline';
  confirmButtonText?: string;
  buttonType?: 'confirm' | 'default';
  descStyle?: TextStyle;
  onPressCancel?: (event: GestureResponderEvent) => void;
  containerCancelStyle?: ViewStyle;
  titleCancelStyle?: TextStyle;
  onPressConfirm?: (event: GestureResponderEvent) => void;
  onClose?: () => void;
}

export interface ModalRef {
  open: () => void;
  close: () => void;
}

const getIcon = (type?: TIcon) => {
  switch (type) {
    case 'success':
      return <Images.Home />;
    case 'error':
      return <Images.Home />;
    default:
      return <Images.Home />;
  }
};

const Modal: ForwardRefRenderFunction<ModalRef, Props> = (
  {
    type = 'warning',
    title,
    desc,
    textButton = 'OK',
    buttonType = 'default',
    typeButton = 'outline',
    descStyle,
    confirmButtonText,
    onPressCancel,
    containerCancelStyle,
    titleCancelStyle,
    onPressConfirm,
    onClose,
  },
  ref,
) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsVisible(true),
      close: () => setIsVisible(false),
    }),
    [],
  );

  function handleClose() {
    onClose && onClose();
    setIsVisible(false);
  }

  return (
    <RNModal
      isVisible={isVisible}
      backdropOpacity={0.6}
      animationIn="slideInDown"
      animationOut="slideOutUp"
      style={styles.modal}
    >
      <TouchableWithoutFeedback>
        <View style={styles.background}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleClose}>
              <Images.Home />
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            {getIcon(type)}
            <Text
              bold="bold"
              fontSize="xLarge"
              color="primary"
              style={styles.title}
            >
              {title}
            </Text>
            <View style={[styles.desc, descStyle]}>
              <Text
                style={{
                  textAlign: 'center',
                }}
              >
                {desc}
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.footer,
              {
                justifyContent:
                  buttonType === 'confirm' ? 'space-between' : 'center',
              },
            ]}
          >
            <Button
              title={textButton}
              type={typeButton}
              containerStyle={[styles.containerBtn, containerCancelStyle]}
              buttonStyle={styles.btn}
              titleStyle={titleCancelStyle}
              onPress={(e) => {
                onPressCancel && onPressCancel(e);
                handleClose();
              }}
            />
            {buttonType === 'confirm' && (
              <Button
                title={confirmButtonText}
                type={typeButton}
                containerStyle={{
                  ...styles.containerBtn,
                  backgroundColor: Colors.primary,
                }}
                buttonStyle={styles.btn}
                titleStyle={{ color: Colors.white }}
                onPress={(e) => {
                  onPressConfirm && onPressConfirm(e);
                  handleClose();
                }}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </RNModal>
  );
};

export const styles = StyleSheet.create({
  modal: {
    marginLeft: 12,
    marginRight: 12,
  },
  background: {
    backgroundColor: Colors.white,
    maxWidth: 350,
    width: '100%',
    minHeight: 100,
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 13,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  header: {
    alignItems: 'flex-end',
  },
  content: {
    alignItems: 'center',
    marginTop: -8,
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
  },
  desc: {
    marginTop: Metrics.isIOS ? 0 : 10,
    justifyContent: 'flex-end',
  },
  containerBtn: {
    alignSelf: 'center',
    minWidth: 150,
    marginBottom: 10,
  },
  btn: {
    height: 56,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default forwardRef(Modal);
