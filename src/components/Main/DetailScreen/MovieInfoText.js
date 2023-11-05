import React from 'react';
import { View, SafeAreaView, Text, Button, Dimensions } from 'react-native';
import styled from 'styled-components';
import { FontAwesome } from '@expo/vector-icons';
import { useRecoilState } from 'recoil';
import { detailMovieState, isSummaryLoadingState } from '../../../states';
import { BROWN } from '../../../css/theme';

const MovieInfoText = () => {
  const [detailMovie] = useRecoilState(detailMovieState);
  const [isSummaryLoading, setIsSummaryLoading] = useRecoilState(
    isSummaryLoadingState
  );

  const width = Dimensions.get('window').width;

  return (
    <>
      {isSummaryLoading ? (
        ''
      ) : (
          <SummaryContainer>
            <Title>작품 정보</Title>
            <MovieSummary>{detailMovie?.summary || ''}</MovieSummary>
          </SummaryContainer>
      )}
    </>
  );
};

const Title = styled.Text`
  font-size: 20px;
  color: ${BROWN};
  font-weight: 700;
  font-family: 'kotra';
  padding-top: 20px;
  padding-left: 20px;
`;

const MovieSummary = styled.Text`
  font-size: 18px;
  color: ${BROWN};
  font-weight: 600;
  font-family: 'kotra';
  padding: 20px;
  line-height: 27px;
`;

const SummaryContainer = styled.View`
  min-height: 80px;
  background-color: white;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 30px;
  width: ${({ width }) => Dimensions.get('window').width - 50}px;
`;

export default MovieInfoText;
