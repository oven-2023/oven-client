import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { baseURL } from '../../../api/client';

const MovieRmd = () => {
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendationsAPI = async () => {
    await axios
      .get(`${baseURL}/home/recommendation/works`, {})
      .then((response) => {
        console.log('rec', response.data.data);
        setRecommendations(response.data.data);
      })
      .catch(function (error) {
        console.log('rcm', error);
      });
  };

  useEffect(() => {
    getRecommendationsAPI();
  }, []);

  const navigation = useNavigation();
  return (
    <MovieContainer>
      <Movies>
        {recommendations.map(({ poster, title, workId }) => (
          <View>
            <Movie
              key={workId}
              onPress={() => navigation.navigate('DetailScreen', { workId })}
            >
              <MoviePoster src={poster} />
              <MovieTitle>{title}</MovieTitle>
            </Movie>
          </View>
        ))}
      </Movies>
    </MovieContainer>
  );
};

const MovieContainer = styled.View`
  margin-top: 20px;
  width: 100%;
  margin-bottom: 50px;
`;

const Movies = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

const MoviePoster = styled.Image`
  background-color: white;
  height: 140px;
`;

const Movie = styled.TouchableOpacity`
  width: 100px;
  padding: 5px;
`;

const MovieTitle = styled.Text`
  font-size: 13px;
  margin-top: 5px;
  text-align: center;
  color: white;
  font-weight: 700;
`;

export default MovieRmd;
