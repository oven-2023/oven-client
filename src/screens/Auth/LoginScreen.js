import React, { useState, useEffect } from 'react';
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
import { isLoginState, userState, useridState } from '../../states';
import axios from 'axios';
import { baseURL } from '../../api/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BEIGE, BROWN, RED, ORANGE } from '../../css/theme';
import SplashLogo from '../../components/Layout/SplashLogo';

const LoginScreen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [user, setUser] = useRecoilState(userState);
  const [userid, setUserid] = useRecoilState(useridState);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const HandleChangeId = (id) => {
    setId(id);
  };
  const HandleChangePassword = (password) => {
    setPassword(password);
  };

  const postLoginAPI = async () => {
    if ((id !== '') & (password !== '')) {
      await axios
        .post(`${baseURL}/auth/login`, {
          password: password,
          username: id,
        })
        .then((response) => {
          console.log('username', response.data.data);
          AsyncStorage.setItem(
            'accessToken',
            response.data.data.jwtTokenResponse.accessToken
          );
          AsyncStorage.setItem(
            'refreshToken',
            response.data.data.jwtTokenResponse.refreshToken
          );
          setUser(response.data.data.nickname);
          setUserid(response.data.data.username);
          setIsLogin(true);
        })
        .catch(function (error) {
          console.log(error);
          Alert.alert('아이디나 비밀번호가 잘못되었습니다');
          setId('');
          setPassword('');
        });
    } else Alert.alert('아이디와 비밀번호를 모두 입력하세요');
  };

  return (
    <Container>
      <SplashLogo />
      {/* <OvenText>Oven</OvenText> */}
      <Title>로그인</Title>
      <Input placeholder="아이디" value={id} onChangeText={HandleChangeId} />
      <Input
        placeholder="비밀번호"
        value={password}
        onChangeText={HandleChangePassword}
        secureTextEntry={true}
      />
      <AuthButton text="로그인" onPress={postLoginAPI} />
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
  background-color: ${BEIGE};
`;

const OvenText = styled.Text`
  color: ${ORANGE};
  font-size: 70px;
  font-weight: 800;
  margin: 20px 0px;
  font-family: 'chab';
`;

const Title = styled.Text`
  color: ${BROWN};
  font-size: 40px;
  font-weight: 500;
  margin: 20px 0px;
  font-family: 'chab';
`;

const OvenLogo = styled.Image`
  width: 100px;
  height: 100px;
`;

export default LoginScreen;
