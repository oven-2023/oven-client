import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

const MovieRmd = () => {
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
  ];
  const navigation = useNavigation();
  return (
    <Movies showsVerticalScrollIndicator={false} horizontal={true}>
      {searchList.map(({ title, ott }) => {
        return (
          <Movie onPress={() => navigation.navigate('DetailScreen')}>
            <MoviePoster />
            <MovieTitle>{title}</MovieTitle>
          </Movie>
        );
      })}
    </Movies>
  );
};

const Movies = styled.ScrollView`
  margin-top: 20;
  height: 170;
`;

const MoviePoster = styled.View`
  background-color: pink;
  height: 140;
`;

const Movie = styled.TouchableOpacity`
  margin-right: 10px;
  width: 30%;
`;

const MovieTitle = styled.Text`
  font-size: 10px;
  margin-top: 5;
  text-align: center;
`;

export default MovieRmd;
