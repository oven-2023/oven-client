import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { searchedResultState } from '../../../states';
import { useNavigation } from '@react-navigation/native';

const SearchResult = () => {
  //테스팅
  const searchedResult = [
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
  // const [searchedResult, setSearchedResult] = useRecoilState(searchedResultState);
  return (
    <MovieContainer showsVerticalScrollIndicator={false}>
      <Movies>
        {searchedResult.map(({ poster, title, workId }) => {
          return (
            <Movie
              // key={workId}
              onPress={() => navigation.navigate('DetailScreen')}
            >
              {/* <Movie onPress={() => navigation.navigate('DetailScreen', {workId})}> */}
              <MoviePoster src={poster} />
              <MovieTitle>{title}</MovieTitle>
            </Movie>
          );
        })}
      </Movies>
    </MovieContainer>
  );
};

const MovieContainer = styled.ScrollView`
  width: 80%;
`;

const Movies = styled.View`
  margin-top: 20;
  height: 700;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Movie = styled.TouchableOpacity`
  margin: 5px;
  width: 30%;
`;

const MoviePoster = styled.Image`
  background-color: white;
  height: 140;
`;

const MovieTitle = styled.Text`
  font-size: 10px;
  margin-top: 5;
  text-align: center;
  color: white;
  font-weight: 700;
`;

export default SearchResult;
