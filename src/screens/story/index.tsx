import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'src/components';
const StoryScreen = () => {
  const progress = useRef(new Animated.Value(0)).current;
  const progressValue = useRef(0);

  useEffect(() => {
    const animation = Animated.timing(progress, {
      toValue: 1,
      duration: 10000, // 10 giây
      useNativeDriver: false,
    });
    animation.start();
    const listener = progress.addListener(({ value }) => {
      progressValue.current = value;
    });

    return () => {
      progress.removeListener(listener);
      animation.stop(); // Dừng animation khi component unmount
    };
  }, [progress]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>alo</Text>
    </SafeAreaView>
  );
};
export default StoryScreen;
