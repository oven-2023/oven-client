import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  Alert,
  Dimensions,
} from 'react-native';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { searchedResultState, isLoginState } from '../../states';
import axios from 'axios';
import { baseURL } from '../../api/client';
import { BROWN, BEIGE } from '../../css/theme.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MovieSelection = () => {
  const [searchInput, setSearchInput] = useState(null);
  const [searchedResult, setSearchedResult] =
    useRecoilState(searchedResultState);
  const [isLoading, setIsLoading] = useState(false);
  const [lastWorkId, setLastWorkId] = useState(null);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const getSearchAPI = async () => {
    await axios
      .get(`${baseURL}/search`, {
        headers: {},
        params: {
          size: 20,
          workId: lastWorkId,
        },
      })
      .then((response) => {
        console.log('get 함수 실행');
        console.log(
          'search',
          response.data.data.workListDtos[
            response.data.data.workListDtos.length - 1
          ].workId
        );
        const newResults = response.data.data.workListDtos;
        if (lastWorkId === null) {
          // 첫 번째 페이지인 경우에는 초기화
          setSearchedResult(newResults);
        } else {
          // 그 외의 경우에는 이전 결과에 새로운 결과를 추가
          setSearchedResult((prevResults) => [...prevResults, ...newResults]);
        }
        // 마지막 workId 업데이트
        setLastWorkId(
          response.data.data.workListDtos[
            response.data.data.workListDtos.length - 1
          ].workId
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    AsyncStorage.getItem('accessToken')
      .then((value) => {
        getSearchAPI(value);
      })
      .catch((error) => {
        console.log('Error getting access token:', error);
      });
  }, []);

  const onEndReached = () => {
    if (!isLoading) {
      setIsLoading(true);
      getSearchAPI(value);
      setIsLoading(false);
    }
  };

  return (
    <SearchResultBox>
      <MovieContainer
        showsVerticalScrollIndicator={false}
        data={searchedResult}
        keyExtractor={(item) => item.workId}
        numColumns={3}
        renderItem={({ item }) => {
          return (
            <Movie>
              {item.poster ? (
                <MoviePoster src={item.poster} />
              ) : (
                <MoviePoster />
              )}
              <MovieTitle numberOfLines={2}>{item.title}</MovieTitle>
            </Movie>
          );
        }}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        disableVirtualization={false}
        ListFooterComponent={isLoading && <ActivityIndicator size="large" />}
      ></MovieContainer>
    </SearchResultBox>
  );
};

const SearchResultBox = styled.View`
  width: 90%;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  align-items: center;
  min-height: 650px;
`;

const MovieContainer = styled.FlatList``;

const Movies = styled.View`
  width: ${({ width }) => Dimensions.get('window').width - 50}px;
  background-color: pink;
`;

const Movie = styled.TouchableOpacity`
  width: ${Dimensions.get('window').width / 3 - 15}px;
  margin: 5px;
  width: 100px;
  height: 180px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const MoviePoster = styled.Image`
  background-color: ${BEIGE};
  height: 150;
  width: 100;
  border-radius: 20;
`;

const MovieTitle = styled.Text`
  font-size: 12px;
  margin-top: 5;
  text-align: center;
  font-weight: 700;
  font-family: 'kotra';
`;

export default MovieSelection;
