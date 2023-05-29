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
    {
      title: '제목입니다6',
    },
  ];
  const navigation = useNavigation();
  return (
    <MovieContainer>
      <Movies>
        {searchList.map(({ title }) => {
          return (
            <Movie onPress={() => navigation.navigate('DetailScreen')}>
              <MoviePoster />
              <MovieTitle>{title}</MovieTitle>
            </Movie>
          );
        })}
      </Movies>
    </MovieContainer>
  );
};

const MovieContainer = styled.View`
  margin-top: 20px;
`;

const Movies = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const MoviePoster = styled.View`
  background-color: white;
  height: 140;
`;

const Movie = styled.TouchableOpacity`
  margin: 5px;
  width: 30%;
`;

const MovieTitle = styled.Text`
  font-size: 10px;
  margin-top: 5;
  text-align: center;
  color: white;
  font-weight: 700;
`;

export default MovieRmd;
