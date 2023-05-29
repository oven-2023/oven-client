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
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { baseURL } from '../../api/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
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
    // postLoginAPI(); // 로그인 api 연결
    setIsLogin(true);
    navigation.navigate('HomeScreen');
  };

  const postLoginAPI = async () => {
    await axios
      .post(`${baseURL}/login`, {
        headers: {
          'Content-Type': `application/json`,
          password: password,
          userName: id,
        },
      })
      .then((response) => {
        console.log(response);
        // AsyncStorage.setItem('token', JSON.stringify(response.data));
        setIsLogin(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container>
      <Title>Oven</Title>
      <Title>로그인</Title>
      <Input placeholder="아이디" value={id} onChangeText={HandleChangeId} />
      <Input
        placeholder="비밀번호"
        value={password}
        onChangeText={HandleChangePassword}
        secureTextEntry={true}
      />
      <AuthButton text="로그인" onPress={HandleClickLogin} />
      <Button
        title="회원가입"
        onPress={() => navigation.navigate('SignUpScreen')}
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

export default LoginScreen;
