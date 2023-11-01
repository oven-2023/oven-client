import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import styled from 'styled-components';
import { ORANGE, BROWN } from '../../../css/theme';
import * as Linking from 'expo-linking';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OttRmd = ({ recommendOtt }) => {

  const onHandleLink = (url) => {
    Linking.openURL(url);
  };

  const otts = [
    {
      id: 1,
      ottname: '넷플릭스',
      src: require('../../../img/Netflix.png'),
      url: 'https://www.netflix.com/kr/',
    },
    {
      id: 2,
      ottname: '티빙',
      src: require('../../../img/Tving.png'),
      url: 'https://www.netflix.com/kr/',
    },
    {
      id: 3,
      ottname: '웨이브',
      src: require('../../../img/Wavve.png'),
      url: 'https://www.netflix.com/kr/',
    },
    {
      id: 4,
      ottname: '디즈니플러스',
      src: require('../../../img/DisneyPlus.jpeg'),
      url: 'https://www.netflix.com/kr/',
    },
    {
      id: 5,
      ottname: '쿠팡플레이',
      src: require('../../../img/CoupangPlay.png'),
      url: 'https://www.netflix.com/kr/',
    },
    {
      id: 6,
      ottname: '왓챠',
      src: require('../../../img/Watcha.png'),
      url: 'https://www.netflix.com/kr/',
    },
    {
      id: 7,
      ottname: '애플티비',
      src: require('../../../img/AppleTv.png'),
      url: 'https://www.netflix.com/kr/',
    },
  ];

  return (
    <OttRmdContainer>
      <Touchable onPress={() => onHandleLink(otts[recommendOtt - 1].url)}>
        <OttLogo source={otts[recommendOtt - 1].src} />
        <OttText style={{ transform: [{ skewX: '-10deg' }] }}>
          {otts[recommendOtt - 1].ottname} 바로가기{' '}
          <Icon name="open-in-new" size={20} />
        </OttText>
      </Touchable>
    </OttRmdContainer>
  );
};

const OttRmdContainer = styled.View`
  margin-top: 20;
  border-radius: 20px;
  width: 80%;
  height: 100;
  padding: 15px;
  background-color: white;
  width: 100%;
`;

const OttText = styled.Text`
  font-size: 24px;
  color: ${ORANGE};
  font-weight: 700;
  margin: 7px;
  font-family: 'kotra';
  text-decoration-line: underline;
  font-style: italic;
`;

const OttLogo = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  margin-right: 10px;
`;

const Touchable = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default OttRmd;
