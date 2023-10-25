import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { baseURL } from '../../api/client';
import { BEIGE, BROWN } from '../../css/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyStarScreen = ({ navigation }) => {
  const [staredMovie, setStaredMovie] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('accessToken')
      .then((value) => {
        getStaredAPI(value);
      })
      .catch((error) => {
        console.log('Error get token:', error);
      });
  }, []);

  const getStaredAPI = async (accessToken) => {
    await axios
      .get(`${baseURL}/mypage/ratings`, {
        headers: {
          'Content-Type': `application/json`,
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setStaredMovie(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // const navigation = useNavigation();

  return (
    <Container>
      <Title>내가 평가한 작품</Title>
      <MovieContainer>
        <Movies>
          {staredMovie ? (
            staredMovie.map(({ poster, title, workId }) => (
              <Movie
                key={workId}
                onPress={() => navigation.navigate('DetailScreen', { workId })}
              >
                <MoviePoster src={poster} />
                <MovieTitle>{title}</MovieTitle>
              </Movie>
            ))
          ) : (
            <></>
          )}
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
  width: 85%;
  margin-top: 20px;
  min-height: 170px;
  border-radius: 20px;
  background-color: white;
`;

const Movies = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin: 10px;
`;

const MoviePoster = styled.Image`
  background-color: ${BEIGE};
  height: 140;
  border-radius: 20px;
  width: 90px;
`;

const Movie = styled.TouchableOpacity`
  width: 100px;
  padding: 6px;
  margin: 0px 5px;
`;

const MovieTitle = styled.Text`
  font-size: 10px;
  margin-top: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: ${BROWN};
  font-weight: 700;
  font-family: 'dunggeunmo';
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 30px;
  color: ${BROWN};
  font-weight: 800;
  font-family: 'dunggeunmo';
`;

export default MyStarScreen;
