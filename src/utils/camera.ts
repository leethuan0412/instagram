import { PermissionsAndroid } from 'react-native';
import { Metrics } from 'src/themes';

export async function requestCameraPermission() {
  try {
    if (Metrics.isIOS) {
      return true;
    }

    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'BestOne 카메라 권한',
        message: 'BestOne이 카메라에 액세스해야 합니다.',
        buttonNegative: '취소',
        buttonPositive: '좋아요',
      },
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
}
