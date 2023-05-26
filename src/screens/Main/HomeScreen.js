import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isLoginState } from '../../states';
import { FontAwesome } from '@expo/vector-icons';
import OttRmd from '../../components/Main/HomeScreen/OttRmd';
import MovieRmd from '../../components/Main/HomeScreen/MovieRmd';

const HomeScreen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const HandleClickHome = () => {
    navigation.navigate('Login');
    setIsLogin(false);
  };
  return (
    <Container>
      <Top>
        <Oven onPress={HandleClickHome}>Oven</Oven>
        <SearchButton
          name="search"
          size={34}
          color="black"
          onPress={() => navigation.navigate('SearchScreen')}
        />
      </Top>
      <OttRmd />
      <Bottom>
        <Title>실시간 인기작</Title>
        <MovieRmd />
      </Bottom>
      <Bottom>
        <Title>000님 맞춤 추천작</Title>
        <MovieRmd />
      </Bottom>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const Top = styled.View`
  width: 100%;
  flex-direction: row;
`;

const Bottom = styled.View`
  width: 80%;
  flex-direction: column;
  margin-top: 20px;
`;

const Oven = styled.Text`
  font-size: 50;
  margin-left: 30;
`;

const Title = styled.Text`
  font-size: 30;
  /* align-items: flex-start; */
`;

const SearchButton = styled(FontAwesome)`
  margin-left: auto;
  margin-right: 20;
  margin-top: 10;
  align-items: center;
`;

export default HomeScreen;
