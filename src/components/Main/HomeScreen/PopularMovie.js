import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

const PopularMovie = () => {
  //테스팅
  const searchList = [
    {
      title: '제목입니다1',
    },
    {
      title: '제목입니다2',
    },
    {
      title: '제목입니다3',
    },
    {
      title: '제목입니다4',
    },
    {
      title: '제목입니다5',
    },
    {
      title: '제목입니다6',
    },
    {
      title: '제목입니다6',
    },
  ];
  const navigation = useNavigation();
  return (
    <MovieContainer showsVerticalScrollIndicator={false} horizontal={true}>
      {searchList.map(({ title }) => {
        return (
          <Movie onPress={() => navigation.navigate('DetailScreen')}>
            <MoviePoster />
            <MovieTitle>{title}</MovieTitle>
          </Movie>
        );
      })}
    </MovieContainer>
  );
};

const MovieContainer = styled.ScrollView`
  margin-top: 20px;
  height: 170;
`;

const MoviePoster = styled.View`
  background-color: white;
  height: 140;
`;

const Movie = styled.TouchableOpacity`
  margin-right: 10px;
  width: 110px;
`;

const MovieTitle = styled.Text`
  font-size: 10px;
  margin-top: 5;
  text-align: center;
  color: white;
  font-weight: 700;
`;

export default PopularMovie;
