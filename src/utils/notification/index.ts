import { useEffect } from 'react';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import PushNotification, {
  Importance,
  ReceivedNotification,
} from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { Metrics, Colors } from 'src/themes';
import {
  ANDROID_CHANNEL_ID,
  ANDROID_CHANNEL_NAME,
  LocalNotificationType,
} from './types';
import { LOG_IF_DEV } from '../debug-helper';

export async function requestUserPermissionForNotification() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    LOG_IF_DEV('Authorization status:', authStatus);
  }
}

export function showLocalNotification(
  notification: LocalNotificationType,
  data: Object = {},
) {
  PushNotification.localNotification({
    message: notification.body || '',
    title: notification.title || '',
    largeIcon: '',
    color: Colors.primary,
    userInfo: data,
    channelId: ANDROID_CHANNEL_ID,
  });
}

export function setupLocalPushNotification() {
  PushNotification.configure({
    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification(notification: Omit<ReceivedNotification, 'userInfo'> | any) {
      // if is IOS, only handle click of notification when remote is not true,
      // avoiding the case when onNotification right after notification is received.
      if (!Metrics.isIOS || !notification.data?.remote) {
        let { data } = notification;
        // when app is in background, but click on notification in foreground, the data maybe is not in `data`
        if (Object.keys(data).length === 0) {
          data = notification;
        }

        // handle notification
      }

      // (required) Called when a remote is received or opened, or local notification is opened
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,
    requestPermissions: true,
  });
}

// Register background handler
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  LOG_IF_DEV('Message handled in the background!', remoteMessage);
});

PushNotification.createChannel(
  {
    channelId: ANDROID_CHANNEL_ID, // (required)
    channelName: ANDROID_CHANNEL_NAME, // (required)
    channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
    playSound: false, // (optional) default: true
    soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
    importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
  },
  (created) => LOG_IF_DEV(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
);

export default function useNotification() {
  useEffect(() => {
    setupLocalPushNotification();

    const unsubscribe = messaging().onMessage(
      ({ notification, data }: FirebaseMessagingTypes.RemoteMessage) => {
        if (notification) {
          showLocalNotification(
            {
              title: notification.title || '',
              body: notification.body || '',
            },
            data,
          );
        }
      },
    );

    return unsubscribe;
  }, []);
}
