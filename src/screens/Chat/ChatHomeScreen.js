import React from 'react';
import { SafeAreaView, Text, Button, ScrollView } from 'react-native';
import styled from 'styled-components';
import OttList from '../../components/Main/DetailScreen/OttList';
import OttButtonList from '../../components/Chat/OttButtonList';
import ChatRoomButton from '../../components/Chat/ChatRoomButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MainLayout from '../../components/Layout/MainLayout';

const ChatHomeScreen = ({ navigation }) => {
  const rooms = [
    {
      id: 1,
      name: '방1',
      desc: '방1번입니다.',
      wholenum: 4,
      leftnum: 0,
    },
    {
      id: 2,
      name: '방2',
      desc: '방2번입니다.',
      wholenum: 4,
      leftnum: 0,
    },
    {
      id: 3,
      name: '방3',
      desc: '방3번입니다.',
      wholenum: 4,
      leftnum: 0,
    },
    {
      id: 4,
      name: '방4',
      desc: '방4번입니다.',
      wholenum: 4,
      leftnum: 0,
    },
    {
      id: 4,
      name: '방4',
      desc: '방4번입니다.',
      wholenum: 4,
      leftnum: 0,
    },
    {
      id: 4,
      name: '방4',
      desc: '방4번입니다.',
      wholenum: 4,
      leftnum: 0,
    },
  ];
  return (
    <MainLayout>
      <OttBtnContainer>
        <OttButtonList />
      </OttBtnContainer>
      <Centralizer>
        <Scroller>
          <SubTitle>참여 중인 구독방</SubTitle>
          <ChatRoomListContainer>
            {rooms.map(({ id, name, desc, wholenum, leftnum }) => (
              <Touchable onPress={() => navigation.navigate('ChatRoomScreen')}>
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

const ChatButton = styled.Text`
  width: 100px;
  height: 100px;
  background-color: pink;
`;

const SubTitle = styled.Text`
  margin-right: auto;
  margin-left: 20px;
  font-size: 26px;
  font-weight: 500;
`;

export default ChatHomeScreen;
