import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  SubscriptionScreen,
  ChattingScreen,
  MyPageScreen,
} from '../screens';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      independent={true}
    >
      <Tab.Screen
        name="홈"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="구독"
        component={SubscriptionScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="채팅"
        component={ChattingScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="마이페이지"
        component={MyPageScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
