import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup, HomeScreen } from '../screens';

const Navigation = () => {
  const Stack = createStackNavigator();

  return (
      <Stack.Navigator
        // initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: 'center',
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
          // options={{ headerBackTitleVisible: false }} // 뒤로가기 이름
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
};

export default Navigation;
