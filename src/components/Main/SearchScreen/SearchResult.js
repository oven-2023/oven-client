import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { searchedResultState } from '../../../states';
import { useNavigation } from '@react-navigation/native';

const SearchResult = ({
  onEndReached,
  onEndReachedThreshold,
  isLoading,
  disableVirtualization,
}) => {
  const navigation = useNavigation();
  const [searchedResult, setSearchedResult] =
    useRecoilState(searchedResultState);
  return (
    <MovieContainer
      showsVerticalScrollIndicator={false}
      data={searchedResult}
      keyExtractor={(item) => item.workId}
      renderItem={({ item }) => {
        return (
          <Movies>
            <Movie>
              {/* <MoviePoster src={item.poster} /> */}
              <MovieTitle>{item.title}</MovieTitle>
            </Movie>
          </Movies>
        );
      }}
      onEndReached={onEndReached}
      onEndReachedThreshold={onEndReachedThreshold}
      disableVirtualization={disableVirtualization}
      ListFooterComponent={isLoading && <ActivityIndicator size="large" />}
    >
      {/* <Movies>
          {searchedResult.map(({ poster, title, workId }) => (
            <Movie
              key={workId}
              onPress={() => navigation.navigate('DetailScreen', { workId })}
            >
              <MoviePoster src={poster} />
              <MovieTitle>{title}</MovieTitle>
            </Movie>
          ))}
        </Movies> */}
    </MovieContainer>
  );
};

const MovieContainer = styled.FlatList`
  width: 80%;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: pink;
`;

const Movies = styled.View`
  width: 100%;
  background-color: violet;
`;

const Movie = styled.TouchableOpacity`
  margin: 5px;
  width: 30%;
  height: 50px;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: blue;
`;

const MoviePoster = styled.Image`
  background-color: green;
  height: 40;
`;

const MovieTitle = styled.Text`
  font-size: 10px;
  margin-top: 5;
  text-align: center;
  color: white;
  font-weight: 700;
`;

export default SearchResult;
