import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from 'react-native';
import Input from '../../components/Auth/Input';
import styled from 'styled-components';
import AuthButton from '../../components/Auth/AuthButton';

const Signup = ({ navigation }) => {
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

  const HandleClickSignup = (passwordConfirm) => {
    setPasswordConfirm(passwordConfirm);
  };

  return (
    <Container>
      <Text>회원가입</Text>
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
      <AuthButton text="회원가입" onClick={HandleClickSignup} />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Signup;
