import React from 'react';
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import styled from 'styled-components';
import { BEIGE, RED,BROWN } from '../../../css/theme';
import DashedLine from '../../../css/DashedLine';

const ChatRoomButton = ({ id, name, wholenum, leftnum, ottid }) => {
  const otts = [
    {
      ottid: 1,
      ottname: 'Netflix',
      src: require('../../../img/Netflix.png'),
    },
    {
      ottid: 2,
      ottname: 'Watcha',
      src: require('../../../img/Watcha.png'),
    },
    {
      ottid: 3,
      ottname: 'Wavve',
      src: require('../../../img/Wavve.png'),
    },
    {
      ottid: 4,
      ottname: 'Tving',
      src: require('../../../img/Tving.png'),
    },
  ];

  const findOtt = otts.find((item) => item.ottid === ottid);

  return (
    <Container index={id}>
      <OttView
        style={{
          borderStyle: 'dashed',
          borderWidth: 1,
          borderRightColor: 'white',
        }}
      >
        <OttLogo source={findOtt.src} />
      </OttView>

      <DashedLine />

      <Column>
        <RoomName>{name}</RoomName>
        <LeftNum>
          {leftnum}명/{wholenum}명
        </LeftNum>
      </Column>
    </Container>
  );
};

const Container = styled.View`
  width: 90%;
  height: 100px;
  margin: 5px 0px;
  background-color: white;
  border-radius: 20px;
  flex-direction: row;
  flex: 1;
`;

const RoomName = styled.Text`
  font-weight: 800;
  font-size: 20px;
  font-family: 'dunggeunmo';
  color: ${BROWN};
`;

const OttLogo = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 15px;
`;

const OttView = styled.View`
  width: 30%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const LeftNum = styled.Text`
  font-family: 'dunggeunmo';
  margin-top: 10px;
  color: ${BROWN};
`;

const Column = styled.View`
  flex-direction: column;
  width: 60%;
  justify-content: center;
  align-items: center;
`;

export default ChatRoomButton;
