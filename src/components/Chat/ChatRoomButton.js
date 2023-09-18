import React from 'react';
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import styled from 'styled-components';

const ChatRoomButton = ({ id, name, wholenum, leftnum, ottid }) => {
  const otts = [
    {
      ottid: 1,
      ottname: 'Netflix',
    },
    {
      ottid: 2,
      ottname: 'Watcha',
    },
    {
      ottid: 3,
      ottname: 'Wavve',
    },
    {
      ottid: 4,
      ottname: 'Tving',
    },
  ];

  const findOtt = otts.find((item) => item.ottid === ottid);

  return (
    <Container index={id}>
      <RoomName>{name}</RoomName>
      <Ott>{findOtt ? findOtt.ottname : ''}</Ott>
      <LeftNum>
        {leftnum}명/{wholenum}명
      </LeftNum>
    </Container>
  );
};

const Container = styled.View`
  width: 90%;
  height: 100px;
  border: 1px solid black;
  padding: 15px;
  margin: 5px 0px;
`;

const RoomName = styled.Text`
  font-weight: 600;
  font-size: 20px;
`;

const Ott = styled.Text`
  margin-top: 5px;
`;

const LeftNum = styled.Text`
  margin-left: auto;
`;

export default ChatRoomButton;
