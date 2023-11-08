import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
} from 'react-native';
import Input from '../../components/Auth/Input';
import styled from 'styled-components';
import AuthButton from '../../components/Auth/AuthButton';
import axios from 'axios';
import { baseURL } from '../../api/client';
import { BEIGE, BROWN, ORANGE } from '../../css/theme';

const SignUpScreen = ({ navigation }) => {
  const width = Dimensions.get('window').width;
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isDupChecked, setIsDupChecked] = useState(false);

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

  const postDuplicateAPI = async () => {
    if (id !== '') {
      await axios
        .post(`${baseURL}/auth/id/exists`, {
          username: id,
        })
        .then((response) => {
          console.log(response.data.data.idExists);
          if (response.data.data.idExists) {
            Alert.alert('사용 중인 아이디입니다');
            setId('');
          } else {
            Alert.alert('사용 가능한 아이디입니다');
            setIsDupChecked(true);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else Alert.alert('아이디를 입력하세요');
  };

  const postJoinAPI = async () => {
    if (password !== passwordConfirm) Alert.alert('비밀번호가 다릅니다.');
    else if (
      name === '' ||
      id === '' ||
      password === '' ||
      passwordConfirm === ''
    )
      Alert.alert('모든 정보를 입력하세요.');
    else if (!isDupChecked) Alert.alert('아이디 중복 체크를 해주세요.');
    else {
      await axios
        .post(`${baseURL}/auth/join`, {
          nickname: name,
          password: password,
          username: id,
        })
        .then((response) => {
          console.log(response);
          Alert.alert('회원가입 완료');
          navigation.navigate('LoginScreen');
        })
        .catch(function (error) {
          console.log(error);
          Alert.alert('회원가입을 실패했습니다. 다시 시도하세요.');
        });
    }
  };

  return (
    <Container>
      <OvenLogo source={require('../../img/oven_logo.png')} />
      <Title>회원가입</Title>
      <Input placeholder="이름" value={name} onChangeText={HandleChangeName} />
      <Relative>
        <Input placeholder="아이디" value={id} onChangeText={HandleChangeId} />
        <DuplicateButton onPress={postDuplicateAPI}>
          <DuplicationText>중복 체크</DuplicationText>
        </DuplicateButton>
      </Relative>
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
  color: ${BROWN};
  font-size: 40px;
  font-weight: 800;
  margin: 20px 0px;
  font-family: 'chab';
`;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${BEIGE};
`;

const OvenLogo = styled.Image`
  width: 250px;
  height: 100px;
  object-fit: contain;
`;

const Relative = styled.View`
  position: relative;
`;

const DuplicateButton = styled.TouchableOpacity`
  width: 100px;
  height: 35px;
  background-color: ${ORANGE};
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 15px;
  top: 18px;
`;

const DuplicationText = styled.Text`
  color: white;
  font-family: 'kotra';
  font-size: 16px;
`;

export default SignUpScreen;
