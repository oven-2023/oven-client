import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Chat from './Chat';
import { BEIGE } from '../../../css/theme';

const ChatBoard = ({ chatList, onScrollEnd }) => {
   const chatScrollRef = useRef();
   const chatContentRef = useRef();
   const [totalChatHeight, setTotalChatHeight] = useState(0);

   const onScrollChat = (e) => {
     if (e?.nativeEvent.contentOffset.y == 0) {
       setTotalChatHeight(e.nativeEvent.contentSize.height);
       onScrollEnd();
     }
   };

   const onChangeChatSize = (e) => {
     chatContentRef.current.measure((x, y, width, height) => {
       chatScrollRef.current.scrollTo({
         x: 0,
         y: height - totalChatHeight,
         animated: false,
       });
     });
   };

  return (
    <MsgContainer
      onScroll={onScrollChat}
      ref={chatScrollRef}
      onContentSizeChange={onChangeChatSize}
      scrollEventThrottle={16}
    >
      <View ref={chatContentRef}>
        <Chat chatList={chatList} />
      </View>
    </MsgContainer>
  );
};

const MsgContainer = styled.ScrollView`
  background-color: ${BEIGE};
  width: 100%;
  height: ${Dimensions.get('window').height - 300}px;
`;

export default ChatBoard;
