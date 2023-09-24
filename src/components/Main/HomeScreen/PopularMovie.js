import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { baseURL } from '../../../api/client';

const PopularMovie = () => {
  const [populars, setPopulars] = useState([]);

  const getPopularsAPI = async () => {
    await axios
      .get(`${baseURL}/home/populars`, {})
      .then((response) => {
        console.log(response);
        setPopulars(response.data.data);
      })
      .catch(function (error) {
        console.log('popular', error);
      });
  };

  useEffect(() => {
    getPopularsAPI();
  }, []);

  const navigation = useNavigation();

  return (
    <MovieContainer showsVerticalScrollIndicator={false} horizontal={true}>
      {populars.map(({ poster, title, workId }) => {
        return (
          <Movie
            key={workId}
            onPress={() => navigation.navigate('DetailScreen', { workId })}
          >
            <MoviePoster src={poster} />
            <MovieTitle>{title}</MovieTitle>
          </Movie>
        );
      })}
    </MovieContainer>
  );
};

const MovieContainer = styled.ScrollView`
  margin-top: 20px;
  height: 170px;
  background-color: white;
  border-radius: 20px;
`;

const MoviePoster = styled.Image`
  background-color: white;
  height: 140px;
`;

const Movie = styled.TouchableOpacity`
  margin-right: 10px;
  width: 110px;
`;

const MovieTitle = styled.Text`
  font-size: 10px;
  margin-top: 5px;
  text-align: center;
  color: white;
  font-weight: 700;
`;

export default PopularMovie;
