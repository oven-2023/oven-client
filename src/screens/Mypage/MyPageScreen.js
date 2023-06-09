import React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import styled from 'styled-components';
import { isLoginState } from '../../states/index';
import { useRecoilState } from 'recoil';
import { FontAwesome } from '@expo/vector-icons';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

const MyPageScreen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const HandleLogout = () => {
    setIsLogin(false);
    // AsyncStorage.removeItem(token);
    navigation.navigate('LoginScreen');
  };

  return (
    <Container>
      <Title>마이페이지</Title>
      <ButtonContainer>
        <MenuButton
          isFiled={false}
          onPress={() => navigation.navigate('MyHeartScreen')}
        >
          <FontAwesome name="heart" size={34} color="black" />
          <MenuText> 내가 찜한 작품 보기</MenuText>
        </MenuButton>
        <MenuButton
          isFiled={false}
          onPress={() => navigation.navigate('MyStarScreen')}
        >
          <FontAwesome name="star" size={34} color="black" />
          <MenuText> 내가 평가한 작품 보기</MenuText>
        </MenuButton>
        <LogoutButton isFiled={false} onPress={HandleLogout}>
          <MenuText>로그아웃</MenuText>
        </LogoutButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: black;
`;

const ButtonContainer = styled.View`
  margin-top: 30px;
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  font-size: 40px;
  font-weight: 700;
  margin-top: 10px;
  margin-left: 30;
`;

const MenuButton = styled.TouchableOpacity`
  height: 50px;
  width: 80%;
  background-color: whitesmoke;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const LogoutButton = styled(MenuButton)`
  background-color: #ae0c18;
`;

const MenuText = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: 700;
`;

export default MyPageScreen;
