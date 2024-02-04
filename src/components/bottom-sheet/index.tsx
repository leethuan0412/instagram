import React, { ReactElement } from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

let listRefBottom: any[] = [];

export const closeAllBottomSheet = () => {
  for (let i = 0; i < listRefBottom.length; i++) {
    listRefBottom[i]?.current?.close();
  }
};

export const numberBottomSheet = () => {
  return listRefBottom.length;
};

interface BottomSheetProps {
  heightRBSheet?: number;
  containerStyles?: ViewStyle;
  RBSheetProps?: any;
  title?: string;
  titleStyles?: TextStyle;
  iconLeftPress?: () => void;
  closeOnDragDown?: boolean;
  children: ReactElement | ReactElement[];
}

export interface BottomSheetRef {
  onOpen: () => void;
  onClose: () => void;
}

const BottomSheet = (props: BottomSheetProps, ref: any) => {
  const filterRef: any = React.useRef(null);

  React.useImperativeHandle(ref, () => ({
    onOpen,
    onClose,
  }));

  const onOpen = React.useCallback(() => {
    filterRef?.current?.open();
  }, []);

  const onClose = React.useCallback(() => {
    filterRef?.current?.close();
  }, []);

  React.useEffect(() => {
    listRefBottom.push(filterRef);

    return () => {
      const index = listRefBottom.indexOf(filterRef);
      if (index > -1) {
        listRefBottom.splice(index, 1);
      }
    };
  }, []);

  const containerRbStyles = { ...styles.containerRb, ...props.containerStyles };

  return (
    <RBSheet
      customStyles={{
        container: containerRbStyles,
        draggableIcon: styles.draggableIcon,
      }}
      ref={filterRef}
      height={props.heightRBSheet || 200}
      animationType="fade"
      closeDuration={200}
      openDuration={200}
      closeOnDragDown={
        props.closeOnDragDown === undefined ? true : props.closeOnDragDown
      }
      closeOnPressMask={true}
      {...props.RBSheetProps}
      keyboardAvoidingViewEnabled={true}
    >
      {props.children}
    </RBSheet>
  );
};

export default React.forwardRef(BottomSheet);

const styles = StyleSheet.create({
  containerRb: {
    alignSelf: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingBottom: 35,
    paddingHorizontal: 24,
  },
  draggableIcon: {
    height: 0,
  },
});
