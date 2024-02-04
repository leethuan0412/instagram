import React, {
  ReactElement,
  useImperativeHandle,
  forwardRef,
  useState,
  ForwardRefRenderFunction,
} from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

interface Props {
  children: ReactElement | ReactElement[];
}

export interface WrapperModalRef {
  open: () => void;
  close: () => void;
}

const WrapperModal: ForwardRefRenderFunction<WrapperModalRef, Props> = (
  { children },
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

  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.6}
      animationIn="slideInDown"
      animationOut="slideOutUp"
    >
      <TouchableWithoutFeedback onPress={() => setIsVisible(false)}>
        <View style={styles.background}>{children}</View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default forwardRef(WrapperModal);
