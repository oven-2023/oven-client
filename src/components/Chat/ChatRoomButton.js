import React from 'react';
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import styled from 'styled-components';

const ChatRoomButton = ({ id, name, desc, wholenum, leftnum }) => {
  return (
    <Container index={id}>
      <RoomName>{name}</RoomName>
      <RoomDesc>{desc}</RoomDesc>
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

const RoomDesc = styled.Text`
  margin-top: 5px;
`;

const LeftNum = styled.Text`
  margin-left: auto;
`;

export default ChatRoomButton;
