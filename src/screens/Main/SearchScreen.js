import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components';

const SearchScreen = () => {
  return (
    <Container>
      <Text>검색</Text>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export default SearchScreen;