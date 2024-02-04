/* eslint-disable react/no-unstable-nested-components */
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import { Colors } from 'src/themes';
import BottomBar from '../components/bottom-bar';
import IconAdd from '../components/icon-add';
import IconHome from '../components/icon-home';
import IconMedia from '../components/icon-media';
import IconSearch from '../components/icon-search';
import { Tabs } from '../configs/screen';
import CardRouter from './card-router';
import HomeRouter from './home-router';
import ProfileRouter from './profile-router';

const Tab = createBottomTabNavigator();

export default function AppBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        lazy: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.gray[900],
      }}
      initialRouteName={Tabs.HOME}
      tabBar={(props: BottomTabBarProps) => <BottomBar {...props} />}
    >
      <Tab.Screen
        name={Tabs.HOME}
        component={HomeRouter}
        options={{
          tabBarIcon: IconHome,
        }}
      />
      <Tab.Screen
        name={Tabs.SEARCH}
        component={CardRouter}
        options={{
          tabBarIcon: IconSearch,
        }}
      />
      <Tab.Screen
        name={Tabs.ADD}
        component={ProfileRouter}
        options={{
          tabBarIcon: IconAdd,
        }}
      />
      <Tab.Screen
        name={Tabs.MEDIA}
        component={ProfileRouter}
        options={{
          tabBarIcon: IconMedia,
        }}
      />
      <Tab.Screen
        name={Tabs.ACCOUNT}
        component={ProfileRouter}
        options={{
          tabBarIcon: IconHome,
        }}
      />
    </Tab.Navigator>
  );
}
