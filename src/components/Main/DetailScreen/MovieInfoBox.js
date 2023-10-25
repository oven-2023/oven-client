import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Button,
  Image,
  Dimensions,
} from 'react-native';
import styled from 'styled-components';
import { FontAwesome } from '@expo/vector-icons';
import { useRecoilState } from 'recoil';
import { detailMovieState, clickedWorkState } from '../../../states';
import { isModalState, ratingState, isStaredState } from '../../../states';
import { BROWN } from '../../../css/theme';
import { baseURL } from '../../../api/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const MovieInfoBox = ({ route }) => {
  const { workId } = route.params;
  const [isHearted, setIsHearted] = useState(false);
  const [isStared, setIsStared] = useRecoilState(isStaredState);
  const [rating, setRating] = useRecoilState(ratingState);
  const [isModalOpened, setIsModalOpened] = useRecoilState(isModalState);
  const [detailMovie, setDetailMovie] = useRecoilState(detailMovieState);
  const [clickedMovie, setClickedMovie] = useRecoilState(clickedWorkState);
  const [token, setToken] = useState('');

  useEffect(() => {
    setClickedMovie({ workId }.workId);
    AsyncStorage.getItem('accessToken')
      .then((value) => {
        setToken(value);
        getWorkDetailAPI(value, { workId }.workId);
      })
      .catch((error) => {
        console.log('Error heart:', error);
      });
  }, []);

  const getWorkDetailAPI = async (accessToken, workId) => {
    await axios
      .get(`${baseURL}/works/${workId}`, {
        headers: {
          'Content-Type': `application/json`,
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          workId: workId,
        },
      })
      .then((response) => {
        console.log('detail success', response.data.data);
        setDetailMovie(response.data.data);
        if (response.data.data.liked) setIsHearted(true);
        else setIsHearted(false);
        if (response.data.data.rating === null) setIsStared(false);
        else setIsStared(true);
        setRating(response.data.data.rating);
      })
      .catch(function (error) {
        console.log('detail err', error);
      });
  };

  const postHeartedAPI = async () => {
    await axios
      .post(
        `${baseURL}/works/${clickedMovie}/like`,
        { body: null },
        {
          headers: {
            'Content-Type': `application/json`,
            Authorization: `Bearer ${token}`,
          },
          params: {
            workId: clickedMovie,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.isSuccess)
          setIsHearted((previousState) => !previousState);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container>
      <Title>{detailMovie?.titleKr || detailMovie?.titleEng || ''}</Title>
      <MoviePoster src={detailMovie?.poster || null} />
      <ButtonContainer>
        <Column>
          {isStared ? (
            <RatingBtn
              name="star"
              onPress={() => setIsModalOpened(true)}
              size={34}
            />
          ) : (
            <RatingBtn
              name="star-o"
              onPress={() => setIsModalOpened(true)}
              size={34}
            />
          )}
          <WhiteText>평가하기</WhiteText>
        </Column>
        <Column>
          {isHearted ? (
            <HeartBtn name="heart" onPress={postHeartedAPI} size={34} />
          ) : (
            <HeartBtn name="heart-o" onPress={postHeartedAPI} size={34} />
          )}
          <WhiteText>찜하기</WhiteText>
        </Column>
      </ButtonContainer>
      <Row>
        <TextContainer>
          <Genre>
            장르: {detailMovie && detailMovie.genre ? detailMovie.genre : ''}
          </Genre>
          <Actor>
            출연:{' '}
            {(detailMovie &&
              detailMovie.actor?.split('/').slice(0, -1).join(',')) ||
              ''}
          </Actor>
          <Director>
            감독:{' '}
            {(detailMovie &&
              detailMovie.director?.split('/').slice(0, -1).join(',')) ||
              ''}
          </Director>
          <OTT>
            OTT:{' '}
            {(detailMovie &&
              detailMovie.providerList
                ?.map((provider) => provider.name)
                .join(', ')) ||
              ''}
          </OTT>
        </TextContainer>
      </Row>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  width: 80%;
`;

const MoviePoster = styled.Image`
  background-color: white;
  width: 100%;
  min-height: 400px;
  position: relative;
  border-radius: 20px;
  border: 3px solid white;
`;
const TextContainer = styled.View`
  min-height: 160px;
  background-color: white;
  border-radius: 20px;
  padding: 10px 20px;
  width: ${({ width }) => Dimensions.get('window').width - 50}px;
`;
const Title = styled.Text`
  font-size: 26px;
  color: ${BROWN};
  font-weight: 700;
  margin: 20px 0px;
  font-family: 'dunggeunmo';
`;

const Actor = styled.Text`
  font-size: 16px;
  margin: 5px 0px;
  color: ${BROWN};
  font-weight: 500;
  font-family: 'dunggeunmo';
`;

const Director = styled(Actor)``;
const Genre = styled(Actor)``;

const OTT = styled(Actor)``;

const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;
const RatingBtn = styled(FontAwesome)`
  padding: 10px;
  color: ${BROWN};
`;
const HeartBtn = styled(FontAwesome)`
  padding: 10px;
  color: ${BROWN};
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
`;

const Column = styled.View`
  flex-direction: column;
  align-items: center;
  margin: 0px 7px;
`;

const WhiteText = styled.Text`
  color: ${BROWN};
  font-weight: 700;
  font-family: 'dunggeunmo';
`;

export default MovieInfoBox;
