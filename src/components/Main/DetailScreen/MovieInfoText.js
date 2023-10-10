import React from 'react';
import { View, SafeAreaView, Text, Button } from 'react-native';
import styled from 'styled-components';
import { FontAwesome } from '@expo/vector-icons';
import { useRecoilState } from 'recoil';
import { detailMovieState } from '../../../states';
import { BROWN } from '../../../css/theme';

const MovieInfoText = () => {
  const [detailMovie] = useRecoilState(detailMovieState);
  return (
    <Container>
      <Title>작품 정보</Title>
      <SummaryContainer>
        <MovieSummary>{detailMovie.summary}</MovieSummary>
      </SummaryContainer>
    </Container>
  );
};

const Container = styled.View`
  width: 80%;
  height: 350px;
`;

const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
  color: ${BROWN};
  font-weight: 700;
  font-family: 'dunggeunmo';
`;

const MovieSummary = styled.Text`
  font-size: 16px;
  color: ${BROWN};
  font-weight: 600;
  font-family: 'dunggeunmo';
`;

const SummaryContainer = styled.View`
  width: 100%;
  min-height: 200px;
  background-color: white;
  border-radius: 20px;
`;

export default MovieInfoText;
