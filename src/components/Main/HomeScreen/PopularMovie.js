import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { baseURL } from '../../../api/client';
import { BEIGE, LIGHTBROWN } from '../../../css/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PopularMovie = () => {
  const [populars, setPopulars] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('accessToken')
      .then((value) => {
        getPopularsAPI(value);
      })
      .catch((error) => {
        console.log('Error getting access token:', error);
      });
  }, []);

  const getPopularsAPI = async (accessToken) => {
    await axios
      .get(`${baseURL}/home/populars`, {
        headers: {
          'Content-Type': `application/json`,
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setPopulars(response.data.data);
      })
      .catch(function (error) {
        console.log('detail errrrr', error);
      });
  };

  const navigation = useNavigation();

  return (
    <MovieContainer showsVerticalScrollIndicator={false} horizontal={true}>
      {populars ? (
        populars.map(({ poster, title, workId }) => (
          <Movie
            key={workId}
            onPress={() => navigation.navigate('DetailScreen', { workId })}
          >
            {poster ? <MoviePoster src={poster} /> : <Block />}
            <MovieTitle>{title}</MovieTitle>
          </Movie>
        ))
      ) : (
        <></>
      )}
    </MovieContainer>
  );
};

const MovieContainer = styled.ScrollView`
  margin-top: 20px;
  height: 180px;
  border-radius: 20px;
`;

const MoviePoster = styled.Image`
  background-color: white;
  height: 150;
  width: 110;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Block = styled.View`
  background-color: ${BEIGE};
  height: 150;
  width: 100;
  border-radius: 20;
`;

const Movie = styled.TouchableOpacity`
  margin-right: 10px;
  width: 110px;
  background-color: ${LIGHTBROWN};
  border-radius: 20px;
`;

const MovieTitle = styled.Text`
  font-size: 10px;
  margin-top: 7px;
  text-align: center;
  color: black;
  font-weight: 700;
  font-family: 'dunggeunmo';
  justify-content: flex-start;
  align-items: center;
  height: 30px;
`;

export default PopularMovie;
