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

const Chat = () => {
  const [msgtxt, setMsgtxt] = useState('메세지입ㄹㅇㄴㄹㅇㄴㄹㄴㄹ니다.');
  const [isMe, setIsMe] = useState(true);

  return isMe ? (
    <MyChatContainer>
      <Row>
        <TimeText>3:00</TimeText>
        <TextView msgLength={msgtxt.length}>
          <MsgText>{msgtxt}</MsgText>
        </TextView>
      </Row>
    </MyChatContainer>
  ) : (
    <OthersChatContainer>
      <User>
        <UserImg name="person" />
        <UserName>사용자1</UserName>
      </User>
      <Row>
        <TextView msgLength={msgtxt.length}>
          <MsgText>{msgtxt}</MsgText>
        </TextView>
        <TimeText>3:00</TimeText>
      </Row>
    </OthersChatContainer>
  );
};

const MyChatContainer = styled.View`
  margin-left: auto;
`;

const OthersChatContainer = styled(MyChatContainer)`
  margin-left: 0;
`;

const User = styled.View`
  margin: 10px;
`;

const UserImg = styled(Icon)``;

const UserName = styled.Text``;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TextView = styled.View`
  background-color: white;
  width: ${(props) => props.msgLength * 15}px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
  margin: 0px 10px;
`;

const MsgText = styled.Text``;

const TimeText = styled.Text`
  margin: 0px 10px;
`;

export default Chat;
