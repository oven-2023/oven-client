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
import { isSignupModalState, selectedWorkState } from '../../states';
import { BEIGE, BROWN, RED } from '../../css/theme';
import MovieSelection from './MovieSelection';

const AuthModal = ({
  navigation,
  id,
  name,
  password,
  passwordConfirm,
  getWorksAPI,
}) => {
  const [isModalOpened, setIsModalOpened] = useRecoilState(isSignupModalState);
  const [selectedWork, setSelectedWork] = useRecoilState(selectedWorkState);
  const isButtonDisabled = selectedWork.length >= 10;

  const postJoinAPI = async () => {
    if (password !== passwordConfirm) Alert.alert('비밀번호가 다릅니다.');
    else if (
      name === '' ||
      id === '' ||
      password === '' ||
      passwordConfirm === ''
    )
      Alert.alert('모든 정보를 입력하세요.');
    // else if (!isDupChecked) Alert.alert('아이디 중복 체크를 해주세요.');
    else {
      await axios
        .post(`${baseURL}/auth/join`, {
          nickname: name,
          password: password,
          username: id,
          workIdList: selectedWork,
        })
        .then((response) => {
          if (response.data.code != 400) {
            console.log(response);
            Alert.alert('회원가입 완료');
            setIsModalOpened(false);
            setSelectedWork([]);
            navigation.navigate('LoginScreen');
          } else {
            Alert.alert('회원가입을 실패했습니다. 다시 시도하세요.');
          }
        });
    }
  };

  const handleSubmitButtonPress = () => {
    if (isButtonDisabled) {
      postJoinAPI();
    }
  };

  return (
    <ModalContainer animationType="fade">
      <ModalBackground>
        <ModalView style={styles.modalView}>
          <Title>관심 작품 선택하기</Title>
          <SubTitle>10개의 작품을 선택하세요</SubTitle>
          <MovieContainer>
            <MovieSelection getWorksAPI={getWorksAPI} />
          </MovieContainer>
          <ButtonContainer>
            <StyledButton onPress={() => setIsModalOpened(false)}>
              <Close>뒤로가기</Close>
            </StyledButton>
            <StyledButton onPress={handleSubmitButtonPress}>
              <Submit
                disabled={isButtonDisabled}
                activeOpacity={isButtonDisabled ? 1 : 0.7}
              >
                회원가입
              </Submit>
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

const ModalBackground = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${BEIGE};
`;

const ModalView = styled.View`
  width: 90%;
  height: 760px;
  align-items: center;
  position: relative;
`;

const Title = styled.Text`
  font-size: 30px;
  margin-top: 20px;
  font-weight: 700;
  font-family: 'chab';
  color: ${BROWN};
`;

const SubTitle = styled.Text`
  font-size: 20px;
  margin-top: 5px;
  font-weight: 700;
  font-family: 'kotra';
  color: ${RED};
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
  font-weight: 700;
  font-family: 'kotra';
  font-size: ${({ disabled }) => (disabled ? 25 : 20)};
  color: ${({ disabled }) => (disabled ? '#ae0c18' : 'gray')};
`;

const MovieContainer = styled.View`
  justify-content: center;
  width: 100%;
  height: 600px;
  align-items: center;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 40px;
  align-items: center;
  background-color: white;
`;

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
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
