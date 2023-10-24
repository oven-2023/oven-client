import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { baseURL } from '../../api/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BEIGE, BROWN } from '../../css/theme';

const MyHeartScreen = ({ navigation }) => {
  const [heartedMovie, setHeartedMovie] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('accessToken')
      .then((value) => {
        getHeartedAPI(value);
      })
      .catch((error) => {
        console.log('Error get token:', error);
      });
  }, []);

  const getHeartedAPI = async (accessToken) => {
    await axios
      .get(`${baseURL}/mypage/likes`, {
        headers: {
          'Content-Type': `application/json`,
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setHeartedMovie(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // const navigation = useNavigation();

  return (
    <Container>
      <Title>내가 찜한 작품</Title>
      <MovieContainer>
        <Movies>
          {heartedMovie ? (
            heartedMovie.map(({ poster, title, workId }) => (
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
  background-color: ${BEIGE};
  height: 140;
  border-radius: 20px;
  width: 100px;
`;

const Movie = styled.TouchableOpacity`
  width: 100px;
  padding: 8px;
  margin: 0px 6px;
`;

const MovieTitle = styled.Text`
  font-size: 10px;
  margin-top: 5px;
  text-align: center;
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

export default MyHeartScreen;
