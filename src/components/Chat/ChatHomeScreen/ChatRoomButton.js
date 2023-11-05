import React from 'react';
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import styled from 'styled-components';
import { BEIGE, RED, BROWN } from '../../../css/theme';
import DashedVerticalLine from '../../../css/DashedVerticalLine';
import { useRecoilState } from 'recoil';
import { clickedOttState } from '../../../states/index';

const ChatRoomButton = ({ index, title, wholeNum, count, providerId, max }) => {
  const [clickedOtt, setClickedOtt] = useRecoilState(clickedOttState);

  const otts = [
    {
      ottid: 1,
      src: require('../../../img/Netflix.png'),
    },
    {
      ottid: 2,
      src: require('../../../img/Tving.png'),
    },
    {
      ottid: 3,
      src: require('../../../img/Wavve.png'),
    },
    {
      ottid: 4,
      src: require('../../../img/DisneyPlus.jpeg'),
    },
    {
      ottid: 5,
      src: require('../../../img/CoupangPlay.png'),
    },
    {
      ottid: 6,
      src: require('../../../img/Watcha.png'),
    },
    {
      ottid: 7,
      src: require('../../../img/AppleTv.png'),
    },
  ];

  const findOtt = otts.find((item) => item.ottid === providerId); // clickedOtt로 바꾸기

  return (
    //추가 작업: max면 비활성화 처리하기 - 구독목록에서만 ....
    <Container
      index={index}
      style={{
        opacity: max ? 0.3 : 1,
      }}
    >
      <OttView
        style={{
          borderStyle: 'dashed',
          borderWidth: 1,
          borderRightColor: 'white',
        }}
      >
        <OttLogo source={findOtt.src} />
      </OttView>

      <DashedVerticalLine />

      <Column>
        <RoomName>{title}</RoomName>
        <LeftNum>
          {count}명/{wholeNum}명
        </LeftNum>
      </Column>
    </Container>
  );
};

const Container = styled.View`
  width: 90%;
  height: 90px;
  background-color: white;
  border-radius: 20px;
  flex-direction: row;
  flex: 1;
`;

const RoomName = styled.Text`
  font-weight: 800;
  font-size: 23px;
  font-family: 'kotra';
  color: ${BROWN};
`;

const OttLogo = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 15px;
`;

const OttView = styled.View`
  width: 30%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const LeftNum = styled.Text`
  font-family: 'kotra';
  margin-top: 10px;
  color: ${BROWN};
  font-size: 16px;
`;

const Column = styled.View`
  flex-direction: column;
  width: 60%;
  justify-content: center;
  align-items: center;
`;

export default ChatRoomButton;
