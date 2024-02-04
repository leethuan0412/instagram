import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from 'src/components/text';
import Screen from 'src/navigation/configs/screen';
import NavigationUtils from 'src/navigation/navigation-utils';
import { useChatState } from 'src/store/reducer/chat-reducer';
import { Colors, Images } from 'src/themes';

export default function HomeHeader() {
  const [{ unread }] = useChatState();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          NavigationUtils.navigate(Screen.CHAT);
        }}
      >
        <Images.Home />
        {unread !== 0 && <Badge>{String(unread)}</Badge>}
      </TouchableOpacity>
    </View>
  );
}

function Badge({ children }: { children: string }) {
  return (
    <View style={styles.viewNotification}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ring: {
    marginHorizontal: 12,
  },
  viewNotification: {
    backgroundColor: Colors.state.error,
    height: 14,
    width: 14,
    borderRadius: 10,
    position: 'absolute',
    right: -4,
    top: -4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 8,
    color: Colors.white,
    textAlignVertical: 'center',
    lineHeight: 14,
  },
});
