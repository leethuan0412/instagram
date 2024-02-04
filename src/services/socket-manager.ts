import { io } from 'socket.io-client';
import AsyncStorage from '@react-native-async-storage/async-storage';

export enum EVENT_SOCKET {
  MESSAGE = 'message',
}

export default class SocketManager {
  static myInstance: SocketManager | null = null;
  socket: any;
  SOCKET_HOST: string = 'https://bestone-api-dev.approach.vn/';
  isConnect = false;
  listRegisterListener = new Map();

  static getInstance() {
    if (SocketManager.myInstance === null) {
      SocketManager.myInstance = new SocketManager();
    }
    return this.myInstance;
  }

  onConnect = async (callback?: () => void) => {
    const token = (await AsyncStorage.getItem('access_token')) || '';

    this.socket = io(this.SOCKET_HOST, {
      transports: ['websocket'],
      reconnectionDelayMax: 10000,
      extraHeaders: {
        Authorization: token,
      },
    });

    this.socket.on('connect', async () => {
      __DEV__ && console.log('connected to socket server');
      this.isConnect = true;
      callback?.();
    });

    this.socket.on('disconnect', () => {
      __DEV__ && console.log('disconnect');
      this.isConnect = false;
    });
  };

  reconnect = () => {
    if (!this.isConnect) {
      this.onConnect();
    }
  };

  onRegisterListener = (eventFunction?: (event: string, data: any) => void) => {
    if (eventFunction) {
      this.listRegisterListener.set(eventFunction, eventFunction);
    }

    this.socket.on(EVENT_SOCKET.MESSAGE, (message: any) => {
      this.listRegisterListener.forEach((callback) =>
        callback(EVENT_SOCKET.MESSAGE, message),
      );
    });
  };

  onEmit = (event: string, data: any) => {
    this.socket.emit(event, data);
  };

  onUnRegisterListener = (
    eventFunction: (event: string, data: any) => void,
  ) => {
    this.listRegisterListener.delete(eventFunction);
  };

  onDisconnect = () => {
    this.socket.disconnect();
  };
}
