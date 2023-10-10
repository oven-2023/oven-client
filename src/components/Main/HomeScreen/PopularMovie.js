import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { baseURL } from '../../../api/client';
import { BEIGE } from '../../../css/theme';

const PopularMovie = () => {
  const [populars, setPopulars] = useState();

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
      {populars ? (
        populars.map(({ poster, title, workId }) => {
          <Movie
            key={workId}
            onPress={() => navigation.navigate('DetailScreen', { workId })}
          >
            {poster ? <MoviePoster src={poster} /> : <Block />}
            <MovieTitle>{title}</MovieTitle>
          </Movie>;
        })
      ) : (
        <></>
      )}
      <Movie onPress={() => navigation.navigate('DetailScreen', 1)} />
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
  background-color: ${BEIGE};
  height: 150;
  width: 100;
  border-radius: 20;
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
  background-color: pink;
`;

const MovieTitle = styled.Text`
  font-size: 10px;
  margin-top: 5px;
  text-align: center;
  color: white;
  font-weight: 700;
  font-family: 'dunggeunmo';
`;

export default PopularMovie;
