import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, SearchScreen, DetailScreen } from '../screens';

const MainNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={
        {
          // headerTitleAlign: 'center',
          // headerShown: false,
        }
      }
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }} // 헤더 렌더링 ❌
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false }} // 헤더 렌더링 ❌
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ headerShown: false }} // 헤더 렌더링 ❌
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
