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

const ChatInput = () => {
  const [message, setMessage] = useState('');

  return (
    <ChatInputContainer>
      <MsgInput value={message} onChangeText={setMessage} />
      <SendBtn>
        <BtnText>전송</BtnText>
      </SendBtn>
    </ChatInputContainer>
  );
};

const ChatInputContainer = styled.View`
  background-color: skyblue;
  width: 100%;
  height: 40%;
  margin-bottom: auto;
  flex-direction: row;
`;

const MsgInput = styled.TextInput`
  background-color: whitesmoke;
  width: 80%;
  margin-right: auto;
  height: 100px;
  border: 3px solid gray;
  font-size: 16px;
`;

const SendBtn = styled.TouchableOpacity`
  background-color: pink;
  width: 20%;
  height: 100px;
  justify-content: center;
  align-items: center;
  border: 3px solid gray;
`;

const BtnText = styled.Text``;

export default ChatInput;
