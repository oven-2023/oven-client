import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, Button } from 'react-native';
import AuthNavigation from './src/navigations/AuthNavigation';
import TabNavigation from './src/navigations/TabNavigation';
import MainNavigation from './src/navigations/MainNavigation';
import styled from 'styled-components/native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { isLoginState, testState } from './src/states';
import React from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, SignUp, MainStack } from './src/screens';
import SearchScreen from './src/screens/Main/SearchScreen';

export default function Router() {
  const Stack = createStackNavigator();
  const [test, setTest] = useRecoilState(testState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  return (
    <SafeAreaProvider>
      <Container>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator>
            {isLogin ? (
              <>
                <Stack.Screen
                  name="TabNavigation"
                  component={TabNavigation}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="MainNavigation"
                  component={MainNavigation}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SearchScreen"
                  component={SearchScreen}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="AuthNavigation"
                  component={AuthNavigation}
                  options={{ headerShown: false }}
                />
                {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </Container>
    </SafeAreaProvider>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
`;