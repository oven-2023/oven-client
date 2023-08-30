import React, { useState } from 'react';
import { View, SafeAreaView, Text, Button, Image } from 'react-native';
import styled from 'styled-components';
import { FontAwesome } from '@expo/vector-icons';
import { useRecoilState } from 'recoil';
import { detailMovieState, isHeartState } from '../../../states';
import { isModalState } from '../../../states';

const MovieInfoBox = () => {
  const [isHearted, setIsHearted] = useRecoilState(isHeartState);
  const [isModalOpened, setIsModalOpened] = useRecoilState(isModalState);
  const [detailMovie] = useRecoilState(detailMovieState)

  const toggleHeart = () => {
    setIsHearted((previousState) => !previousState);
    // postHeartedAPI();
  };

  return (
    <Container>
      <MoviePoster src={detailMovie.poster} />
      <Row>
        <TextContainer>
          <Row>
            <Title>{detailMovie.titleKr}</Title>
            <Rate>평점</Rate>
          </Row>
          <Genre>장르: {detailMovie.genre}</Genre>
          <Actor>출연: {detailMovie.actor}</Actor>
          <Director>감독: {detailMovie.director}</Director>
          {/* <OTT>시청 가능한 곳: {detailMovie.providerList}</OTT> */}
        </TextContainer>
        <ButtonContainer>
          <Column>
            <RatingBtn
              name="star-o"
              onPress={() => setIsModalOpened(true)}
              size={34}
              color="black"
            />
            <WhiteText>평가하기</WhiteText>
          </Column>
          <Column>
            {isHearted ? (
              <HeartBtn
                name="heart"
                onPress={toggleHeart}
                size={34}
              />
            ) : (
              <HeartBtn
                name="heart-o"
                onPress={toggleHeart}
                size={34}
                color="black"
              />
            )}
            <WhiteText>찜하기</WhiteText>
          </Column>
        </ButtonContainer>
      </Row>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  width: 80%;
  height: 470px;
  margin-top: 40px;
`;

const MoviePoster = styled.Image`
  background-color: white;
  width: 100%;
  height: 200px;
  position: relative;
`;
const TextContainer = styled.View`
  width: 100%;
  height: 200px;
`;
const Title = styled.Text`
  font-size: 26px;
  color: white;
  font-weight: 700;
`;
const Rate = styled.Text`
  margin-left: 20px;
  color: white;
  font-weight: 700;
`;
const Actor = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  color: white;
  font-weight: 500;
`;
const Director = styled(Actor)`
`;
const Genre = styled(Actor)`
`;

const OTT = styled(Actor)``;

const ButtonContainer = styled.View`
  flex-direction: row;
  position: absolute;
  right: 0px;
  top: 10px;
`;
const RatingBtn = styled(FontAwesome)`
  padding: 10px;
  color: white;
`;
const HeartBtn = styled(FontAwesome)`
  padding: 10px;
  color: white;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Column = styled.View`
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`;

const WhiteText = styled.Text`
  color: white;
  font-weight: 700;
`;

export default MovieInfoBox;
