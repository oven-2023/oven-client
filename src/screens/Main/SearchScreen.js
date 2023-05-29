import React, { useEffect } from 'react';
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
      .get(`${baseURL}/search`, {
        headers: {
          'Content-Type': `application/json`,
        },
        params: {
          keyword: searchInput,
        },
      })
      .then((response) => {
        console.log(response);
        // setSearchedResult(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getSearchAPI();
  }, [keyword]);

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
