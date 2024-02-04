import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Metrics } from 'src/themes';
import { MessageType } from 'src/types/chat';
import Text from '../text';

interface Props {
  data: MessageType;
}

function Message({ data }: Props) {
  const styleAlignMessage = data.owner ? styles.rowOwner : styles.rowOther;
  const styleBackgroundColor = data.owner
    ? styles.messageOwner
    : styles.messageOther;
  const textColor = data.owner ? styles.textOwner : styles.textOther;

  return (
    <View style={[styles.row, styleAlignMessage]}>
      <View style={[styles.message, styleBackgroundColor]}>
        <Text bold="semiBold" color="white" style={textColor}>
          {data.message}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginVertical: 2,
    paddingHorizontal: Metrics.baseMargin,
  },
  rowOwner: {
    justifyContent: 'flex-end',
  },
  rowOther: {
    justifyContent: 'flex-start',
  },
  messageOwner: {
    backgroundColor: Colors.white,
  },
  messageOther: {
    backgroundColor: Colors.white,
  },
  message: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 12,
    alignSelf: 'baseline',
  },
  textOwner: {
    color: Colors.white,
  },
  textOther: {
    color: '#333333',
  },
});

export default Message;
