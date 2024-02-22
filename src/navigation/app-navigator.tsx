import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, { useEffect } from 'react';
import ChatScreen from 'src/screens/chat/ChatScreen';
import StoryScreen from 'src/screens/story';
import SocketManager, { EVENT_SOCKET } from 'src/services/socket-manager';
import store from 'src/store';
import ChatCreator from 'src/store/reducer/chat-reducer';
import { ISocketMessage } from 'src/types/chat';
import Screen, { NavigatorRouter } from './configs/screen';
import AppBottomTabs from './routes/app-bottom-tabs';

export default function AppNavigator() {
  // const Stack = createNativeStackNavigator();
  const Stack = createStackNavigator();
  useEffect(() => {
    const socket = SocketManager.getInstance();

    function onEventMess(event: string, data: ISocketMessage) {
      if (event === EVENT_SOCKET.MESSAGE && data) {
        const message = {
          id: data.sender.id,
          type: data.message.type,
          content: data.message.content,
          createdAt: data.createdAt,
          isDirectCustomer: data.isDirectCustomer,
        };

        if (data.isDirectCustomer) {
          store.store.dispatch(ChatCreator.addMessage(message));
        } else {
          if (data.message.type === 'text') {
            store.store.dispatch(ChatCreator.updateFirstMessage(message));
          } else {
            store.store.dispatch(ChatCreator.addImageMessage(message));
          }
        }
      }
    }

    if (!socket?.isConnect) {
      socket?.onConnect(() => {
        socket?.onRegisterListener(onEventMess);
      });
    } else {
      socket?.onRegisterListener(onEventMess);
    }

    return () => {
      socket?.onUnRegisterListener(onEventMess);
      socket?.onDisconnect();
    };
  }, []);

  // const config = {
  //   animation: 'spring',
  //   config: {
  //     overshootClamping: false,
  //     restDisplacementThreshold: 0.01,
  //     restSpeedThreshold: 0.01,
  //   },
  // };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        // contentStyle: {
        //   backgroundColor: Colors.white,
        // },
        headerTitleAlign: 'center',
        // orientation: 'portrait',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={NavigatorRouter.BOTTOM_TAB}
        component={AppBottomTabs}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={Screen.CHAT}
        component={ChatScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
        name={Screen.STORY}
        component={StoryScreen}
      />
    </Stack.Navigator>
  );
}
