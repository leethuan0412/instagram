import { NavigationContainer } from '@react-navigation/native';
import React, { forwardRef } from 'react';
import { useAuthState } from 'src/store/reducer/auth-reducer';
import AuthRouter from './routes/authentication-router';
// import AppNavigator from './app-navigator';
import AppNavigator from './app-navigator';

export default forwardRef(function App(_, ref: any) {
  const [{ accessToken }] = useAuthState();

  return (
    <NavigationContainer ref={ref}>
      {accessToken ? <AppNavigator /> : <AuthRouter />}
    </NavigationContainer>
  );
});
