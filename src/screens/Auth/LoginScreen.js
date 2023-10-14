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
import { BEIGE, BROWN, RED, ORANGE } from '../../css/theme';
import SplashLogo from '../../components/Layout/SplashLogo';

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

  // const storeData = (key, value) => {
  //   try {
  //     AsyncStorage.setItem(key, value);
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // };

  // AsyncStorage.getItem('key').then((value) => {
  //   console.log(value);
  // });

  const postLoginAPI = async () => {
    await axios
      .post(`${baseURL}/auth/login`, {
        password: password,
        username: id,
      })
      .then((response) => {
        console.log(response.data.data.accessToken);
        AsyncStorage.setItem('accessToken', response.data.data.accessToken);
        AsyncStorage.setItem('refreshToken', response.data.data.refreshToken);
        // storeData('accessToken', response.data.data.accessToken);
        // storeData('accessToken', response.data.data.refreshToken);
        // AsyncStorage.setItem(
        //   'accessToken',
        //   JSON.stringify(response.data.data.accessToken)
        // );
        // AsyncStorage.setItem(
        //   'refreshToken',
        //   JSON.stringify(response.data.data.refreshToken)
        // );
        setIsLogin(true);
        navigation.navigate('HomeScreen');
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert('로그인 실패');
      });
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
  font-family: 'dunggeunmo';
`;

const Title = styled.Text`
  color: ${BROWN};
  font-size: 30px;
  font-weight: 500;
  margin: 20px 0px;
  font-family: 'dunggeunmo';
`;

const OvenLogo = styled.Image`
  width: 100px;
  height: 100px;
`;

export default LoginScreen;
