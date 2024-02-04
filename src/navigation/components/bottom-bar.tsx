import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Tabs } from '../configs/screen';
import IconHome from './icon-home';
// import { showBanGuestMode } from 'src/components';
import { Metrics } from 'src/themes';
import IconAccount from './icon-account';
import IconAdd from './icon-add';
import IconMedia from './icon-media';
import IconSearch from './icon-search';

type Props = {
  navigation: any;
  state: any;
};

export default function BottomBar({ navigation, state }: Props) {
  return (
    <View style={[styles.container]}>
      <TabButton onPress={() => navigation.navigate(Tabs.HOME)}>
        <IconHome focused={state.index === 0} />
      </TabButton>
      <TabButton
        onPress={() => {
          navigation.navigate(Tabs.SEARCH);
        }}
      >
        <IconSearch focused={state.index === 1} />
      </TabButton>
      <TabButton
        onPress={() => {
          navigation.navigate(Tabs.ADD);
        }}
      >
        <IconAdd focused={state.index === 2} />
      </TabButton>
      <TabButton
        onPress={() => {
          navigation.navigate(Tabs.MEDIA);
        }}
      >
        <IconMedia focused={state.index === 3} />
      </TabButton>
      <TabButton
        onPress={() => {
          navigation.navigate(Tabs.ACCOUNT);
        }}
      >
        <IconAccount focused={state.index === 4} />
      </TabButton>
    </View>
  );
}

function TabButton({ onPress, children }: any) {
  return (
    <TouchableOpacity
      style={[styles.button, styles.itemWrapper]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 80,
  },
  button: {
    flex: 1,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Metrics.hasNotch ? 34 : 0,
  },
  itemWrapper: {
    alignItems: 'center',
  },
});
