import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, Button } from 'react-native';
import Navigation from './src/navigations/Stack';
import TabNavigation from './src/navigations/TabNavigation';
import styled from 'styled-components/native';
import { useState } from 'react';

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Container>
      <StatusBar style="auto" />
      {isLogin ? <TabNavigation /> : <Navigation />}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
`;
