import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import NavigationUtils from 'src/navigation/navigation-utils';
import { Images } from 'src/themes';

export default function GoBack() {
  return (
    <TouchableOpacity onPress={NavigationUtils.goBack} style={styles.container}>
      <Images.NavigationBack />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});
