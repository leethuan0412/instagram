import React, { ReactElement, useEffect, useRef } from 'react';
import { StyleSheet, Keyboard, Animated, Easing } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

interface Props {
  children: ReactElement | ReactElement[];
}

function KeyboardLayout({ children }: Props) {
  const keyboardHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    function animateViewMoveAccordingToKeyboard(toValue: number = 0) {
      Animated.timing(keyboardHeight, {
        toValue,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start();
    }

    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardWillShow',
      (e: any) => {
        animateViewMoveAccordingToKeyboard(e?.endCoordinates?.height || 0);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardWillHide',
      () => {
        animateViewMoveAccordingToKeyboard(0);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [keyboardHeight]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          paddingBottom: keyboardHeight,
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}

export default KeyboardLayout;
