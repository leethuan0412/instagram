import { createReducer, createActions } from 'reduxsauce';
import { useSelector, useDispatch } from 'react-redux';
import { IChatTypes, IChatActions, IChatState, IMessage } from 'src/types/chat';
import { RootState } from 'src/types/reducer';

const INITIAL_STATE: IChatState = {
  messages: [],
  unread: 0,
};

const { Types, Creators } = createActions<IChatTypes, IChatActions>({
  setMessages: ['messages'],
  setUnread: ['unread'],
  addMessage: ['message'],
  updateFirstMessage: ['message'],
  addImageMessage: ['message'],
});

export default Creators;

export function setMessages(state: IChatState, { messages }: any): IChatState {
  return {
    ...state,
    messages,
  };
}

export function setUnread(state: IChatState, { unread }: any): IChatState {
  return {
    ...state,
    unread,
  };
}

export function addMessage(state: IChatState, { message }: any): IChatState {
  return {
    ...state,
    messages: [message, ...state.messages],
    unread: state.unread + 1,
  };
}

export function updateFirstMessage(
  state: IChatState,
  { message }: any,
): IChatState {
  const cloneMessage = [...state.messages];
  cloneMessage[0] = message;

  return {
    ...state,
    messages: cloneMessage,
  };
}

export function addImageMessage(
  state: IChatState,
  { message }: any,
): IChatState {
  return {
    ...state,
    messages: [message, ...state.messages],
  };
}

export const reducer = createReducer<IChatState>(INITIAL_STATE, {
  [Types.SET_MESSAGES]: setMessages,
  [Types.SET_UNREAD]: setUnread,
  [Types.ADD_MESSAGE]: addMessage,
  [Types.UPDATE_FIRST_MESSAGE]: updateFirstMessage,
  [Types.ADD_IMAGE_MESSAGE]: addImageMessage,
});

export function useChatState(): [IChatState, IChatActions] {
  const dispatch = useDispatch();
  const chatState = useSelector<RootState, IChatState>((state) => state.chat);

  const actions = {
    setMessages: (messages: IMessage[]) =>
      dispatch(Creators.setMessages(messages)),
    setUnread: (unread: number) => dispatch(Creators.setUnread(unread)),
    addMessage: (message: IMessage) => dispatch(Creators.addMessage(message)),
    updateFirstMessage: (message: IMessage) =>
      dispatch(Creators.updateFirstMessage(message)),
    addImageMessage: (message: IMessage) =>
      dispatch(Creators.addImageMessage(message)),
  };

  return [chatState, actions];
}
