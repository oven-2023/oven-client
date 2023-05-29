import React from 'react';
import { View, SafeAreaView, Text, Button } from 'react-native';
import styled from 'styled-components';
import { FontAwesome } from '@expo/vector-icons';
import { useRecoilState } from 'recoil';
import { detailMovieState } from '../../../states';

const MovieInfoText = () => {
  const [detailMovie] = useRecoilState(detailMovieState)
  return (
    <Container>
      <Title>작품 정보</Title>
      <MovieSummary>{detailMovie.summary}</MovieSummary>
    </Container>
  );
};

const Container = styled.View`
  width: 80%;
  height: 350px;
`;

const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
  color: white;
  font-weight: 700;
`;

const MovieSummary = styled.Text`
  width: 100%;
  height: 200px;
  font-size: 16px;
  color: white;
  font-weight: 500;
`;

export default MovieInfoText;
