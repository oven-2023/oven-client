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
import Chat from './Chat';

const ChatBoard = () => {
  return (
    <MsgContainer>
      <Chat />
    </MsgContainer>
  );
};

const MsgContainer = styled.View`
  background-color: skyblue;
  width: 100%;
  height: 60%;
`;

export default ChatBoard;
