import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Metrics } from 'src/themes';
import Text from '../../text';

function MessageHeader() {
  return (
    <View style={styles.container}>
      <Text color="darkGrey">Start conversation</Text>
      <View style={styles.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.smallMargin,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Metrics.doubleBaseMargin,
  },
  footer: {
    marginHorizontal: 32,
    height: 1,
    width: '60%',
    backgroundColor: Colors.grey,
    marginTop: Metrics.smallMargin,
  },
});

export default MessageHeader;
