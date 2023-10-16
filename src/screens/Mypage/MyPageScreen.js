import React from 'react';
import { View, Text, SafeAreaView, Button, Alert } from 'react-native';
import styled from 'styled-components';
import { userState } from '../../states/index';
import { isLoginState } from '../../states/index';
import { useRecoilState } from 'recoil';
import { FontAwesome } from '@expo/vector-icons';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import MainLayout from '../../components/Layout/MainLayout';
import { BEIGE, RED, BROWN, ORANGE, GREEN } from '../../css/theme';
import DashedHorizonalLine from '../../css/DashedHorizonalLine';

const MyPageScreen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [name] = useRecoilState(userState);

  const HandleLogout = async () => {
    try {
      setIsLogin(false);
      await AsyncStorage.removeItem(accessToken);
      await AsyncStorage.removeItem(refreshToken);
      // navigation.navigate('LoginScreen');
      console.log('로그아웃 성공');
    } catch {}
  };

  return (
    <MainLayout>
      <Title>마이페이지</Title>
      <ButtonContainer>
        <ProfileBox>
          <FontAwesome name="user" size={70} color={BEIGE} />
          <ProfileText>{name}</ProfileText>
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
        <LogoutButton isFiled={false} onPress={HandleLogout}>
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
  margin-top: 20px;
  margin-right: auto;
  margin-left: 20;
  font-family: 'dunggeunmo';
  color: ${BEIGE};
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
  font-size: 20px;
  font-weight: 700;
  font-family: 'dunggeunmo';
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
  margin-left: 45px;
`;

export default MyPageScreen;
