import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import styled from 'styled-components';
import { BEIGE, ORANGE, BROWN } from '../../../css/theme';
import Icon from 'react-native-vector-icons/Ionicons';

const ChatInput = ({ value, onChangeText, onPress }) => {
  return (
    <ChatInputContainer>
      <MsgInput
        value={value}
        onChangeText={onChangeText}
      />
      <SendBtn
        name="paper-plane-outline"
        size={30}
        color={ORANGE}
        onPress={onPress}
      />
    </ChatInputContainer>
  );
};

const ChatInputContainer = styled.View`
  width: ${({ width }) => Dimensions.get('window').width - 20}px;
  height: 200px;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 20px;
`;

const MsgInput = styled.TextInput`
  background-color: white;
  width: ${({ width }) => Dimensions.get('window').width - 80}px;
  height: 50px;
  border: 3px solid ${BROWN};
  font-size: 16px;
  border-radius: 20px;
  font-family: 'kotra';
  padding: 0px 20px;
`;

const SendBtn = styled(Icon)`
  width: 40px;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-left: 3px;
  text-align: center;
`;

export default ChatInput;
