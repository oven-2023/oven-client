import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen, SubscriptionScreen, ChattingScreen, MyPageScreen} from '../screens'

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
      <Tab.Navigator initialRouteName="HomeScreen">
        <Tab.Screen name="홈" component={HomeScreen} />
        <Tab.Screen name="구독" component={SubscriptionScreen} />
        <Tab.Screen name="채팅" component={ChattingScreen} />
        <Tab.Screen name="마이페이지" component={MyPageScreen} />
      </Tab.Navigator>
  );
};

export default TabNavigation;
