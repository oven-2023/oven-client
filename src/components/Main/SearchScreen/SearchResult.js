import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { searchInputState } from '../../../states';

const SearchResult = () => {
  //테스팅
  const searchList = [
    {
      title: '제목1',
      ott: 'netflix1',
      detail: '설명1',
      src: 'src1',
    },
    {
      title: '제목2',
      ott: 'netflix2',
      detail: '설명2',
      src: 'src2',
    },
    {
      title: '제목3',
      ott: 'netflix3',
      detail: '설명3',
      src: 'src3',
    },
    {
      title: '제목4',
      ott: 'netflix4',
      detail: '설명4',
      src: 'src4',
    },
  ];

  const [searchInput, setSearchInput] = useRecoilState(searchInputState);
  return (
    <SearchResultContainer>
      <Movies>
        {searchList.map(({ title, ott, detail }) => {
          return (
            <Movie key={title}>
              <MoviePoster />
              <TextContainer>
                <MovieTitle>{title}</MovieTitle>
                <Ott>{ott}</Ott>
                <MovieDetail>{detail}</MovieDetail>
              </TextContainer>
            </Movie>
          );
        })}
      </Movies>
    </SearchResultContainer>
  );
};

const SearchResultContainer = styled.View`
  border: 2px solid;
  height: 650;
  padding: 15px;
  width: 80%;
  overflow: scroll;
`;

const Movies = styled.View``;

const MoviePoster = styled.View`
  background-color: pink;
  height: 90px;
  width: 80px;
  border: 2px solid;
  margin: 10px;
`;

const Movie = styled.View`
  border: 2px solid;
  flex-direction: row;
  margin-top: 10px;
`;

const MovieTitle = styled.Text`
  font-size: 30px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 5px;
`;

const Ott = styled.Text`
  font-size: 20px;
  margin-left: 10;
`;

const MovieDetail = styled.Text`
  font-size: 20px;
  margin-left: 10;
`;

const TextContainer = styled.View``;

export default SearchResult;
