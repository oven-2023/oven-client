import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup } from '../screens';

const Navigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      // initialRouteName="Login"
      screenOptions={{
        // headerTitleAlign: 'center',
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }} // 헤더 렌더링 ❌
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }} // 헤더 렌더링 ❌
      />
    </Stack.Navigator>
  );
};

export default Navigation;
