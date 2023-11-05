import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Button, ScrollView } from 'react-native';
import styled from 'styled-components';
import OttList from '../../components/Main/DetailScreen/OttList';
import OttButtonList from '../../components/Subscription/OttButtonList';
import ChatRoomButton from '../../components/Chat/ChatHomeScreen/ChatRoomButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MainLayout from '../../components/Layout/MainLayout';
import { BROWN } from '../../css/theme';
import { baseURL } from '../../api/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ChatHomeScreen = ({ navigation }) => {
  const [myChatRooms, setMyChatRooms] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('accessToken')
      .then((value) => {
        getMyChatRoomsAPI(value);
      })
      .catch((error) => {
        console.log('Error getting access token:', error);
      });
  }, []);

  const getMyChatRoomsAPI = async (accessToken) => {
    await axios
      .get(`${baseURL}/chatrooms/my`, {
        headers: {
          'Content-Type': `application/json`,
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setMyChatRooms(response.data.data);
      })
      .catch(function (error) {
        console.log('getMyChatRooms', error);
      });
  };

  const rooms = [
    {
      title: '참여방1',
      wholeNum: 4,
      count: 0,
      providerId: 1,
    },
    {
      title: '참여방2',
      wholeNum: 4,
      count: 1,
      providerId: 2,
    },
    {
      title: '참여방3',
      wholeNum: 4,
      count: 2,
      providerId: 3,
    },
    {
      title: '참여방4',
      wholeNum: 4,
      count: 3,
      providerId: 4,
    },
    {
      title: '참여방4',
      wholeNum: 4,
      count: 0,
      providerId: 1,
    },
    {
      title: '참여방4',
      wholeNum: 4,
      count: 0,
      providerId: 2,
    },
  ];
  return (
    <MainLayout>
      <Scroller>
        <SubTitle>내가 참여 중인 구독방</SubTitle>
        <ChatRoomListContainer>
          {myChatRooms
            ? myChatRooms.map(
                ({ chatroomId, title, wholeNum, count, providerId, max }) => (
                  <Touchable
                    onPress={() =>
                      navigation.navigate('ChatRoomScreen', { chatroomId })
                    }
                  >
                    <ChatRoomButton
                      index={chatroomId}
                      title={title}
                      wholeNum={wholeNum}
                      count={count}
                      providerId={providerId}
                      max={max}
                    />
                  </Touchable>
                )
              )
            : ''}
        </ChatRoomListContainer>
      </Scroller>
    </MainLayout>
  );
};

const Touchable = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  height: 90px;
  margin: 5px 0px;
`;

const Scroller = styled.ScrollView`
  width: 100%;
`;

const ChatRoomListContainer = styled.View`
  width: 100%;
  margin-top: 10px;
`;

const SubTitle = styled.Text`
  margin-right: auto;
  margin-left: 20px;
  font-size: 26px;
  font-weight: 500;
  margin-top: 8px;
  color: ${BROWN};
  font-family: 'chab';
`;

export default ChatHomeScreen;
