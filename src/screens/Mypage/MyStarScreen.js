import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { baseURL } from '../../api/client';
import { BEIGE, BROWN } from '../../css/theme';

const MyStarScreen = ({ navigation }) => {
  //테스팅

  const [staredMovie, setStaredMovie] = useState([]);

  const getPopularsAPI = async () => {
    await axios
      .get(`${baseURL}/home/recommendation/works`, {})
      .then((response) => {
        console.log(response);
        setStaredMovie(response.data.data);
      })
      .catch(function (error) {
        console.log('popular', error);
      });
  };

  useEffect(() => {
    getPopularsAPI();
  }, []);

  // const navigation = useNavigation();

  return (
    <Container>
      <Title>내가 평가한 작품</Title>
      <MovieContainer>
        <Movies>
          {staredMovie.map(({ poster, title, workId }) => (
            <Movie
              key={workId}
              onPress={() => navigation.navigate('DetailScreen', { workId })}
            >
              <MoviePoster src={poster} />
              <MovieTitle>{title}</MovieTitle>
            </Movie>
          ))}
        </Movies>
      </MovieContainer>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${BEIGE};
`;

const MovieContainer = styled.ScrollView`
  margin-top: 20px;
  min-height: 170;
  background-color: white;
  width: 85%;
  border-radius: 20px;
`;

const Movies = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

const MoviePoster = styled.Image`
  background-color: white;
  height: 140;
`;

const Movie = styled.TouchableOpacity`
  margin: 10px;
  width: 110px;
`;

const MovieTitle = styled.Text`
  font-size: 13px;
  margin-top: 5;
  text-align: center;
  color: white;
  font-weight: 700;
`;

const Title = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 10px;
  margin-top: 30px;
  color: ${BROWN};
  font-family: 'dunggeunmo';
`;

export default MyStarScreen;
