import React, {
  useImperativeHandle,
  forwardRef,
  useState,
  ForwardRefRenderFunction,
  useRef,
} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  GestureResponderEvent,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Modal from 'react-native-modal';
import { Colors, Metrics } from 'src/themes';
import Text from 'src/components/text';

interface Props {}

export interface PreviewImageRef {
  open: (paths: string[]) => void;
  close: () => void;
}

const PreviewImage: ForwardRefRenderFunction<PreviewImageRef, Props> = (
  _,
  ref,
) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [imagePath, setImagePath] = useState<string | undefined>(undefined);
  let locationY = useRef<number>(0).current;

  useImperativeHandle(
    ref,
    () => ({
      open: (paths: string[]) => {
        setImagePath(paths[0]);
        setIsVisible(true);
      },
      close: () => setIsVisible(false),
    }),
    [],
  );

  function onCLose() {
    setIsVisible(false);
    setImagePath(undefined);
  }

  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.3}
      animationIn="fadeIn"
      animationOut="fadeOut"
      style={styles.modal}
    >
      <SafeAreaView
        style={styles.container}
        onTouchStart={({ nativeEvent }: GestureResponderEvent) => {
          locationY = nativeEvent.locationY;
        }}
        onTouchEnd={({ nativeEvent }: GestureResponderEvent) => {
          if (nativeEvent.locationY - locationY > 50) {
            setIsVisible(false);
          }
        }}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={onCLose} style={styles.close}>
            <Text bold="semiBold" color="black" fontSize="large">
              Close
            </Text>
          </TouchableOpacity>
        </View>
        <FastImage
          source={{
            uri: imagePath,
          }}
          resizeMode="contain"
          style={styles.image}
        />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    backgroundColor: Colors.white,
  },
  image: {
    width: Metrics.screenWidth,
    flex: 1,
    alignSelf: 'stretch',
  },
  header: {
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.baseMargin,
    height: 60,
    justifyContent: 'center',
  },
  close: {
    height: 60,
    width: 100,
    paddingTop: 12,
    justifyContent: 'center',
  },
});

export default forwardRef(PreviewImage);
