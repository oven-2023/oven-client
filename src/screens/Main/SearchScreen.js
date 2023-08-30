import React, { useEffect, useState, useRef } from 'react';
import { View, Text, SafeAreaView, TextInput, FlatList } from 'react-native';
import styled from 'styled-components';
import SearchResult from '../../components/Main/SearchScreen/SearchResult';
import { useRecoilState } from 'recoil';
import { searchedResultState } from '../../states';
import axios from 'axios';
import { baseURL } from '../../api/client';

const SearchScreen = () => {
  const [searchInput, setSearchInput] = useState('');
  const [seachedResult, setSearchedResult] =
    useRecoilState(searchedResultState);
  const [isLoading, setIsLoading] = useState(false);
  const [pageParams, setPageParams] = useState(1);

  const onSearchHandler = (event) => {
    console.log(event.nativeEvent.text);
    setSearchInput(event.nativeEvent.text);
    setPageParams(1); // 검색어가 변경되면 1로 초기화
  };
  const onKeyDownHandler = (event) => {
    if (event.key === 'Enter') {
      onSubmitHandler();
    }
  };

  const onEndReached = () => {
    console.log('무한스크롤');

    if (!isLoading) {
      setPageParams(pageParams + 1);
      console.log('params 증가');
      getData();
    }
  };

  const getData = async () => {
    setIsLoading(true);
    if (searchInput !== '') {
      setInterval(() => testSearchAPI(),1000);
      // testSearchAPI();
    } else infAPI();
    // await testSearchAPI();
    setIsLoading(false);
  };

  const infAPI = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=f85ba1745021cb0f98ac340407ad592b`,
        {
          headers: {
            'Content-Type': `application/json`,
          },
          params: {
            page: pageParams,
          },
        }
      )
      .then((response) => {
        console.log('데이터 가져오기 성공');
        setSearchedResult(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const testSearchAPI = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=f85ba1745021cb0f98ac340407ad592b`,
        {
          headers: {
            'Content-Type': `application/json`,
          },
          params: {
            query: searchInput,
          },
        }
      )
      .then((response) => {
        console.log('검색 api');
        setSearchedResult(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getSearchAPI = async () => {
    await axios
      .get(`${baseURL}/search`, {
        headers: {
          'Content-Type': `application/json`,
        },
        params: {
          keyword: searchInput,
        },
      })
      .then((response) => {
        console.log(searchInput);
        console.log('search', response.data);
        setSearchedResult(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (searchInput !== '') {
      testSearchAPI();
    } else infAPI();
    // getSearchAPI();
  }, [searchInput]);

  return (
    <Container>
      <SearchInput
        placeholder="작품명을 검색해보세요."
        value={searchInput}
        onChange={onSearchHandler}
        onKeyDown={onKeyDownHandler}
      />
      <SearchResult
        onEndReached={onEndReached}
        onEndReachedThreshold={0.6}
        isLoading={isLoading}
      />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: black;
`;

const SearchInput = styled.TextInput`
  background-color: white;
  border: 1px solid gray;
  width: 80%;
  height: 40px;
  margin: 20px 0px;
  padding: 0px 20px;
  border-radius: 10px;
  color: black;
  font-size: 16px;
`;

export default SearchScreen;
