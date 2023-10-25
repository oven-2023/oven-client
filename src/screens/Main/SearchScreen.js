import React, { useEffect, useState, useRef } from 'react';
import { View, Text, SafeAreaView, TextInput, FlatList } from 'react-native';
import styled from 'styled-components';
import SearchResult from '../../components/Main/SearchScreen/SearchResult';
import { useRecoilState } from 'recoil';
import { searchedResultState } from '../../states';
import axios from 'axios';
import { baseURL } from '../../api/client';
import { BROWN, BEIGE } from '../../css/theme.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../../components/Layout/SplashScreen';

const SearchScreen = () => {
  const [searchInput, setSearchInput] = useState(null);
  const [seachedResult, setSearchedResult] =
    useRecoilState(searchedResultState);
  const [isLoading, setIsLoading] = useState(false);
  const [lastWorkId, setLastWorkId] = useState(null);
  const [isAPILoading, setIsAPILoading] = useState(false);

  const getSearchAPI = async (accessToken) => {
    await axios
      .get(`${baseURL}/search`, {
        headers: {
          'Content-Type': `application/json`,
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          size: 20,
          workId: lastWorkId,
          keyword: searchInput,
        },
      })
      .then((response) => {
        console.log('get 함수 실행');
        console.log(searchInput);
        console.log(lastWorkId);
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
    setIsAPILoading(true);
    AsyncStorage.getItem('accessToken')
      .then((value) => {
        getSearchAPI(value);
        setIsAPILoading(false);
      })
      .catch((error) => {
        console.log('Error getting access token:', error);
      });
  }, [searchInput]);

  const onSearchHandler = (event) => {
    console.log(event.nativeEvent.text);
    setSearchInput(event.nativeEvent.text);
    setLastWorkId(null); // 검색어가 변경되면 1로 초기화
  };
  const onKeyDownHandler = (event) => {
    if (event.key === 'Enter') {
      onSubmitHandler();
    }
  };

  const onEndReached = () => {
    AsyncStorage.getItem('accessToken')
      .then((value) => {
        if (!isLoading) {
          setIsLoading(true);
          getSearchAPI(value);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log('Error getting access token in onEndReached:', error);
      });
  };

  return (
    <>
      {!isAPILoading ? (
        <Container>
          <SearchInput
            placeholder="작품명을 검색해보세요."
            value={searchInput}
            onChange={onSearchHandler}
            onKeyDown={onKeyDownHandler}
          />
          <SearchResult
            onEndReached={onEndReached}
            onEndReachedThreshold={0.1}
            isLoading={isLoading}
            disableVirtualization={false}
          />
        </Container>
      ) : (
        <SplashScreen />
      )}
    </>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${BEIGE};
`;

const SearchInput = styled.TextInput`
  background-color: white;
  width: 80%;
  height: 40px;
  margin: 20px 0px;
  padding: 0px 20px;
  border-radius: 20px;
  color: brown;
  font-size: 16px;
  font-family: 'dunggeunmo';
`;

export default SearchScreen;
