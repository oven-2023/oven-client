import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components';
import { Dimensions, Alert } from 'react-native';
import RoomInfo from '../../components/Chat/ChatRoomScreen/RoomInfo';
import ChatInput from '../../components/Chat/ChatRoomScreen/ChatInput';
import ChatBoard from '../../components/Chat/ChatRoomScreen/ChatBoard';
import * as StompJs from '@stomp/stompjs';
import { BEIGE, BROWN, GREEN, ORANGE, RED } from '../../css/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { baseURL } from '../../api/client';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { useridState } from '../../states';
import SplashScreen from '../../components/Layout/SplashScreen';

const ChatRoomScreen = ({ route }) => {
  const [showSplash, setShowSplash] = useState(true);
  const { chatroomId } = route.params;
  const roomid = { chatroomId }.chatroomId;
  const [userid, setUserid] = useRecoilState(useridState);
  const [chatRoomInfo, setChatRoomInfo] = useState('');
  const client = useRef({});
  const [chat, setChat] = useState('');
  const [chatList, setChatList] = useState([]);

  const disConnect = () => {
    client.current.deactivate();
    console.log('채팅이 종료되었습니다.');
  };

  const handleMessage = (e) => {
    setChat(e);
  };

  useEffect(() => {
    const subscribe = () => {
      client.current.subscribe(
        `/sub/chatrooms/${roomid}/message`,
        onMessageReceived
      );
    };

    const connect = (accessToken) => {
      client.current = new StompJs.Client({
        brokerURL: 'wss://hs-ceos.shop/ws/endpoint',
        connectHeaders: {
          'Content-Type': `application/json`,
          Authorization: `Bearer ${accessToken}`,
        },
        debug: function (str) {
          console.log(str);
        },
        onConnect: () => {
          subscribe();
        },
      });
      console.log('client', client);
      client.current.activate();
    };

    AsyncStorage.getItem('accessToken')
      .then((value) => {
        postEnterRoomAPI(value);
        connect(value);
      })
      .catch((error) => {
        console.log('Token Error:', error);
      });
    return () => disConnect();
  }, [roomid]);

  const postEnterRoomAPI = async (accessToken) => {
    await axios
      .post(
        `${baseURL}/chatrooms/${chatroomId}`,
        {
          chatroomId: roomid,
        },
        {
          headers: {
            'Content-Type': `application/json`,
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        setChatRoomInfo(response.data.data);
        setChatList(response.data.data.messages);
        setShowSplash(false);
        if (response.data.data.newEnter)
          Alert.alert(
            response.data.data.title,
            '구독방에 입장하신 것을 환영합니다!'
          );
      })
      .catch(function (error) {
        console.log('postMakeRoom', error);
        console.log(roomname, num, providerId);
      });
  };

  const sendChat = () => {
    if (chat === '' || !client.current.connected) {
      return;
    }
    client.current.publish({
      destination: '/pub/chatrooms/' + roomid + '/message',
      body: JSON.stringify({
        senderId: userid,
        content: chat,
      }),
    });
    setChat('');
  };

  // 콜백함수 => chatList 저장하기
  const onMessageReceived = (message) => {
    console.log('!!!!!!!!!!!!!!!!!!!', JSON.parse(message.body));
    const messageBody = JSON.parse(message.body);
    const { content, sendTime, senderId } = messageBody;
    if (content !== '') {
      const newChat = {
        content,
        sendTime,
        senderId,
      };
      if (chatList === null) setChatList(newChat);
      else {
        setChatList((prevChatList) => [...prevChatList, newChat]);
      }
    }
  };

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <SafeAreaView>
          <ScreenContainer>
            <RoomInfo chatRoomInfo={chatRoomInfo} />
            <ChatBoard chatList={chatList} />
            <ChatInput
              value={chat}
              onChangeText={handleMessage}
              onPress={sendChat}
            />
          </ScreenContainer>
        </SafeAreaView>
      )}
    </>
  );
};

const ScreenContainer = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
  align-items: center;
  background-color: ${BEIGE};
`;

export default ChatRoomScreen;
