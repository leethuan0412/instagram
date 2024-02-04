import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from 'src/components/text';
import { Colors, Metrics } from 'src/themes';
import { useAppState } from 'src/store/reducer/app-reducer';

export default function AlertNetworkFailed() {
  const [{ isConnected }] = useAppState();

  if (isConnected) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text color="white" bold="semiBold">
        Network connection error
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Metrics.smallMargin,
    backgroundColor: Colors.state.error,
    alignItems: 'center',
  },
});
