import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Text from 'src/components/text';
import { Images } from 'src/themes';

interface Props {}

export interface MessageBoxRef {
  onOpen: () => void;
  onClose: () => void;
}

export default forwardRef<MessageBoxRef, Props>(function MessageBox(_, ref) {
  const [visible, setVisible] = useState<boolean>(false);

  useImperativeHandle(
    ref,
    () => ({
      onOpen,
      onClose,
    }),
    [],
  );

  function onClose() {
    setVisible(false);
  }

  function onOpen() {
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 2000);
  }

  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0}
      animationIn="fadeIn"
      animationOut="fadeOut"
      style={styles.container}
      onBackdropPress={onClose}
    >
      <View style={styles.box}>
        <Images.Home style={styles.icon} />
        <Text color="white">변경되었습니다.</Text>
      </View>
    </Modal>
  );
});
const styles = StyleSheet.create({
  container: {
    margin: 0,
    alignItems: 'center',
  },
  icon: {
    marginBottom: 8,
  },
  box: {
    width: 174,
    height: 95,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
});
