import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Button, Alert } from 'react-native';
import styled from 'styled-components';
import { userState } from '../../states/index';
import { isLoginState } from '../../states/index';
import { useRecoilState } from 'recoil';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainLayout from '../../components/Layout/MainLayout';
import { BEIGE, RED, BROWN, ORANGE, GREEN } from '../../css/theme';
import DashedHorizonalLine from '../../css/DashedHorizonalLine';
import { baseURL } from '../../api/client';
import axios from 'axios';

const MyPageScreen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [user, setUser] = useRecoilState(userState);
  const [refreshToken, setRefreshToken] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('refreshToken')
      .then((value) => {
        setRefreshToken(value);
      })
      .catch((error) => {
        console.log('Error getting access token:', error);
      });
  }, []);

  const postLogoutAPI = async () => {
    await axios
      .post(`${baseURL}/auth/logout`, {
        refreshToken: refreshToken,
      })
      .then((response) => {
        console.log(response.data);
        setUser('');
        setIsLogin(false);
        AsyncStorage.removeItem(accessToken);
        AsyncStorage.removeItem(refreshToken);
        console.log('로그아웃 성공');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <MainLayout>
      <Title>마이페이지</Title>
      <ButtonContainer>
        <ProfileBox>
          <FontAwesome name="user" size={70} color={BEIGE} />
          <ProfileText numberOfLines={2}>{user}</ProfileText>
        </ProfileBox>
        <DashedHorizonalLine />
        <MenuButton
          isFiled={false}
          onPress={() => {
            navigation.navigate('MyHeartScreen');
          }}
        >
          <FontAwesome name="heart" size={34} color={BROWN} />
          <MenuText> 내가 찜한 작품 보기</MenuText>
        </MenuButton>
        <MenuButton
          isFiled={false}
          onPress={() => navigation.navigate('MyStarScreen')}
        >
          <FontAwesome name="star" size={34} color={BROWN} />
          <MenuText> 내가 평가한 작품 보기</MenuText>
        </MenuButton>
        <LogoutButton isFiled={false} onPress={postLogoutAPI}>
          <FontAwesome name="sign-out" size={34} color={BEIGE} />
          <MenuText style={{ color: BEIGE }}>로그아웃</MenuText>
        </LogoutButton>
      </ButtonContainer>
    </MainLayout>
  );
};

const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: 35;
  font-family: 'chab';
  color: ${BROWN};
`;

const MenuButton = styled.TouchableOpacity`
  height: 60px;
  width: 350px;
  background-color: white;
  border-radius: 20px;
  align-items: center;
  flex-direction: row;
  margin: 20px 0px;
  padding-left: 50px;
`;

const LogoutButton = styled(MenuButton)`
  background-color: ${BROWN};
  justify-content: center;
  padding: 0px;
  margin-top: 20px;
`;

const MenuText = styled.Text`
  color: ${BROWN};
  font-size: 25px;
  font-weight: 700;
  font-family: 'kotra';
  margin-left: 5px;
`;

const ProfileBox = styled.View`
  background-color: ${GREEN};
  width: 350px;
  height: 100px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  padding-left: 50px;
  margin-bottom: 30px;
`;

const ProfileText = styled(MenuText)`
  color: ${BEIGE};
  font-size: 35px;
  margin-left: 30px;
  align-items: center;
  max-width: 200px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export default MyPageScreen;
