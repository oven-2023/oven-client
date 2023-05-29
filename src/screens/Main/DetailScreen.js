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

const DetailScreen = ({ route }) => {
  const { workId } = route.params;
  const [isModalOpened, setIsModalOpened] = useRecoilState(isModalState);
  // const [detailMovie, setDetailMovie] = useRecoilState(detailMovieState);

  useEffect(() => {
    getWorkDetailAPI();
  }, []);

  const getWorkDetailAPI = async () => {
    await axios
      .get(`${baseURL}/works`, {
        headers: {
          'Content-Type': `application/json`,
        },
        params: {
          workId: { workId },
        },
      })
      .then((response) => {
        console.log(response);
        // setDetailMovie(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container>
      {isModalOpened ? <RatingModal /> : <></>}
      <MovieInfoBox />
      {/* <OttList /> */}
      <MovieInfoText />
    </Container>
  );
};

const StyledButton = styled.TouchableOpacity``;

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: black;
`;

export default DetailScreen;
