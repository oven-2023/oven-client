import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';
import Input from '../../components/Auth/Input';
import styled from 'styled-components';
import AuthButton from '../../components/Auth/AuthButton';
import axios from 'axios';
import { baseURL } from '../../api/client';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const HandleChangeName = (name) => {
    setName(name);
  };

  const HandleChangeId = (id) => {
    setId(id);
  };

  const HandleChangePassword = (password) => {
    setPassword(password);
  };

  const HandleChangePasswordConfirm = (passwordConfirm) => {
    setPasswordConfirm(passwordConfirm);
  };

  const postJoinAPI = async () => {
    await axios
      .post(`${baseURL}/join`, {
          nickName: name,
          password: password,
          pwConfirm: passwordConfirm,
          userName: id,
      })
      .then((response) => {
        console.log(response);
        Alert.alert('회원가입 완료');
        navigation.navigate('LoginScreen');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <Input placeholder="이름" value={name} onChangeText={HandleChangeName} />
      <Input placeholder="아이디" value={id} onChangeText={HandleChangeId} />
      <Input
        placeholder="비밀번호"
        value={password}
        onChangeText={HandleChangePassword}
        secureTextEntry={true}
      />
      <Input
        placeholder="비밀번호 확인"
        value={passwordConfirm}
        onChangeText={HandleChangePasswordConfirm}
        secureTextEntry={true}
      />
      <AuthButton text="회원가입" onPress={postJoinAPI} />
    </Container>
  );
};

const Title = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export default SignUpScreen;
