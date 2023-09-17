import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import styled from 'styled-components';
import MainLayout from '../../components/Layout/MainLayout';
import OttButtonList from '../../components/Subscription/OttButtonList';
import ChatRoomButton from '../../components/Chat/ChatRoomButton';
import { useRecoilState } from 'recoil';
import { clickedOttState } from '../../states';
import { useIsFocused } from '@react-navigation/native';

const SubscriptionScreen = ({ navigation }) => {
  const [clickedOtt, setClickedOtt] = useRecoilState(clickedOttState);
  const isFocused = useIsFocused(); 

  useEffect(() => {
    if (!isFocused) {
      setClickedOtt(null);
    }
  }, [isFocused]);
  
  const rooms = [
    {
      id: 1,
      name: '구독방1',
      desc: '넷플릭스방입니다.',
      wholenum: 4,
      leftnum: 0,
      ottid: 1,
    },
    {
      id: 2,
      name: '구독방2',
      desc: '왓챠방입니다.',
      wholenum: 4,
      leftnum: 0,
      ottid: 2,
    },
    {
      id: 3,
      name: '구독방3',
      desc: '웨이브방입니다.',
      wholenum: 4,
      leftnum: 0,
      ottid: 3,
    },
    {
      id: 4,
      name: '구독방4',
      desc: '티빙방입니다.',
      wholenum: 4,
      leftnum: 0,
      ottid: 4,
    },
    {
      id: 5,
      name: '구독방5',
      desc: '넷플릭스방입니다.',
      wholenum: 4,
      leftnum: 0,
      ottid: 5,
    },
    {
      id: 6,
      name: '구독방6',
      desc: '왓챠방입니다',
      wholenum: 4,
      leftnum: 0,
      ottid: 6,
    },
  ];

  const filteredRooms = clickedOtt
    ? rooms.filter((room) => room.ottid === clickedOtt)
    : rooms;

  return (
    <MainLayout>
      <OttBtnContainer>
        <OttButtonList />
      </OttBtnContainer>
      <Centralizer>
        <Scroller onEndReachedThreshold={0.9}>
          <SubTitle>참여 가능한 구독방</SubTitle>
          <ChatRoomListContainer>
            {filteredRooms.map(({ id, name, desc, wholenum, leftnum }) => (
              <Touchable
                key={id}
                onPress={() => navigation.navigate('ChatRoomScreen')}
              >
                <ChatRoomButton
                  id={id}
                  name={name}
                  desc={desc}
                  wholenum={wholenum}
                  leftnum={leftnum}
                />
              </Touchable>
            ))}
          </ChatRoomListContainer>
        </Scroller>
      </Centralizer>
    </MainLayout>
  );
};

const Touchable = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
`;

const Scroller = styled.ScrollView`
  width: 100%;
`;

const Centralizer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
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
`;

export default SubscriptionScreen;
