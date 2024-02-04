import React, { forwardRef, ForwardedRef } from 'react';
import { FlatList } from 'react-native';
import { MessageType } from 'src/types/api/group-chats';
import Message from './components/Message';
import MessageHeader from './components/MessageHeader';
import MessageFooter from './components/MessageFooter';

interface Props {
  data: MessageType[];
  ownerId: string;
  onLoadMore: () => void;
  onImagePressed?: (message: MessageType) => void;
}

const INITIAL_BATCH_TO_RENDER = 30;

function ChatSection(
  { data, ownerId, onLoadMore, onImagePressed }: Props,
  ref: ForwardedRef<FlatList>,
) {
  function renderItem(value: MessageType) {
    return (
      <Message
        data={value}
        isOwner={value.sender === ownerId}
        onPress={() => onImagePressed && onImagePressed(value)}
      />
    );
  }

  return (
    <FlatList
      ref={ref}
      data={data}
      inverted
      renderItem={({ item }) => renderItem(item)}
      initialNumToRender={INITIAL_BATCH_TO_RENDER}
      maxToRenderPerBatch={INITIAL_BATCH_TO_RENDER + 1}
      ListFooterComponent={data.length === 0 ? null : <MessageFooter />}
      ListHeaderComponent={<MessageHeader />}
      onEndReachedThreshold={0.2}
      onEndReached={onLoadMore}
    />
  );
}

export default forwardRef(ChatSection);
