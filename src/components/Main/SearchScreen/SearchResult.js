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
import { Dimensions } from 'react-native';
import { BEIGE } from '../../../css/theme';

const SearchResult = ({
  onEndReached,
  onEndReachedThreshold,
  isLoading,
  disableVirtualization,
}) => {
  const navigation = useNavigation();
  const [searchedResult, setSearchedResult] =
    useRecoilState(searchedResultState);
  const width = Dimensions.get('window').width;

  return (
    <SearchResultBox>
      <MovieContainer
        showsVerticalScrollIndicator={false}
        data={searchedResult}
        keyExtractor={(item) => item.workId}
        numColumns={3}
        renderItem={({ item }) => {
          return (
            // <Movies>
            <Movie
              onPress={() =>
                navigation.navigate('DetailScreen', { workId: item.workId })
              }
            >
              {item.poster ? (
                <MoviePoster src={item.poster} />
              ) : (
                <MoviePoster />
              )}
              <MovieTitle numberOfLines={2}>{item.title}</MovieTitle>
            </Movie>
            // </Movies>
          );
        }}
        onEndReached={onEndReached}
        onEndReachedThreshold={onEndReachedThreshold}
        disableVirtualization={disableVirtualization}
        ListFooterComponent={isLoading && <ActivityIndicator size="large" />}
      >
      </MovieContainer>
    </SearchResultBox>
  );
};

const SearchResultBox = styled.View`
  width: 90%;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  align-items: center;
  min-height: 650px;
`;

const MovieContainer = styled.FlatList``;

const Movies = styled.View`
  width: ${({ width }) => Dimensions.get('window').width - 50}px;
  background-color: pink;
`;

const Movie = styled.TouchableOpacity`
  width: ${Dimensions.get('window').width / 3 - 15}px;
  margin: 5px;
  width: 100px;
  height: 180px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const MoviePoster = styled.Image`
  background-color: ${BEIGE};
  height: 150;
  width: 100;
  border-radius: 20;
`;

const MovieTitle = styled.Text`
  font-size: 12px;
  margin-top: 5;
  text-align: center;
  font-weight: 700;
  font-family: 'kotra';
`;

export default SearchResult;
