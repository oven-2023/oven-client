import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Button,
  TouchableOpacity,
  Modal,
} from 'react-native';
import styled from 'styled-components';
import MovieInfoBox from '../../components/Main/DetailScreen/MovieInfoBox';
import MovieInfoText from '../../components/Main/DetailScreen/MovieInfoText';
import OttList from '../../components/Main/DetailScreen/OttList';
import { useRecoilState } from 'recoil';
import { isModalState } from '../../states';
import RatingModal from '../../components/Main/DetailScreen/RatingModal';

const DetailScreen = () => {
  const [isModalOpened, setIsModalOpened] = useRecoilState(isModalState);

  return (
    <Container>
      {isModalOpened ? <RatingModal /> : <></>}
      <MovieInfoBox />
      <OttList />
      <MovieInfoText />
    </Container>
  );
};

const StyledButton = styled.TouchableOpacity``;

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export default DetailScreen;

