import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, DetailScreen } from '../screens';

const MainNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
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
