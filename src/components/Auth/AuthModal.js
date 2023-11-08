import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Button,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Alert,
} from 'react-native';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { baseURL } from '../../api/client';
import { isSignupModalState } from '../../states';
import { BEIGE, BROWN } from '../../css/theme';
import SearchResult from '../Main/SearchScreen/SearchResult';
import MovieSelection from './MovieSelection';

const AuthModal = ({ navigation, id, name, password, passwordConfirm }) => {
  const [isModalOpened, setIsModalOpened] = useRecoilState(isSignupModalState);

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
          setIsModalOpened(false);
          navigation.navigate('LoginScreen');
        })
        .catch(function (error) {
          console.log(error);
          Alert.alert('회원가입을 실패했습니다. 다시 시도하세요.');
        });
    }
  };

  return (
    <ModalContainer animationType="fade">
      <ModalBackground>
        <ModalView style={styles.modalView}>
          <Title>관심 작품 선택하기</Title>
          <MovieContainer>
            <MovieSelection />
          </MovieContainer>
          <ButtonContainer>
            <StyledButton onPress={() => setIsModalOpened(false)}>
              <Close>뒤로가기</Close>
            </StyledButton>
            <StyledButton onPress={postJoinAPI}>
              <Submit>등록</Submit>
            </StyledButton>
          </ButtonContainer>
        </ModalView>
      </ModalBackground>
    </ModalContainer>
  );
};

const ModalContainer = styled(Modal)`
  flex: 1;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ModalBackground = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${BEIGE};
`;

const ModalView = styled.SafeAreaView`
  width: 80%;
  height: 750px;
  border-radius: 20px;
  align-items: center;
  position: relative;
  background-color: white;
`;

const Title = styled.Text`
  font-size: 30px;
  margin-top: 20px;
  font-weight: 700;
  font-family: 'chab';
  color: ${BROWN};
`;

const Stars = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

const StyledButton = styled.TouchableOpacity``;

const Close = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${BROWN};
  font-family: 'kotra';
  justify-content: center;
  align-items: center;
`;

const Submit = styled.Text`
  font-size: 20px;
  color: #ae0c18;
  font-weight: 700;
  font-family: 'kotra';
`;

const MovieContainer = styled.View`
  /* flex-direction: row; */
  justify-content: center;
  width: 100%;
  height: 600px;
  align-items: center;
  background-color: pink;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 70px;
  margin-top: auto;
  align-items: center;
`;

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default AuthModal;
