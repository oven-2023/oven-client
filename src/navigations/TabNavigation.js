import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MainScreen, SubscriptionScreen, ChattingScreen, MyPageScreen} from '../screens'

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Main">
        <Tab.Screen name="메인" component={MainScreen} />
        <Tab.Screen name="구독" component={SubscriptionScreen} />
        <Tab.Screen name="채팅" component={ChattingScreen} />
        <Tab.Screen name="마이페이지" component={MyPageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
