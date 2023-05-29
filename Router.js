import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, Button } from 'react-native';
import AuthNavigation from './src/navigations/AuthNavigation';
import TabNavigation from './src/navigations/TabNavigation';
import styled from 'styled-components/native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { isLoginState } from './src/states';
import React from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, SignUpScreen, MainStack } from './src/screens';
import { HomeScreen } from './src/screens';
import SearchScreen from './src/screens/Main/SearchScreen';
import DetailScreen from './src/screens/Main/DetailScreen';
import { MyPageScreen } from './src/screens';
import { MyHeartScreen } from './src/screens';
import { MyStarScreen } from './src/screens';

export default function Router() {
  const Stack = createStackNavigator();
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
                  options={{ headerShown: false, title: '메인 화면' }}
                />
                <Stack.Screen
                  name="HomeScreen"
                  component={HomeScreen}
                  options={{ headerShown: false, title: '메인 화면' }}
                />
                <Stack.Screen
                  name="SearchScreen"
                  component={SearchScreen}
                  options={{
                    title: '작품 검색',
                  }}
                />
                <Stack.Screen
                  name="DetailScreen"
                  component={DetailScreen}
                  // initialParams={{ workId: 1 }}
                  options={{
                    title: '작품 상세 보기',
                  }}
                />
                <Stack.Screen
                  name="MyPageScreen"
                  component={MyPageScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="MyHeartScreen"
                  component={MyHeartScreen}
                  options={{
                    title: '내가 찜한 작품',
                  }}
                />
                <Stack.Screen
                  name="MyStarScreen"
                  component={MyStarScreen}
                  options={{
                    title: '내가 평가한 작품',
                  }}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="AuthNavigation"
                  component={AuthNavigation}
                  options={{ headerShown: false }}
                />
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
