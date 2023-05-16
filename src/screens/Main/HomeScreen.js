import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components';

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Text onPress={() => navigation.navigate('Login')}>홈</Text>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default HomeScreen;
