import React, { useState, useEffect } from 'react';
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
import { isModalState, detailMovieState } from '../../states';
import RatingModal from '../../components/Main/DetailScreen/RatingModal';
import axios from 'axios';
import { baseURL } from '../../api/client';
import { BEIGE } from '../../css/theme';
import { ScrollView } from 'react-native-gesture-handler';

const DetailScreen = ({ route }) => {
  const { workId } = route.params;
  const [isModalOpened, setIsModalOpened] = useRecoilState(isModalState);
  const [detailMovie, setDetailMovie] = useRecoilState(detailMovieState);

  useEffect(() => {
    getWorkDetailAPI();
  }, []);

  const getWorkDetailAPI = async () => {
    await axios
      .get(`${baseURL}/works/2`, {
        params: {
          workId: 2,
        },
      })
      .then((response) => {
        console.log('detail', response.data.data);
        setDetailMovie(response.data.data);
      })
      .catch(function (error) {
        console.log('detail', error);
      });
  };

  return (
    <Scroll>
      <Container>
        {isModalOpened ? <RatingModal /> : <></>}
        {detailMovie ? <MovieInfoBox /> : <></>}
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
