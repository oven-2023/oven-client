import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup } from '../screens';

const Navigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
