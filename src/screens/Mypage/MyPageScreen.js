import React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import styled from 'styled-components';
import { isLoginState } from '../../states/index';
import { useRecoilState } from 'recoil';

const MyPageScreen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const HandleChangePassword = () => {
    setIsLogin(false);
    navigation.navigate('LoginScreen');
  };

  return (
    <Container>
      <Button title="로그아웃" onPress={HandleChangePassword}></Button>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: black;
`;

export default MyPageScreen;
