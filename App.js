import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, Button } from 'react-native';
import Navigation from './src/navigations/Stack';
import TabNavigation from './src/navigations/TabNavigation';
import styled from 'styled-components/native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { isLoginState } from './src/states';
import React from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, SignUp } from './src/screens';

export default function App() {
  const Stack = createStackNavigator();
  const [isLogin, setIsLogin] = useState(false);
  return (
    <SafeAreaProvider>
      {/* <RecoilRoot> */}
      <Container>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator>
            {isLogin ? (
              <Stack.Screen
                name="TabNavigation"
                component={TabNavigation}
                options={{ headerShown: false }}
              />
            ) : (
              // <Stack.Screen
              //   name="Navigation"
              //   component={Navigation}
              //   options={{ headerShown: false }}
              // />
              <>
                <Stack.Screen
                  name="TabNavigation"
                  component={TabNavigation}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="Login" component={Login} />
                {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </Container>
      {/* </RecoilRoot> */}
    </SafeAreaProvider>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
`;
