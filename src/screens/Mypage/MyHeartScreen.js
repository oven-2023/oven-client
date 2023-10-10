import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { baseURL } from '../../api/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BEIGE, BROWN } from '../../css/theme';

const MyHeartScreen = ({ navigation }) => {
  const [heartedMovie, setHeartedMovie] = useState([]);
  const [token, setToken] = useState('');

  const getHeartedAPI = async () => {
    await axios
      .get(`${baseURL}/mypage/likes`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log(token);
        console.log('hearted');
        console.log(response);
        setHeartedMovie(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getPopularsAPI = async () => {
    await axios
      .get(`${baseURL}/home/populars`, {})
      .then((response) => {
        console.log(response);
        setHeartedMovie(response.data.data);
      })
      .catch(function (error) {
        console.log('popular', error);
      });
  };

  useEffect(() => {
    const tokenFunction = async () => {
      const token = await AsyncStorage.getItem('token');
    };
    console.log('hsefsf');
    tokenFunction();
    // getHeartedAPI();
    getPopularsAPI();
  }, []);

  // const navigation = useNavigation();

  return (
    <Container>
      <Title>내가 찜한 작품</Title>
      <MovieContainer>
        <Movies>
          {heartedMovie.map(({ poster, title, workId }) => (
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
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 30px;
  color: ${BROWN};
  font-weight: 800;
  font-family: 'dunggeunmo';
`;

export default MyHeartScreen;
