import React from 'react';
import { View, SafeAreaView, Text, Button } from 'react-native';
import styled from 'styled-components';
import { FontAwesome } from '@expo/vector-icons';
import MovieInfoBox from '../../components/Main/DetailScreen/MovieInfoBox';
import MovieInfoText from '../../components/Main/DetailScreen/MovieInfoText';
import OttList from '../../components/Main/DetailScreen/OttList';

const DetailScreen = () => {

  return (
    <Container>
      <MovieInfoBox />
      <OttList />
      <MovieInfoText />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const MovieContainer = styled.View``;
const MoviePoster = styled.View``;
const TextContainer = styled.View``;
const Title = styled.Text``;
const Rate = styled.Text``;
const Actor = styled.Text``;
const Director = styled.Text``;
const ButtonContainer = styled.View``;
const RatingBtn = styled.Button``;
const HeartBtn = styled.Button``;


const SearchButton = styled(FontAwesome)`
  margin-left: auto;
  margin-right: 20;
  margin-top: 10;
  align-items: center;
`;

export default DetailScreen;
