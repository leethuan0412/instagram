import { AnyAction } from 'redux';
import { ContactForChat } from 'src/types/api/user';
import { ChatGroup, MessageType } from 'src/types/api/group-chats';

export interface IMessage {
  id: string;
  type: 'attendance' | 'text' | 'media';
  content: string;
  createdAt: string;
  isDirectCustomer: boolean;
}

export interface IChatState {
  messages: IMessage[];
  unread: number;
}

export interface GroupChat {
  messages: MessageType[];
}

export type GroupChatState = { [key: string]: GroupChat };

export interface ChatState {
  users: ContactForChat[];
  groups: ChatGroup[];
  groupChats: GroupChatState;
  typing: TypingState | undefined;
}

export interface ReceivedMessage {
  groupId: string;
  message: MessageType;
}

export interface TypingState {
  groupId: string;
  userTyping: string;
}

export interface IChatActions {
  setMessages: (messages: IMessage[]) => AnyAction;
  setUnread: (unread: number) => AnyAction;
  addMessage: (message: IMessage) => AnyAction;
  updateFirstMessage: (message: IMessage) => AnyAction;
  addImageMessage: (message: IMessage) => AnyAction;
}

export type IChatTypes = {
  SET_MESSAGES: 'SET_MESSAGES';
  SET_UNREAD: 'SET_UNREAD';
  ADD_MESSAGE: 'ADD_MESSAGE';
  UPDATE_FIRST_MESSAGE: 'UPDATE_FIRST_MESSAGE';
  ADD_IMAGE_MESSAGE: 'ADD_IMAGE_MESSAGE';
};

export interface ISocketMessage {
  groupId: string;
  id: string;
  isDirectCustomer: boolean;
  createdAt: string;
  message: { content: string; type: 'text' | 'media' };
  receiver: {
    id: string;
    name: string;
    profileImageUrl: string;
  };
  sender: {
    id: string;
    name: string;
    profileImageUrl: string;
  };
}
