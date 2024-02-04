import { ResponseListFormat, ResponseMessageFormat } from './api';

export enum MessageTypes {
  TEXT = 'text',
  IMAGE = 'image',
}

export interface MessageType {
  createdAt: string;
  id: string;
  message: string;
  sender: string;
  type: MessageTypes;
  updatedAt: string;
}

export interface ChatGroup {
  id: string;
  totalUnread: number;
  user: {
    id: string;
    image: string | null;
    title: string;
    userName: string;
  };
  message: {
    createdAt: string;
    id: string;
    message: string;
    sender: string;
    type: string;
    updatedAt: string;
  };
}

export interface PaginationBodyRequest {
  page: number;
  limit: number;
}

export interface GetChatGroupResponseSuccess
  extends ResponseListFormat<ChatGroup> {}

export interface GetUserChatResponseSuccess
  extends ResponseListFormat<ChatGroup> {}

export interface CreateChatGroupsBodyRequest {
  invitedUser: string;
}
export interface CreateChatGroupsResponseSuccess
  extends ResponseListFormat<ChatGroup> {}

export interface GetMessageByGroupIdBodyRequest extends PaginationBodyRequest {
  groupId: string;
}

export interface GetMessageByGroupIdResponseSuccess
  extends ResponseMessageFormat<MessageType> {}

export interface UploadImageForMessageResponseSuccess {
  url: string;
}
