import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  SubscriptionScreen,
  ChatHomeScreen,
  MyPageScreen,
} from '../screens';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      independent={true}
      tabBarOptions={{
        activeTintColor: '#d72201',
        inactiveTintColor: '#4f2416',
        shadowOpacity: 0.7,
        shadowRadius: 40,
        elevation: 24,
      }}
      screenOptions={{
        tabBarStyle: { backgroundColor: 'white' },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: '홈',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="subscription"
        component={SubscriptionScreen}
        options={{
          headerShown: false,
          title: '구독',
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="chathome"
        component={ChatHomeScreen}
        options={{
          headerShown: false,
          title: '채팅',
          tabBarIcon: ({ color }) => (
            <Icon name="message" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="mypage"
        component={MyPageScreen}
        options={{
          headerShown: false,
          title: '내 정보',
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
