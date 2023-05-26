import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { searchInputState } from '../../../states';
import { useNavigation } from '@react-navigation/native';
import { shadowStyles } from '../../../styles/shadow';

const SearchResult = () => {
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
  const [searchInput, setSearchInput] = useRecoilState(searchInputState);
  return (
    <Movies showsVerticalScrollIndicator={false}>
      {searchList.map(({ title, ott, detail }) => {
        return (
          <Movie
            key={title}
            onPress={() => navigation.navigate('DetailScreen')}
            style={shadowStyles.boxView}
          >
            <MoviePoster />
            <TextContainer>
              <MovieTitle>{title}</MovieTitle>
              <Ott>{ott}</Ott>
              <MovieDetail>{detail}</MovieDetail>
            </TextContainer>
          </Movie>
        );
      })}
    </Movies>
  );
};

const Movies = styled.ScrollView`
  height: 650;
  width: 80%;
`;

const MoviePoster = styled.View`
  background-color: pink;
  height: 90px;
  width: 80px;
  border: 1px solid gray;
  margin: 10px;
`;

const Movie = styled.TouchableOpacity`
  border: 1px solid gray;
  border-radius: 10px;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const MovieTitle = styled.Text`
  font-size: 30px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 5px;
`;

const Ott = styled.Text`
  font-size: 20px;
  margin-left: 10;
`;

const MovieDetail = styled.Text`
  font-size: 20px;
  margin-left: 10;
`;

const TextContainer = styled.View``;

export default SearchResult;
