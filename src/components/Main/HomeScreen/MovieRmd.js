import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

const MovieRmd = () => {
  //테스팅
  const searchList = [
    {
      title: '제목1',
      ott: 'netflix1',
      detail: '설명1',
      src: 'src1',
    },
    {
      title: '제목2',
      ott: 'netflix2',
      detail: '설명2',
      src: 'src2',
    },
    {
      title: '제목3',
      ott: 'netflix3',
      detail: '설명3',
      src: 'src3',
    },
    {
      title: '제목4',
      ott: 'netflix4',
      detail: '설명4',
      src: 'src4',
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
              <MovieDetail>{ott}</MovieDetail>
            </Movie>
          );
        })}
      </Movies>
  );
};

const Movies = styled.ScrollView`
  margin-top: 20;
  height: 150;
`;

const MoviePoster = styled.View`
  background-color: pink;
  height: 100;
`;

const Movie = styled.TouchableOpacity`
  border: 2px solid;
  width: 40%;
  margin-right: 10px;
`;

const MovieTitle = styled.Text`
  font-size: 10px;
  margin-top: 5;
  margin-left: 10;
`;

const MovieDetail = styled.Text`
  font-size: 10px;
  margin-left: 10;
`;

export default MovieRmd;
