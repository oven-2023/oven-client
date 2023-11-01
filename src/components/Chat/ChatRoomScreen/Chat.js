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
  const [msgtxt, setMsgtxt] = useState('메세지입니다.');
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
        <UserName>임채리</UserName>
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
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TextView = styled.View`
  background-color: white;
  width: ${(props) => props.msgLength * 18}px;
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
`;

const MsgText = styled.Text`
  font-family: 'kotra';
`;

const TimeText = styled.Text`
  margin: 0px 5px;
  font-family: 'kotra';
`;

export default Chat;
