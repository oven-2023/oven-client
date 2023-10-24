import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { baseURL } from '../../../api/client';
import { BEIGE } from '../../../css/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MovieRmd = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('accessToken')
      .then((value) => {
        getRecommendationsAPI(value);
      })
      .catch((error) => {
        console.log('Error getting access token:', error);
      });
  }, []);

  const getRecommendationsAPI = async (accessToken) => {
    await axios
      .get(`${baseURL}/home/recommendation/works`, {
        headers: {
          'Content-Type': `application/json`,
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setRecommendations(response.data.data);
      })
      .catch(function (error) {
        console.log('get recommend', error);
      });
  };

  const navigation = useNavigation();
  return (
    <MovieContainer>
      <Movies>
        {recommendations ? (
          recommendations.map(({ poster, title, workId }) => (
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
  );
};

const MovieContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 100px;
  min-height: 400px;
  justify-content: center;
  align-content: center;
`;

const Movies = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const MoviePoster = styled.Image`
  background-color: white;
  height: 140px;
  width: 100px;
  border-radius: 20px;
`;

const Movie = styled.TouchableOpacity`
  width: 110px;
  padding: 5px;
`;

const MovieTitle = styled.Text`
  font-size: 10px;
  margin-top: 5px;
  text-align: center;
  font-weight: 700;
  font-family: 'dunggeunmo';
`;

export default MovieRmd;
