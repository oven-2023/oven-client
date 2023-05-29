import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, Signup } from '../screens';

const AuthNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false, // 헤더 렌더링 ❌
          title: '로그인',
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          title: '회원가입',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
