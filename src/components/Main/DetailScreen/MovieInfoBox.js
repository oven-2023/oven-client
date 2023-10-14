import React, { useState } from 'react';
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
import { detailMovieState, isHeartState } from '../../../states';
import { isModalState } from '../../../states';
import { BROWN } from '../../../css/theme';

const MovieInfoBox = () => {
  const [isHearted, setIsHearted] = useRecoilState(isHeartState);
  const [isModalOpened, setIsModalOpened] = useRecoilState(isModalState);
  const [detailMovie] = useRecoilState(detailMovieState);
  const width = Dimensions.get('window').width;

  const toggleHeart = () => {
    setIsHearted((previousState) => !previousState);
    // postHeartedAPI();
  };

  return (
    <Container>
      <Title>{detailMovie?.titleKr || detailMovie?.titleEng || ''}</Title>
      <MoviePoster src={detailMovie?.poster || null} />
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
            <HeartBtn name="heart" onPress={toggleHeart} size={34} />
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
      <Row>
        <TextContainer>
          <Rate>평점:</Rate>
          <Genre>장르: {detailMovie?.genre || ''}</Genre>
          <Actor>출연: {detailMovie?.actor.split('/').join(',') || ''}</Actor>
          <Director>
            감독:{' '}
            {detailMovie?.director
              ? detailMovie.director.split('/').join(',')
              : ''}
          </Director>
          <OTT>
            OTT:
            {detailMovie?.providerList
              ? detailMovie.providerList
                  .map((provider) => provider.name)
                  .join(', ')
              : ''}
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
  height: 200px;
  position: relative;
  border-radius: 20px;
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
`;

const Actor = styled.Text`
  font-size: 16px;
  margin: 5px 0px;
  color: ${BROWN};
  font-weight: 500;
  font-family: 'dunggeunmo';
`;

const Rate = styled(Actor)`
  font-weight: 700;
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
