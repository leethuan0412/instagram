import React, { forwardRef } from 'react';
import { WrapperModalRef } from '../wrapper-modal';
import Modal from '../modal';
import NavigationUtils from 'src/navigation/navigation-utils';
import Screen, { NavigatorRouter } from 'src/navigation/configs/screen';
import { Colors } from 'src/themes';
import { StyleSheet } from 'react-native';

interface Props {}

export default forwardRef<WrapperModalRef, Props>(function ModalBanGuestMode(
  {},
  ref,
) {
  return (
    <Modal
      ref={ref}
      title="로그인 필수"
      desc={`이 기능을 사용하기 위해서는
로그인이 반드시 필요합니다.`}
      textButton="확인"
      onPressCancel={() =>
        NavigationUtils.navigate(NavigatorRouter.NO_BOTTOM_TAB, {
          screen: Screen.SIGN_IN,
        })
      }
      containerCancelStyle={styles.containerCancel}
      titleCancelStyle={styles.titleCancel}
    />
  );
});

const styles = StyleSheet.create({
  containerCancel: {
    backgroundColor: Colors.primary,
    width: '100%',
  },
  titleCancel: {
    color: 'white',
  },
});
