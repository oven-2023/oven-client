import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, Button } from 'react-native';
import TabNavigation from './src/navigations/TabNavigation';
import styled from 'styled-components/native';
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
import ChatHomeScreen from './src/screens/Chat/ChatHomeScreen';
import ChatRoomScreen from './src/screens/Chat/ChatRoomScreen';
import { SubscriptionScreen } from './src/screens';
import { MkSubRoomScreen } from './src/screens';
import * as Font from 'expo-font';

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
                  options={{
                    headerShown: false,
                    title: '메인 화면',
                  }}
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
                  initialParams={{ workId: 1 }}
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
                <Stack.Screen
                  name="ChatHomeScreen"
                  component={ChatHomeScreen}
                  options={{
                    title: '채팅 홈',
                  }}
                />
                <Stack.Screen
                  name="ChatRoomScreen"
                  component={ChatRoomScreen}
                  options={{
                    title: '채팅 방',
                  }}
                />
                <Stack.Screen
                  name="SubScriptionScreen"
                  component={SubscriptionScreen}
                  options={{
                    title: '구독 홈',
                  }}
                />
                <Stack.Screen
                  name="MkSubRoomScreen"
                  component={MkSubRoomScreen}
                  options={{
                    title: '구독 생성',
                  }}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="LoginScreen"
                  component={LoginScreen}
                  options={{
                    headerShown: false, // 헤더 렌더링 ❌
                    title: '로그인',
                  }}
                />
                <Stack.Screen
                  name="SignUpScreen"
                  component={SignUpScreen}
                  options={{
                    title: '회원가입',
                  }}
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
