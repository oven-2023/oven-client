import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components';

const MovieRmd = () => {
  return (
    <MovieRmdContainer>
      <Movies>
        <Movie>
          <MoviePoster />
          <MovieTitle>영화제목</MovieTitle>
          <MovieDetail>넷플</MovieDetail>
        </Movie>
        <Movie>
          <MoviePoster />
          <MovieTitle>영화제목</MovieTitle>
          <MovieDetail>넷플</MovieDetail>
        </Movie>
        <Movie>
          <MoviePoster />
          <MovieTitle>영화제목</MovieTitle>
          <MovieDetail>넷플</MovieDetail>
        </Movie>
      </Movies>
    </MovieRmdContainer>
  );
};

const MovieRmdContainer = styled.View`
  margin-top: 20;
  border: 2px solid;
  height: 150;
  padding: 15px;
`;

const Movies = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MoviePoster = styled.View`
  background-color: pink;
  height: 90;
`;

const Movie = styled.View`
  border: 2px solid;
  width: 30%;
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
