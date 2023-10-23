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
import { BROWN } from '../../css/theme';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { baseURL } from '../../api/client';

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
      wholenum: 4,
      leftnum: 0,
      ottid: 1,
    },
    {
      id: 2,
      title: '구독방2',
      wholenum: 4,
      leftnum: 0,
      ottid: 2,
    },
    {
      id: 3,
      title: '구독방3',
      wholenum: 4,
      leftnum: 0,
      ottid: 3,
    },
    {
      id: 4,
      title: '구독방4',
      wholenum: 4,
      leftnum: 0,
      ottid: 4,
    },
    {
      id: 5,
      title: '구독방5',
      wholenum: 4,
      leftnum: 0,
      ottid: 4,
    },
    {
      id: 6,
      title: '구독방6',
      wholenum: 4,
      leftnum: 0,
      ottid: 3,
    },
  ];

  const actions = [
    {
      icon: require('../../img/addIcon.png'),
      name: '구독 방 생성하기',
    },
  ];

  const filteredRooms = clickedOtt
    ? rooms.filter((room) => room.ottid === clickedOtt)
    : rooms;

  const onClickHandler = (title) => {
    setClickedRoom(name);
    Alert.alert(
      `${name}`,
      '구독방에 입장하시겠습니까?',
      [
        {
          text: '아니요',
          style: 'cancel',
        },
        { text: '네', onPress: () => navigation.navigate('ChatRoomScreen') },
      ],
      { cancelable: false }
    );
  };

  return (
    <MainLayout>
      <OttBtnContainer>
        <OttButtonList />
      </OttBtnContainer>
      <Centralizer>
        <Scroller onEndReachedThreshold={0.9}>
          <SubTitle>참여 가능한 구독방</SubTitle>
          <ChatRoomListContainer>
            {filteredRooms.map(({ index, title, wholenum, leftnum, ottid }) => (
              <Touchable key={index} onPress={() => onClickHandler(title)}>
                <ChatRoomButton
                  index={index}
                  title={title}
                  wholenum={wholenum}
                  leftnum={leftnum}
                  ottid={ottid}
                />
              </Touchable>
            ))}
          </ChatRoomListContainer>
        </Scroller>
        <FloatingView>
          <ActionButton
            buttonColor="red"
            onPress={() => navigation.navigate('MkSubRoomScreen')}
          />
        </FloatingView>
      </Centralizer>
    </MainLayout>
  );
};

const Touchable = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  height: 110px;
`;

const Scroller = styled.ScrollView`
  width: 100%;
`;

const Centralizer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const OttBtnContainer = styled.View`
  margin: 0px 20px;
  height: 130px;
  flex-direction: column;
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
  font-family: 'dunggeunmo';
  color: ${BROWN};
`;

const FloatingView = styled.View`
  flex: 1;
  background-color: red;
  position: absolute;
  right: 50px;
  top: 480px;
`;

export default SubscriptionScreen;
