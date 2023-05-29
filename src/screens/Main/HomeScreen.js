import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { FontAwesome } from '@expo/vector-icons';
import OttRmd from '../../components/Main/HomeScreen/OttRmd';
import MovieRmd from '../../components/Main/HomeScreen/MovieRmd';
import { userState } from '../../states';
import { ScrollView } from 'react-native-gesture-handler';
import PopularMovie from '../../components/Main/HomeScreen/PopularMovie';

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useRecoilState(userState);
  return (
    <Container>
      <ScrollView>
        <Centralizer>
          <Top>
            <Oven>Oven</Oven>
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
            <PopularMovie />
          </Bottom>
          <Bottom>
            <Title>
              <User>{user}</User> 님 맞춤 추천작
            </Title>
            <MovieRmd />
          </Bottom>
        </Centralizer>
      </ScrollView>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: black;
`;

const Centralizer = styled.View`
justify-content: center;
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
  color: white;
  font-weight: 700;
`;

const Title = styled.Text`
  font-size: 25;
  color: white;
  font-weight: 700;
`;

const User = styled.Text`
  font-size: 30;
  color: #ae0c18;
`;

const SearchButton = styled(FontAwesome)`
  margin-left: auto;
  margin-right: 20;
  margin-top: 10;
  align-items: center;
  color: white;
`;

export default HomeScreen;
