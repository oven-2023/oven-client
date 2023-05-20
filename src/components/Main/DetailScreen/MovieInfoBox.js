import React, { useState } from 'react';
import { View, SafeAreaView, Text, Button } from 'react-native';
import styled from 'styled-components';
import { FontAwesome } from '@expo/vector-icons';
import { useRecoilState } from 'recoil';
import { isHeartState } from '../../../states';
import { isModalState } from '../../../states';

const MovieInfoBox = () => {
  const [isHearted, setIsHearted] = useRecoilState(isHeartState);
  const [isModalOpened, setIsModalOpened] = useRecoilState(isModalState);

  const toggleHeart = () => {
    setIsHearted((previousState) => !previousState);
    // 추후 찜한 목록에 추가해야함
  };

  return (
    <Container>
      <MoviePoster />
      <Row>
        <TextContainer>
          <Row>
            <Title>영화제목</Title>
            <Genre>장르</Genre>
          </Row>
          <Rate>평점</Rate>
          <Actor>배우</Actor>
          <Director>감독</Director>
        </TextContainer>
        <ButtonContainer>
          <Column>
            <RatingBtn
              name="star-o"
              onPress={() => setIsModalOpened(true)}
              size={34}
              color="black"
            />
            <Text>평가하기</Text>
          </Column>
          <Column>
            {isHearted ? (
              <HeartBtn
                name="heart"
                onPress={toggleHeart}
                size={34}
                color="#f368e0"
              />
            ) : (
              <HeartBtn
                name="heart-o"
                onPress={toggleHeart}
                size={34}
                color="black"
              />
            )}
            <Text>찜하기</Text>
          </Column>
        </ButtonContainer>
      </Row>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  width: 80%;
  height: 350px;
  border: 2px solid;
  margin-top: 40px;
`;

const MoviePoster = styled.View`
  background-color: pink;
  width: 100%;
  height: 200px;
  position: relative;
`;
const TextContainer = styled.View`
  width: 100%;
  height: 150px;
  padding: 20px;
`;
const Title = styled.Text`
  font-size: 26px;
`;
const Rate = styled.Text`
  font-size: 20px;
  margin-top: 10px;
`;
const Actor = styled.Text`
  font-size: 16px;
  margin-top: 10px;
`;
const Director = styled(Actor)`
  margin-top: 10px;
`;
const Genre = styled.Text`
  margin-left: 20px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  position: absolute;
  right: 0px;
  top: 10px;
`;
const RatingBtn = styled(FontAwesome)`
  padding: 10px;
`;
const HeartBtn = styled(FontAwesome)`
  padding: 10px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Column = styled.View`
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`;

export default MovieInfoBox;
