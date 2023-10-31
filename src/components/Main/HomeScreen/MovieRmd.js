import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { baseURL } from '../../../api/client';
import { LIGHTBROWN, RED } from '../../../css/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MovieRmd = ({ recommendations }) => {
  const navigation = useNavigation();
  return (
    <MovieContainer>
      {recommendations ? (
        recommendations.map(({ poster, title, workId }) => (
          <Movie
            key={workId}
            onPress={() => navigation.navigate('DetailScreen', { workId })}
          >
            <MoviePoster src={poster} />
            <MovieTitle>{title}</MovieTitle>
          </Movie>
        ))
      ) : (
        <></>
      )}
    </MovieContainer>
  );
};

const MovieContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 50px;
  min-height: 200px;
  justify-content: flex-start;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const MoviePoster = styled.Image`
  background-color: white;
  height: 150px;
  width: 100px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Movie = styled.TouchableOpacity`
  width: 100px;
  background-color: ${LIGHTBROWN};
  margin: 5px;
  border-radius: 20px;
  height: 180px;
  align-items: center;
`;

const MovieTitle = styled.Text`
  font-size: 10px;
  margin-top: 7px;
  text-align: center;
  font-weight: 700;
  font-family: 'kotra';
  height: 20px;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  width: 80px;
`;

export default MovieRmd;
