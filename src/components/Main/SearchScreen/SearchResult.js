import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components';

const SearchResult = () => {
  return (
    <SearchResultContainer>
      <Movies>
        <Movie>
          <MoviePoster />
          <TextContainer>
            <MovieTitle>영화제목</MovieTitle>
            <Ott>넷플</Ott>
            <MovieDetail>배우, 장르</MovieDetail>
          </TextContainer>
        </Movie>
      </Movies>
    </SearchResultContainer>
  );
};

const SearchResultContainer = styled.View`
  border: 2px solid;
  height: 650;
  padding: 15px;
  width: 80%;
  overflow: scroll;
`;

const Movies = styled.View``;

const MoviePoster = styled.View`
  background-color: pink;
  height: 90px;
  width: 80px;
  border: 2px solid;
  margin: 10px;
`;

const Movie = styled.View`
  border: 2px solid;
  flex-direction: row;
  margin-top: 10px;
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
