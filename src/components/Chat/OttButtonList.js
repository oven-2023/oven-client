import React from 'react';
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import styled from 'styled-components';

const OttButtonList = () => {
  const otts = [
    {
      id: 1,
      ottname: 'Netflix',
      src: require('../../img/Netflix.png'),
    },
    {
      id: 2,
      ottname: 'Watcha',
      src: require('../../img/Watcha.png'),
    },
    {
      id: 3,
      ottname: 'Wavve',
      src: require('../../img/Wavve.png'),
    },
    {
      id: 4,
      ottname: 'Tving',
      src: require('../../img/Tving.png'),
    },
  ];

  return (
    <Container showsVerticalScrollIndicator={false} horizontal={true}>
      <Ott>
        <OvenLogo source={require('../../img/oven.png')} />
        <OttName>전체</OttName>
      </Ott>
      {otts.map(({ id, ottname, src }) => (
        <Ott key={id}>
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

const Ott = styled.View`
  margin-right: 20px;
  margin-top: 10px;
  align-items: center;
`;

const OvenLogo = styled.Image`
  width: 70px;
  height: 70px;
`;

const OttLogo = styled(OvenLogo)`
  border-radius: 15px;
  border: 1px solid black;
`;

const OttName = styled.Text`
  margin-top: 5px;
  align-items: center;
  font-weight: 600;
`;

export default OttButtonList;
