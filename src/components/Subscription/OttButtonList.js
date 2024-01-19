import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import { clickedOttState } from '../../states';
import { BROWN } from '../../css/theme';

const OttButtonList = () => {
  const otts = [
    {
      id: 1,
      ottname: '넷플릭스',
      src: require('../../img/Netflix.png'),
    },
    {
      id: 2,
      ottname: '티빙',
      src: require('../../img/Tving.png'),
    },
    {
      id: 3,
      ottname: '웨이브',
      src: require('../../img/Wavve.png'),
    },
    {
      id: 4,
      ottname: '디즈니플러스',
      src: require('../../img/DisneyPlus.jpeg'),
    },
    {
      id: 5,
      ottname: '쿠팡플레이',
      src: require('../../img/CoupangPlay.png'),
    },
    {
      id: 6,
      ottname: '왓챠',
      src: require('../../img/Watcha.png'),
    },
    {
      id: 7,
      ottname: '애플티비',
      src: require('../../img/AppleTv.png'),
    },
  ];

  const [clickedOtt, setClickedOtt] = useRecoilState(clickedOttState);

  const onWholeBtnHandler = () => {
    setClickedOtt(null);
  };

  const onSortBtnHandler = (id) => {
    setClickedOtt(id);
  };

  return (
    <Container showsVerticalScrollIndicator={false} horizontal={true}>
      <Ott
        style={{
          opacity: clickedOtt === null ? 1 : 0.3,
        }}
        onPress={onWholeBtnHandler}
      >
        <OvenLogo source={require('../../img/oven.png')} />
        <OttName>전체</OttName>
      </Ott>
      {otts.map(({ id, ottname, src }) => (
        <Ott
          key={id}
          style={{
            opacity: clickedOtt === id ? 1 : 0.3,
          }}
          onPress={() => onSortBtnHandler(id)}
        >
          <OttLogo source={src} resizeMode="contain" />
          <OttName>{ottname}</OttName>
        </Ott>
      ))}
    </Container>
  );
};

const Container = styled.ScrollView`
  flex-direction: row;
  margin-top: 10px;
`;

const Ott = styled.TouchableOpacity`
  margin-right: 20px;
  margin-top: 10px;
  align-items: center;
`;

const OvenLogo = styled.Image`
  width: 60px;
  height: 60px;
`;

const OttLogo = styled(OvenLogo)`
  border-radius: 15px;
  border: 1px solid ${BROWN};
`;

const OttName = styled.Text`
  margin-top: 5px;
  align-items: center;
  font-weight: 600;
  font-family: 'kotra';
  color: ${BROWN};
`;

export default OttButtonList;
