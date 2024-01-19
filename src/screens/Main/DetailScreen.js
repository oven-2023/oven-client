import React, { useEffect } from 'react';
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
import {
  isModalState,
  detailMovieState,
  clickedWorkState,
} from '../../states';
import RatingModal from '../../components/Main/DetailScreen/RatingModal';
import { BEIGE } from '../../css/theme';

const DetailScreen = ({ route }) => {
  const [isModalOpened] = useRecoilState(isModalState);
  const [detailMovie] = useRecoilState(detailMovieState);
  const [, setClickedMovie] = useRecoilState(clickedWorkState);

  return (
    <Scroll>
      <Container>
        {isModalOpened ? <RatingModal /> : <></>}
        {detailMovie ? <MovieInfoBox route={route} /> : <></>}
        {/* <OttList /> */}
        <MovieInfoText />
      </Container>
    </Scroll>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${BEIGE};
`;

const Scroll = styled.ScrollView`
  width: 100%;
`;

export default DetailScreen;
