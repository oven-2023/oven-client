import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { FontAwesome } from '@expo/vector-icons';
import OttRmd from '../../components/Main/HomeScreen/OttRmd';
import MovieRmd from '../../components/Main/HomeScreen/MovieRmd';
import { isLoginState, userState } from '../../states';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import PopularMovie from '../../components/Main/HomeScreen/PopularMovie';
import MainLayout from '../../components/Layout/MainLayout';

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useRecoilState(userState);

  return (
    <MainLayout>
      <Scroller>
          <SearchButton
            name="search"
            size={34}
            color="black"
            onPress={() => navigation.navigate('SearchScreen')}
          />
        <Centralizer>
          <OttRmd />
          <Bottom>
            <Title>실시간 인기작</Title>
            <PopularMovie />
          </Bottom>
          <Bottom>
            <Title>
              <User>{user}</User> 님 맞춤 추천작
            </Title>
            <MovieRmd />
          </Bottom>
        </Centralizer>
      </Scroller>
    </MainLayout>
  );
};

const Centralizer = styled.View`
  align-items: center;
`;

const Scroller = styled.ScrollView`
  width: 100%;
`;

const Bottom = styled.View`
  width: 80%;
  flex-direction: column;
  margin-top: 20px;
`;

const Title = styled.Text`
  font-size: 25;
  font-weight: 700;
  font-family: 'dunggeunmo';
`;

const User = styled.Text`
  font-size: 30;
  color: #ae0c18;
`;

const SearchButton = styled(FontAwesome)`
  margin-left: auto;
  margin-right: 20;
  margin-top: 0;
  align-items: center;
`;

export default HomeScreen;
