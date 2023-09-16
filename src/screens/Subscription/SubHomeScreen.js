import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import MainLayout from '../../components/Layout/MainLayout';
import OttButtonList from '../../components/Subscription/OttButtonList';
import ChatRoomButton from '../../components/Chat/ChatRoomButton';

const SubscriptionScreen = () => {
  const rooms = [
    {
      id: 1,
      name: '구독방1',
      desc: '구독방1번입니다.',
      wholenum: 4,
      leftnum: 0,
    },
    {
      id: 2,
      name: '구독방2',
      desc: '구독방2번입니다.',
      wholenum: 4,
      leftnum: 0,
    },
    {
      id: 3,
      name: '구독방3',
      desc: '구독방3번입니다.',
      wholenum: 4,
      leftnum: 0,
    },
    {
      id: 4,
      name: '구독방4',
      desc: '구독방4번입니다.',
      wholenum: 4,
      leftnum: 0,
    },
    {
      id: 4,
      name: '구독방4',
      desc: '구독방4번입니다.',
      wholenum: 4,
      leftnum: 0,
    },
    {
      id: 4,
      name: '구독방4',
      desc: '구독방4번입니다.',
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
          <SubTitle>참여 가능한 구독방</SubTitle>
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

const SubTitle = styled.Text`
  margin-right: auto;
  margin-left: 20px;
  font-size: 26px;
  font-weight: 500;
`;

export default SubscriptionScreen;
