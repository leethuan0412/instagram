import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Colors, Metrics } from 'src/themes';
import { MessageType, MessageTypes } from 'src/types/api/group-chats';
import FastImage from 'react-native-fast-image';
import Text from '../../../text';

interface Props {
  data: MessageType;
  isOwner: boolean;
  onPress?: () => void;
}

function Message({ data, isOwner, onPress }: Props) {
  const styleAlignMessage = isOwner ? styles.rowOwner : styles.rowOther;
  const styleBackgroundColor = isOwner
    ? styles.messageOwner
    : styles.messageOther;
  const textColor = isOwner ? styles.textOwner : styles.textOther;

  if (data.type === MessageTypes.IMAGE) {
    return (
      <View style={[styles.row, styleAlignMessage]}>
        <TouchableWithoutFeedback onPress={onPress}>
          <FastImage
            source={{
              uri: data.message,
            }}
            style={styles.image}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }

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
    maxWidth: '80%',
  },
  textOwner: {
    color: Colors.white,
  },
  textOther: {
    color: '#333333',
  },
  image: {
    width: 200,
    aspectRatio: 1,
    borderRadius: Metrics.buttonRadius,
    backgroundColor: Colors.grey,
  },
});

export default Message;
