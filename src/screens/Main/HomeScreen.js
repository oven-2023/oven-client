import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isLoginState } from '../../states';

const HomeScreen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const HandleClickHome = () => {
    navigation.navigate('Login');
    setIsLogin(false);
  };
  return (
    <Container>
      <Text onPress={HandleClickHome}>홈</Text>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default HomeScreen;
