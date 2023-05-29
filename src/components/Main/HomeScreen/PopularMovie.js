import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import baseURL from '../../../api/client';

const PopularMovie = () => {
  //테스팅
  const populars = [
    {
      poster:
        'https://nujhrcqkiwag1408085.cdn.ntruss.com/static/upload/drama_poster_images/280x400/drama_102591_1681959812.jpg',
      title: '제목입니다1',
      workId: 1,
    },
    {
      poster:
        'https://nujhrcqkiwag1408085.cdn.ntruss.com/static/upload/drama_poster_images/280x400/drama_102591_1681959812.jpg',
      title: '제목입니다2',
      workId: 2,
    },
    {
      poster:
        'https://nujhrcqkiwag1408085.cdn.ntruss.com/static/upload/drama_poster_images/280x400/drama_102591_1681959812.jpg',
      title: '제목입니다3',
      workId: 3,
    },
    {
      poster:
        'https://nujhrcqkiwag1408085.cdn.ntruss.com/static/upload/drama_poster_images/280x400/drama_102591_1681959812.jpg',
      title: '제목입니다4',
      workId: 4,
    },
    {
      poster:
        'https://nujhrcqkiwag1408085.cdn.ntruss.com/static/upload/drama_poster_images/280x400/drama_102591_1681959812.jpg',
      title: '제목입니다5',
      workId: 5,
    },
    {
      poster:
        'https://nujhrcqkiwag1408085.cdn.ntruss.com/static/upload/drama_poster_images/280x400/drama_102591_1681959812.jpg',
      title: '제목입니다6',
      workId: 6,
    },
  ];

  // const [populars, setPopulars] = useState([]);

  const getPopularsAPI = async () => {
    await axios
      .get(`${baseURL}/home/populars`, {
        headers: {
          'Content-Type': `application/json`,
        },
      })
      .then((response) => {
        console.log(response);
        // setPopulars(response.data);
      })
      .catch(function (error) {
        console.log(error);
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
            onPress={() => navigation.navigate('DetailScreen')}
          >
            {/* <Movie onPress={() => navigation.navigate('DetailScreen', { workId })}> */}
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
  height: 170;
`;

const MoviePoster = styled.Image`
  background-color: white;
  height: 140;
`;

const Movie = styled.TouchableOpacity`
  margin-right: 10px;
  width: 110px;
`;

const MovieTitle = styled.Text`
  font-size: 10px;
  margin-top: 5;
  text-align: center;
  color: white;
  font-weight: 700;
`;

export default PopularMovie;
