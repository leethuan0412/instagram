import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

export default function useSplashScreen() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
}
