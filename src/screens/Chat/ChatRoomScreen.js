import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  Image,
} from 'react-native';
import WebSocket from 'react-native-websocket';
import styled from 'styled-components';
import { Dimensions, TouchableOpacity, Alert } from 'react-native';
import RoomInfo from '../../components/Chat/ChatRoomScreen/RoomInfo';
import ChatInput from '../../components/Chat/ChatRoomScreen/ChatInput';
import ChatBoard from '../../components/Chat/ChatRoomScreen/ChatBoard';
import * as StompJs from '@stomp/stompjs';
import { BEIGE, BROWN, GREEN, ORANGE, RED } from '../../css/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { baseURL } from '../../api/client';
import axios from 'axios';

const ChatRoomScreen = ({ route }) => {
  const [ws, setWs] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState('');
  const { chatroomId } = route.params;
  const [chatRoomInfo, setChatRoomInfo] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('accessToken')
      .then((value) => {
        postEnterRoomAPI(value);
      })
      .catch((error) => {
        console.log('Token Error:', error);
      });
    console.log({ chatroomId }.chatroomId);
  }, []);

  const postEnterRoomAPI = async (accessToken) => {
    await axios
      .post(
        `${baseURL}/chatrooms/${chatroomId}`,
        {
          chatroomId: { chatroomId }.chatroomId,
        },
        {
          headers: {
            'Content-Type': `application/json`,
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data.data);
        setChatRoomInfo(response.data.data);
        if (response.data.data.newEnter)
          Alert.alert(
            response.data.data.title,
            '방에 입장하신 것을 환영합니다!'
          );
      })
      .catch(function (error) {
        console.log('postMakeRoom', error);
        console.log(roomname, num, providerId);
      });
  };

  // const connect = () => {
  //   try {
  //     const clientdata = new StompJs.Client({
  //       brokerURL: 'ws://localhost:8080/chat',
  //       connectHeaders: {
  //         login: '',
  //         passcode: 'password',
  //       },
  //       debug: function (str) {
  //         console.log(str);
  //       },
  //       reconnectDelay: 5000, // 자동 재 연결
  //       heartbeatIncoming: 4000,
  //       heartbeatOutgoing: 4000,
  //     });

  //     // 구독
  //     clientdata.onConnect = function () {
  //       clientdata.subscribe('/sub/channels/' + chatroomId, callback);
  //     };

  //     clientdata.activate(); // 클라이언트 활성화
  //     changeClient(clientdata); // 클라이언트 갱신
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const disConnect = () => {
  //   // 연결 끊기
  //   if (client === null) {
  //     return;
  //   }
  //   client.deactivate();
  // };

  // // 콜백함수 => ChatList 저장하기
  // const callback = function (message) {
  //   if (message.body) {
  //     let msg = JSON.parse(message.body);
  //     setChatList((chats) => [...chats, msg]);
  //   }
  // };

  // const sendChat = () => {
  //   if (chat === '') {
  //     return;
  //   }

  //   client.publish({
  //     destination: '/pub/chat/' + chatroomId,
  //     body: JSON.stringify({
  //       type: '',
  //       sender: userId,
  //       channelId: '1',
  //       data: chat,
  //     }),
  //   });

  //   setChat('');
  // };

  // useEffect(() => {
  //   connect();
  //   return () => disConnect();
  // }, []);

  // useEffect(() => {
  //   // 웹소켓 서버 주소를 설정합니다.
  //   const serverUrl = 'ws://your-websocket-server-url';
  //   // WebSocket 인스턴스를 생성하고 서버와 연결합니다.
  //   const wsInstance = new WebSocket(serverUrl);
  //   setWs(wsInstance);

  //   // 메시지 수신 이벤트 핸들러를 등록합니다.
  //   wsInstance.onmessage = (event) => {
  //     const messageFromServer = event.data;
  //     // 수신된 메시지를 상태에 저장합니다.
  //     setReceivedMessage(messageFromServer);
  //   };

  //   // 컴포넌트 언마운트 시 WebSocket 연결을'`` 해제합니다.
  //   return () => {
  //     wsInstance.close();
  //   };
  // }, []);

  // // 메시지를 전송하는 함수
  // const sendMessage = () => {
  //   if (ws && message.trim() !== '') {
  //     ws.send(message);
  //     setMessage('');
  //   }
  //   alert('전송');
  // };

  return (
    <SafeAreaView>
      <ScreenContainer>
        <RoomInfo chatRoomInfo={chatRoomInfo} />
        <ChatBoard chatRoomInfo={chatRoomInfo} />
        <ChatInput />
      </ScreenContainer>
    </SafeAreaView>
  );
};

const ScreenContainer = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
  align-items: center;
  background-color: ${BEIGE};
`;

const MsgContainer = styled.View`
  background-color: ${BEIGE};
  width: 100%;
  height: 60%;
`;

const SingleMsg = styled.View``;

const UserImg = styled.Image``;

const UserName = styled.Text``;

const BtnText = styled.Text``;

export default ChatRoomScreen;
