import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Colors } from 'src/themes';
import { requestCameraPermission } from 'src/utils/camera';
import Screen from '../configs/screen';
import { HeaderTitleStyle } from '../configs/styles';
import HomeScreen from 'src/screens/home';

const Stack = createNativeStackNavigator();

export default function ProfileRouter() {
  useEffect(() => {
    requestCameraPermission();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: Colors.white,
        },
        headerTitleStyle: HeaderTitleStyle,
        headerTitleAlign: 'left',
      }}
    >
      <Stack.Screen
        name={Screen.HOME}
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}
