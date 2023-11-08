import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  Image,
} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRecoilState } from 'recoil';
import { useridState } from '../../../states';

const Chat = ({ chatList }) => {
  const [userid, setUserid] = useRecoilState(useridState);

  return (
    <>
      {chatList?.map((chat, index) => (
        <View key={index}>
          {chat.sender === userid ? (
            <MyChatContainer>
              <Row>
                <TimeText>{chat.sendTime}</TimeText>
                <TextView msgLength={chat.content.length}>
                  <MsgText>{chat.content}</MsgText>
                </TextView>
              </Row>
            </MyChatContainer>
          ) : (
            <OthersChatContainer>
              <User>
                <UserImg name="person" size={20} />
                <UserName>{chat.sender}</UserName>
              </User>
              <Row>
                <TextView msgLength={chat.content.length}>
                  <MsgText>{chat.content}</MsgText>
                </TextView>
                <TimeText>{chat.sendTime}</TimeText>
              </Row>
            </OthersChatContainer>
          )}
        </View>
      ))}
    </>
  );
};

const MyChatContainer = styled.View`
  margin-left: auto;
  padding: 10px;
`;

const OthersChatContainer = styled(MyChatContainer)`
  margin-left: 0;
`;

const User = styled.View`
  margin: 0px 20px;
`;

const UserImg = styled(Icon)``;

const UserName = styled.Text`
  font-family: 'kotra';
  font-size: 20px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TextView = styled.View`
  background-color: white;
  /* min-width: ${(props) => props.msgLength * 10}px; */
  border-radius: 10px;
  padding: 15px;
  margin: 5px 10px;
`;

const MsgText = styled.Text`
  font-family: 'kotra';
  color: black;
`;

const TimeText = styled.Text`
  margin: 0px 5px;
  font-family: 'kotra';
`;

export default Chat;
