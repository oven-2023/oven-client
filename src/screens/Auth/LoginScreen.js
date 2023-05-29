import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import Input from '../../components/Auth/Input';
import AuthButton from '../../components/Auth/AuthButton';
import TabNavigation from '../../navigations/TabNavigation';
import { useRecoilState } from 'recoil';
import { isLoginState } from '../../states';

const LoginSreen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const HandleChangeId = (id) => {
    setId(id);
  };
  const HandleChangePassword = (password) => {
    setPassword(password);
  };
  const HandleClickLogin = () => {
    // 로그인 api 연결
    navigation.navigate('TabNavigation');
    setIsLogin(true);
  };

  return (
    <Container>
      <Title>로그인</Title>
      <Input placeholder="아이디" value={id} onChangeText={HandleChangeId} />
      <Input
        placeholder="비밀번호"
        value={password}
        onChangeText={HandleChangePassword}
        secureTextEntry={true}
      />
      <AuthButton
        text="로그인"
        onPress={HandleClickLogin}
      />
      <Button
        title="회원가입"
        onPress={() => navigation.navigate('Signup')}
        isFilled={false}
      />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Title = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export default LoginSreen;
