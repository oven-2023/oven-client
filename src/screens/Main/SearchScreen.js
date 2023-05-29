import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import styled from 'styled-components';
import SearchResult from '../../components/Main/SearchScreen/SearchResult';
import { useRecoilState } from 'recoil';
import { searchedResultState } from '../../states';
import axios from 'axios';
import { baseURL } from '../../api/client';

const SearchScreen = () => {
  const [searchInput, setSearchInput] = useState('');
  const [seachedMovie, setSearchedResult] = useRecoilState(searchedResultState);
  const onSearchHandler = (event) => {
    setSearchInput(event.target.value);
  };
  const onKeyDownHandler = (event) => {
    if (event.key === 'Enter') {
      onSubmitHandler();
    }
  };

  const getSearchAPI = async () => {
    await axios
      .get(
        `http://ec2-3-34-203-105.ap-northeast-2.compute.amazonaws.com/search`,
        {
          headers: {
            'Content-Type': `application/json`,
          },
          params: {
            keyword: searchInput,
          },
        }
      )
      .then((response) => {
        console.log('search', response.data.data);
        setSearchedResult(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getSearchAPI();
  }, [searchInput]);

  return (
    <Container>
      <SearchInput
        placeholder="작품명을 검색해보세요."
        value={searchInput}
        onChange={onSearchHandler}
        onKeyDown={onKeyDownHandler}
      />
      <SearchResult />
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
