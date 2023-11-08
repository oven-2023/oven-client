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
import { userState } from '../../../states';
import { ORANGE } from '../../../css/theme';

const Chat = ({ chatList }) => {
  const [user, setUser] = useRecoilState(userState);

  return (
    <>
      {chatList?.map((chat, index) => (
        <View key={index}>
          {chat.sender === user ? (
            <MyChatContainer>
              <Row>
                <TimeText>{chat.sendTime}</TimeText>
                <TextView1 msgLength={chat.content.length}>
                  <MsgText>{chat.content}</MsgText>
                </TextView1>
              </Row>
            </MyChatContainer>
          ) : (
            <OthersChatContainer>
              <User>
                <UserImg name="person" size={20} />
                <UserName>{chat.sender}</UserName>
              </User>
              <Row>
                <TextView2 msgLength={chat.content.length}>
                  <MsgText>{chat.content}</MsgText>
                </TextView2>
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
  flex-direction: row;
`;

const UserImg = styled(Icon)`
margin-right: 10px;
`;

const UserName = styled.Text`
  font-family: 'kotra';
  font-size: 20px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TextView1 = styled.View`
  background-color: ${ORANGE};
  /* min-width: ${(props) => props.msgLength * 10}px; */
  border-radius: 10px;
  padding: 15px;
  margin: 5px 10px;
`;

const TextView2 = styled(TextView1)`
 background-color: white;
`

const MsgText = styled.Text`
  font-family: 'kotra';
  color: black;
`;

const TimeText = styled.Text`
  margin: 0px 5px;
  font-family: 'kotra';
`;

export default Chat;
