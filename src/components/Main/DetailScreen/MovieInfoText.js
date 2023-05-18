import React from 'react';
import { View, SafeAreaView, Text, Button } from 'react-native';
import styled from 'styled-components';
import { FontAwesome } from '@expo/vector-icons';

const MovieInfoText = () => {
  return (
    <Container>
      <Title>작품 정보</Title>
      <MovieSummary>
        작품정보요약 작품정보요약 작품정보요약 작품정보요약 작품정보요약
        작품정보요약 작품정보요약 작품정보요약 작품정보요약 작품정보요약
        작품정보요약 작품정보요약 작품정보요약 작품정보요약 작품정보요약
        작품정보요약 작품정보요약 작품정보요약 작품정보요약 작품정보요약
        작품정보요약 작품정보요약 작품정보요약 작품정보요약 작품정보요약
        작품정보요약 작품정보요약 작품정보요약 작품정보요약 작품정보요약
        작품정보요약 작품정보요약 작품정보요약 작품정보요약 작품정보요약
        작품정보요약 작품정보요약 작품정보요약 작품정보요약 작품정보요약
      </MovieSummary>
    </Container>
  );
};

const Container = styled.View`
  width: 80%;
  height: 350px;
  margin-top: 40px;
`;

const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
`;

const MovieSummary = styled.Text`
  width: 100%;
  height: 200px;
  font-size: 16px;
`;

export default MovieInfoText;