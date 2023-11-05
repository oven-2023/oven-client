import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView, Alert } from 'react-native';
import styled from 'styled-components';
import MainLayout from '../../components/Layout/MainLayout';
import OttButtonList from '../../components/Subscription/OttButtonList';
import ChatRoomButton from '../../components/Chat/ChatHomeScreen/ChatRoomButton';
import { useRecoilState } from 'recoil';
import { clickedOttState } from '../../states';
import { useIsFocused } from '@react-navigation/native';
import ActionButton from 'react-native-action-button';
import * as Font from 'expo-font';
import { BROWN, RED } from '../../css/theme';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { baseURL } from '../../api/client';
import SubLayout from '../../components/Layout/SubLayout';

const SubscriptionScreen = ({ navigation }) => {
  const [clickedOtt, setClickedOtt] = useRecoilState(clickedOttState);
  const [clickedRoom, setClickedRoom] = useState('');
  const [chatRooms, setChatRooms] = useState('');
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      setClickedOtt(null);
    }
  }, [isFocused]);

  useEffect(() => {
    AsyncStorage.getItem('accessToken')
      .then((value) => {
        getChatRoomsAPI(value);
      })
      .catch((error) => {
        console.log('Error getting access token:', error);
      });
  }, [clickedOtt]);

  const getChatRoomsAPI = async (accessToken) => {
    await axios
      .get(`${baseURL}/chatrooms`, {
        headers: {
          'Content-Type': `application/json`,
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          providerId: clickedOtt,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        console.log(clickedOtt);
        setChatRooms(response.data.data);
      })
      .catch(function (error) {
        console.log('getChatRooms', error);
      });
  };

  const rooms = [
    {
      id: 1,
      title: '구독방1',
      wholeNum: 4,
      count: 0,
      providerId: 1,
    },
    {
      id: 2,
      title: '구독방2',
      wholeNum: 4,
      count: 0,
      providerId: 2,
    },
    {
      id: 3,
      title: '구독방3',
      wholeNum: 4,
      count: 0,
      providerId: 3,
    },
    {
      id: 4,
      title: '구독방4',
      wholeNum: 4,
      count: 4,
      providerId: 4,
    },
    {
      id: 5,
      title: '구독방5',
      wholeNum: 4,
      count: 0,
      providerId: 4,
    },
    {
      id: 6,
      title: '구독방6',
      wholeNum: 4,
      count: 0,
      providerId: 3,
    },
    {
      id: 7,
      title: '구독방6',
      wholeNum: 4,
      count: 0,
      providerId: 3,
    },
    {
      id: 8,
      title: '구독방6',
      wholeNum: 4,
      count: 0,
      providerId: 3,
    },
    {
      id: 9,
      title: '구독방6',
      wholeNum: 4,
      count: 0,
      providerId: 3,
    },
  ];

  const actions = [
    {
      icon: require('../../img/addIcon.png'),
      name: '구독 방 생성하기',
    },
  ];

  const filteredRooms = clickedOtt
    ? chatRooms.filter((room) => room.providerId === clickedOtt)
    : chatRooms;

  const onClickHandler = (title, chatroomId) => {
    setClickedRoom(title);
    Alert.alert(
      `${title}`,
      '구독방에 입장하시겠습니까?',
      [
        {
          text: '아니요',
          style: 'cancel',
        },
        {
          text: '네',
          onPress: () =>
            navigation.navigate('ChatRoomScreen', { chatroomId }),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SubLayout>
      <OttBtnContainer>
        <OttButtonList />
      </OttBtnContainer>
      <Centralizer>
        <Scroller>
          <SubTitle>참여 가능한 구독방</SubTitle>
          <ChatRoomListContainer>
            {filteredRooms
              ? filteredRooms.map(
                  ({ chatroomId, title, wholeNum, count, providerId, max }) => (
                    <Touchable
                      key={chatroomId}
                      onPress={
                        max ? null : () => onClickHandler(title, chatroomId)
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
        <FloatingView>
          <ActionButton
            buttonColor="red"
            onPress={() => navigation.navigate('MkSubRoomScreen')}
          />
        </FloatingView>
      </Centralizer>
    </SubLayout>
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
  margin-bottom: 100px;
  height: 100%;
`;

const Centralizer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const OttBtnContainer = styled.View`
  margin: 0px 20px;
  height: 115px;
  flex-direction: column;
`;

const ChatRoomListContainer = styled.View`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 100px;
`;

const SubTitle = styled.Text`
  margin-right: auto;
  margin-left: 20px;
  font-size: 26px;
  font-weight: 500;
  font-family: 'chab';
  color: ${BROWN};
`;

const FloatingView = styled.View`
  flex: 1;
  background-color: ${RED};
  position: absolute;
  right: 50px;
  top: 430px;
`;

export default SubscriptionScreen;
