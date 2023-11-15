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
import AuthModal from '../../components/Auth/AuthModal';
import { useRecoilState } from 'recoil';
import {
  isSignupModalState,
  authWorkState,
  lastWorkIdState,
} from '../../states';

const SignUpScreen = ({ navigation }) => {
  const width = Dimensions.get('window').width;
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isDupChecked, setIsDupChecked] = useState(false);
  const [isModalOpened, setIsModalOpened] = useRecoilState(isSignupModalState);
  const [workList, setWorkList] = useRecoilState(authWorkState);
  const [lastWorkId, setLastWorkId] = useRecoilState(lastWorkIdState);

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

  const getWorksAPI = async () => {
    await axios
      .get(`${baseURL}/auth/join/works`, {
        headers: {},
        params: {
          size: 20,
          workId: lastWorkId,
          keyword: '',
        },
      })
      .then((response) => {
        console.log('get 함수 실행');
        console.log('search', response.data.data.workListDtos);
        const newResults = response.data.data.workListDtos;
        console.log(lastWorkId);
        console.log(workList);

        setWorkList((prevResults) => [...prevResults, ...newResults]);
        // 마지막 workId 업데이트
        setLastWorkId(
          response.data.data.workListDtos[
            response.data.data.workListDtos.length - 1
          ].workId
        );
        setIsModalOpened(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container>
      {isModalOpened ? (
        <AuthModal
          navigation={navigation}
          id={id}
          name={name}
          password={password}
          passwordConfirm={passwordConfirm}
          isDupChecked={isDupChecked}
          getWorksAPI={getWorksAPI}
        />
      ) : (
        <>
          <OvenLogo source={require('../../img/oven_logo.png')} />
          <Title>회원가입</Title>
          <Input
            placeholder="이름"
            value={name}
            onChangeText={HandleChangeName}
          />
          <Relative>
            <Input
              placeholder="아이디"
              value={id}
              onChangeText={HandleChangeId}
            />
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
          <AuthButton text="관심 작품 선택하러 가기" onPress={getWorksAPI} />
        </>
      )}
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
