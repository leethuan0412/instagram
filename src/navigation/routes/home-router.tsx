import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from 'src/screens/home';
import { Colors } from 'src/themes';
import Screen from '../configs/screen';
import { HeaderTitleStyle } from '../configs/styles';

const Stack = createNativeStackNavigator();

export default function HomeRouter() {
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
