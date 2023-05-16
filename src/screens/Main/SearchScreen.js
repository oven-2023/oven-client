import React from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import styled from 'styled-components';
import SearchResult from '../../components/Main/SearchScreen/SearchResult';

const SearchScreen = () => {
  return (
    <Container>
      <SearchInput placeholder="작품명, 감독, 배우를 검색해보세요." />
      <SearchResult />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const SearchInput = styled.TextInput`
  background-color: whitesmoke;
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
