import React from 'react';
import { View, Text, SafeAreaView, Button, Alert } from 'react-native';
import styled from 'styled-components';
import { isLoginState } from '../../states/index';
import { useRecoilState } from 'recoil';
import { FontAwesome } from '@expo/vector-icons';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import MainLayout from '../../components/Layout/MainLayout';
import { BEIGE, RED, BROWN } from '../../css/theme';

const MyPageScreen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const HandleLogout = async () => {
    try {
      setIsLogin(false);
      await AsyncStorage.removeItem(token);
      navigation.navigate('LoginScreen');
    } catch {
      Alert.alert('다시 시도하세요');
    }
  };

  return (
    <MainLayout>
      <Title>마이페이지</Title>
      <ButtonContainer>
        <MenuButton
          isFiled={false}
          onPress={() => {
            navigation.navigate('MyHeartScreen');
          }}
        >
          <FontAwesome name="heart" size={34} color={BEIGE} />
          <MenuText> 내가 찜한 작품 보기</MenuText>
        </MenuButton>
        <MenuButton
          isFiled={false}
          onPress={() => navigation.navigate('MyStarScreen')}
        >
          <FontAwesome name="star" size={34} color={BEIGE} />
          <MenuText> 내가 평가한 작품 보기</MenuText>
        </MenuButton>
        <LogoutButton isFiled={false} onPress={HandleLogout}>
          <FontAwesome name="sign-out" size={34} color={BEIGE} />
          <MenuText style={{ color: 'white' }}>로그아웃</MenuText>
        </LogoutButton>
      </ButtonContainer>
    </MainLayout>
  );
};

const ButtonContainer = styled.View``;

const Title = styled.Text`
  font-size: 30px;
  font-weight: 700;
  margin-top: 20px;
  margin-right: auto;
  margin-left: 20;
  font-family: 'dunggeunmo';
`;

const MenuButton = styled.TouchableOpacity`
  height: 60px;
  width: 290px;
  background-color: white;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const LogoutButton = styled(MenuButton)`
  background-color: ${BROWN};
`;

const MenuText = styled.Text`
  color: ${BROWN};
  font-size: 20px;
  font-weight: 700;
  font-family: 'dunggeunmo';
  margin-left: 5px;
`;

export default MyPageScreen;
