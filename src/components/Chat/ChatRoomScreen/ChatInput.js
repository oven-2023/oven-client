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
import { BEIGE, ORANGE, BROWN } from '../../../css/theme';

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
  width: 100%;
  height: 10%;
  margin-bottom: auto;
  flex-direction: row;
  justify-content: space-evenly;
`;

const MsgInput = styled.TextInput`
  background-color: white;
  width: 80%;
  /* margin-right: auto; */
  height: 50px;
  border: 3px solid ${BROWN};
  font-size: 16px;
  border-radius: 20px;
  font-family: 'kotra';
  padding: 0px 20px;
`;

const SendBtn = styled.TouchableOpacity`
  background-color: ${ORANGE};
  width: 15%;
  height: 50px;
  justify-content: center;
  border: 3px solid white;
  align-items: center;
  border-radius: 20px;
  padding: 5px;
`;

const BtnText = styled.Text`
  font-family: 'kotra';
  font-weight: 800;
  color: white;
  font-size: 20px;
`;

export default ChatInput;
