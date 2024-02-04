import { Alert } from 'react-native';

export const showConfirm = (
  title: string,
  content: string,
  action?: () => void,
  textCancel?: string,
  textConfirm?: string,
) => {
  Alert.alert(
    title,
    content,
    [
      {
        text: textCancel || 'Cancel',
        style: 'cancel',
      },
      {
        text: textConfirm || 'Confirm',
        onPress: action,
      },
    ],
    { cancelable: false },
  );
};

export const showMessages = (
  title: string,
  content: string,
  action?: () => void,
) => {
  Alert.alert(
    title,
    content,
    [
      {
        text: 'OK',
        onPress: action,
      },
    ],
    { cancelable: false },
  );
  // if (Platform.OS === 'ios') {
  //   setTimeout(() => {
  //     Alert.alert(
  //       title,
  //       content,
  //       [
  //         {
  //           text: 'OK',
  //           onPress: action,
  //         },
  //       ],
  //       { cancelable: false }
  //     )
  //   }, 100)
  // } else if (Platform.OS === 'android') {
  //   setTimeout(() => {
  //     RNAlert.show({
  //       title: title,
  //       confirmTitle: R.strings().confirm,
  //       content: content,
  //       onConfirm: action,
  //       type: 'minify',
  //     })
  //   }, 100)
  // }
};
