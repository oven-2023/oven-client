import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import styled from 'styled-components';

const ChatHomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>채팅</Text>
      <ChatButton onPress={() => navigation.navigate('ChatRoomScreen')}>hi</ChatButton>
    </SafeAreaView>
  );
};

const ChatButton = styled.Text`
  width: 100px;
  height: 100px;
  background-color: pink;
`;

export default ChatHomeScreen;