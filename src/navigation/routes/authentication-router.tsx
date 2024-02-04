import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Colors, Fonts } from 'src/themes';
import Screen from '../configs/screen';
import SignInScreen from 'src/screens/auth/sign-in';

const Stack = createNativeStackNavigator();

export default function AuthRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: Colors.white,
        },
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: Fonts.weight.semibold as any,
          fontSize: Fonts.size.H0,
          color: Colors.black,
        },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name={Screen.LOGIN} component={SignInScreen} />
    </Stack.Navigator>
  );
}
