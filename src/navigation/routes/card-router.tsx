import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Colors } from 'src/themes';
import Screen from '../configs/screen';
import { HeaderTitleStyle } from '../configs/styles';
import HomeScreen from 'src/screens/home';

const Stack = createNativeStackNavigator();

export default function Router() {
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
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
