import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  Alert,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { baseURL } from '../../api/client.js';
import { BROWN, BEIGE, ORANGE } from '../../css/theme.js';
import {
  isSignupModalState,
  authWorkState,
  lastWorkIdState,
  selectedWorkState,
} from '../../states/index.js';

const MovieSelection = ({ getWorksAPI }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [lastWorkId, setLastWorkId] = useRecoilState(lastWorkIdState);
  const [selectedWork, setSelectedWork] = useRecoilState(selectedWorkState);
  const [isModalOpened, setIsModalOpened] = useRecoilState(isSignupModalState);
  const [workList, setWorkList] = useRecoilState(authWorkState);
  const [selectedPosters, setSelectedPosters] = useState([]);

  useEffect(() => {
    console.log(selectedWork);
  }, [selectedWork]);

  const onEndReached = () => {
    if (!isLoading) {
      setIsLoading(true);
      getWorksAPI();
      setIsLoading(false);
    }
  };

  const handleMoviePress = (workId) => {
    if (selectedWork.includes(workId)) {
      setSelectedWork((prevSelectedWork) =>
        prevSelectedWork.filter((id) => id !== workId)
      );
    } else {
      setSelectedWork((prevSelectedWork) => [...prevSelectedWork, workId]);
    }
  };

  const isSelected = (workId) => selectedPosters.includes(workId);

  return (
    <SearchResultBox>
      <MovieContainer
        showsVerticalScrollIndicator={false}
        data={workList}
        keyExtractor={(item) => item.workId}
        numColumns={3}
        renderItem={({ item }) => {
          const isPosterSelected = selectedWork.includes(item.workId);
          return (
            <Movie onPress={() => handleMoviePress(item.workId)}>
              {item.poster ? (
                <MoviePoster src={item.poster} isSelected={isPosterSelected} />
              ) : (
                <MoviePoster isSelected={isPosterSelected} />
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
  width: 100%;
  padding: 10px 0px;
  align-items: center;
  height: 600px;
`;

const MovieContainer = styled.FlatList``;

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
  border: ${({ isSelected }) =>
    isSelected ? '3px solid red' : '1px solid transparent'};
  opacity: ${({ isSelected }) => (isSelected ? 0.3 : 1)};
`;

const MovieTitle = styled.Text`
  font-size: 12px;
  margin-top: 5;
  text-align: center;
  font-weight: 700;
  font-family: 'kotra';
`;

export default MovieSelection;
