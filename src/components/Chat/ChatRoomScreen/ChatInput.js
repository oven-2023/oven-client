import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  Image,
  Dimensions,
  InputAccessoryView,
} from 'react-native';
import styled from 'styled-components';
import { BEIGE, ORANGE, BROWN } from '../../../css/theme';
import Icon from 'react-native-vector-icons/Ionicons';

const ChatInput = ({ value, onChangeText, onPress }) => {
  return (
    <ChatInputContainer>
      <InputAccessoryView style={{ flexDirection: 'row' }}>
        <MsgInput
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onPress}
        />
        {/* <SendBtn
          name="paper-plane-outline"
          size={30}
          color={ORANGE}
          onPress={onPress}
        /> */}
      </InputAccessoryView>
    </ChatInputContainer>
  );
};

const ChatInputContainer = styled.View`
  width: ${({ width }) => Dimensions.get('window').width}px;
  background-color: ${BEIGE};
  justify-content: center;
  align-items: center;
`;

const MsgInput = styled.TextInput`
  width: ${({ width }) => Dimensions.get('window').width}px;
  height: 50px;
  border: 3px solid ${BROWN};
  background-color: white;
  font-size: 18px;
  border-radius: 20px;
  font-family: 'kotra';
  padding: 0px 15px;
  justify-content: center;
  align-items: center;
`;

const SendBtn = styled(Icon)`
  width: 50px;
  height: 50px;
  padding: 5px;
  margin-left: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: pink;
`;

export default ChatInput;
