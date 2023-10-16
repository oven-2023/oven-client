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
import { isModalState, detailMovieState, clickedWorkState } from '../../states';
import RatingModal from '../../components/Main/DetailScreen/RatingModal';
import axios from 'axios';
import { baseURL } from '../../api/client';
import { BEIGE } from '../../css/theme';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailScreen = ({ route }) => {
  const { workId } = route.params;
  const [isModalOpened, setIsModalOpened] = useRecoilState(isModalState);
  const [detailMovie, setDetailMovie] = useRecoilState(detailMovieState);
  const [clickedMovie, setClickedMovie] = useRecoilState(clickedWorkState);

  useEffect(() => {
    console.log('workId?:', { workId }.workId);
    setClickedMovie({ workId }.workId);
    AsyncStorage.getItem('accessToken')
      .then((value) => {
        getWorkDetailAPI(value);
      })
      .catch((error) => {
        console.log('Error getting access token:', error);
      });
  }, []);

  const getWorkDetailAPI = async (accessToken) => {
    await axios
      .get(`${baseURL}/works/${clickedMovie}`, {
        headers: {
          'Content-Type': `application/json`,
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          workId: clickedMovie,
        },
      })
      .then((response) => {
        console.log('detail success', response.data.data);
        setDetailMovie(response.data.data);
      })
      .catch(function (error) {
        console.log('detail err', error);
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
