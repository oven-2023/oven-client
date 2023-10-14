import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { FontAwesome } from '@expo/vector-icons';
import OttRmd from '../../components/Main/HomeScreen/OttRmd';
import MovieRmd from '../../components/Main/HomeScreen/MovieRmd';
import { userState } from '../../states';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import PopularMovie from '../../components/Main/HomeScreen/PopularMovie';
import MainLayout from '../../components/Layout/MainLayout';
import { ORANGE, BROWN } from '../../css/theme';

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useRecoilState(userState);

  return (
    <MainLayout>
      <Scroller>
        <SearchButton
          name="search"
          size={34}
          color={BROWN}
          onPress={() => navigation.navigate('SearchScreen')}
        />
        <Centralizer>
          <Bottom>
            <Title>이번달 나에게 맞는 OTT</Title>
            <OttRmd />
          </Bottom>
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
  flex-direction: column;
  margin-top: 20px;
  width: 80%;
`;

const Title = styled.Text`
  font-size: 25;
  font-weight: 700;
  font-family: 'dunggeunmo';
  color: ${BROWN};
`;

const User = styled.Text`
  font-size: 30;
  color: ${ORANGE};
`;

const SearchButton = styled(FontAwesome)`
  margin-left: auto;
  margin-right: 20;
  margin-top: 0;
  align-items: center;
`;

export default HomeScreen;
