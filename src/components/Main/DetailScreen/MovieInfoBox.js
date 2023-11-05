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
import {
  isModalState,
  ratingState,
  isStaredState,
  clickedWorkState,
  detailMovieState,
  isSummaryLoadingState,
} from '../../../states';
import { BROWN, RED } from '../../../css/theme';
import { baseURL } from '../../../api/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import SplashScreen from '../../Layout/SplashScreen';

const MovieInfoBox = ({ route }) => {
  const { workId } = route.params;
  const [isHearted, setIsHearted] = useState(false);
  const [isStared, setIsStared] = useRecoilState(isStaredState);
  const [rating, setRating] = useRecoilState(ratingState);
  const [isModalOpened, setIsModalOpened] = useRecoilState(isModalState);
  const [detailMovie, setDetailMovie] = useRecoilState(detailMovieState);
  const [clickedMovie, setClickedMovie] = useRecoilState(clickedWorkState);
  const [token, setToken] = useState('');
  const [isSummaryLoading, setIsSummaryLoading] = useRecoilState(
    isSummaryLoadingState
  );

  useEffect(() => {
    setIsSummaryLoading(true);
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
        setIsSummaryLoading(false);
        console.log('완료');
      })
      .catch(function (error) {
        console.log('detail err', error);
        setIsSummaryLoading(false);
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

  onHandleAnimation = () => {
    const moveAnimation = Animated.sequence([
      Animated.timing(translateY, {
        toValue: -30, // 위로 이동할 거리
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0, // 다시 원래 위치로 이동
        duration: 1500,
        useNativeDriver: true,
      }),
    ]);
    Animated.loop(moveAnimation).start();

    return () => moveAnimation.stopAnimation();
  };

  return (
    <>
      {isSummaryLoading ? (
        <SplashScreen />
      ) : (
        <Container>
            <TitleContainer >
            <Title>{detailMovie?.titleKr || detailMovie?.titleEng || ''}</Title>
          </TitleContainer>
          <MoviePoster src={detailMovie?.poster || null} />
          <ButtonContainer>
            <Column onPress={() => setIsModalOpened(true)}>
              {isStared ? (
                <RatingBtn name="star" size={34} />
              ) : (
                <RatingBtn name="star-o" size={34} />
              )}
              <WhiteText>평가하기</WhiteText>
            </Column>
            <Column onPress={postHeartedAPI}>
              {isHearted ? (
                <HeartBtn name="heart" size={34} />
              ) : (
                <HeartBtn name="heart-o" size={34} />
              )}
              <WhiteText>찜하기</WhiteText>
            </Column>
          </ButtonContainer>
          <Row>
            <TextContainer>
              <Genre>
                장르:{' '}
                {detailMovie && detailMovie.genre ? detailMovie.genre : ''}
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
      )}
    </>
  );
};

const Container = styled.View`
  align-items: center;
  width: 80%;
`;

const TitleContainer = styled.View`
  background-color: white;
  border-radius: 20px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
  min-width: ${({ width }) => Dimensions.get('window').width - 100}px;
`;

const MoviePoster = styled.Image`
  background-color: white;
  min-width: 100px;
  width: ${({ width }) => Dimensions.get('window').width - 100}px;
  height: 300px;
  position: relative;
  border-radius: 20px;
  object-fit: contain;
  margin-bottom: 10px;
`;
const TextContainer = styled.View`
  min-height: 130px;
  background-color: white;
  border-radius: 20px;
  padding: 10px 20px;
  width: ${({ width }) => Dimensions.get('window').width - 50}px;
`;
const Title = styled.Text`
  font-size: 26px;
  color: ${BROWN};
  font-weight: 700;
  font-family: 'kotra';
`;

const Actor = styled.Text`
  font-size: 18px;
  margin: 5px 0px;
  color: ${BROWN};
  font-weight: 500;
  font-family: 'kotra';
`;

const Director = styled(Actor)``;
const Genre = styled(Actor)``;

const OTT = styled(Actor)``;

const ButtonContainer = styled.View`
  flex-direction: row;
  margin: 10px 0px;
`;
const RatingBtn = styled(FontAwesome)`
  padding: 5px;
  color: ${BROWN};
`;
const HeartBtn = styled(FontAwesome)`
  padding: 5px;
  color: ${RED};
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
`;

const Column = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  margin: 0px 7px;
  background-color: white;
  padding: 10px 25px;
  border-radius: 20px;
`;

const WhiteText = styled.Text`
  color: ${BROWN};
  font-weight: 700;
  font-family: 'kotra';
`;

export default MovieInfoBox;
