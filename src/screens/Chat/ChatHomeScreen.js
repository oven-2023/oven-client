import React from 'react';
import { SafeAreaView, Text, Button, ScrollView } from 'react-native';
import styled from 'styled-components';
import OttList from '../../components/Main/DetailScreen/OttList';
import OttButtonList from '../../components/Subscription/OttButtonList';
import ChatRoomButton from '../../components/Chat/ChatHomeScreen/ChatRoomButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MainLayout from '../../components/Layout/MainLayout';

const ChatHomeScreen = ({ navigation }) => {
  const rooms = [
    {
      id: 1,
      name: '참여방1',
      wholenum: 4,
      leftnum: 0,
      ottid: 1,
    },
    {
      id: 2,
      name: '참여방2',
      wholenum: 4,
      leftnum: 0,
      ottid: 2,
    },
    {
      id: 3,
      name: '참여방3',
      desc: '참여방3번입니다.',
      wholenum: 4,
      leftnum: 0,
      ottid: 3,
    },
    {
      id: 4,
      name: '참여방4',
      desc: '참여방4번입니다.',
      wholenum: 4,
      leftnum: 0,
      ottid: 4,
    },
    {
      id: 4,
      name: '참여방4',
      desc: '참여방4번입니다.',
      wholenum: 4,
      leftnum: 0,
      ottid: 1,
    },
    {
      id: 4,
      name: '참여방4',
      desc: '참여방4번입니다.',
      wholenum: 4,
      leftnum: 0,
      ottid: 2,
    },
  ];
  return (
    <MainLayout>
      <Scroller>
        <SubTitle>내가 참여 중인 구독방</SubTitle>
        <ChatRoomListContainer>
          {rooms.map(({ id, name, desc, wholenum, leftnum, ottid }) => (
            <Touchable onPress={() => navigation.navigate('ChatRoomScreen')}>
              <ChatRoomButton
                id={id}
                name={name}
                desc={desc}
                wholenum={wholenum}
                leftnum={leftnum}
                ottid={ottid}
              />
            </Touchable>
          ))}
        </ChatRoomListContainer>
      </Scroller>
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
  font-family: 'dunggeunmo';
`;

export default ChatHomeScreen;
