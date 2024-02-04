import { createRef } from 'react';
import { MessageBoxRef } from './index';

export const messageBoxRef = createRef<MessageBoxRef>();

export const openMessageBox = () => {
  messageBoxRef.current?.onOpen();
};

export const hideMessageBox = () => {
  messageBoxRef.current?.onClose();
};
