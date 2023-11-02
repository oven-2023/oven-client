import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import styled from 'styled-components';
import { BROWN, BEIGE, ORANGE } from '../../../css/theme';

const RoomInfo = ({ chatRoomInfo }) => {
  return (
    <RoomInfoContainer>
      <RoomName>{chatRoomInfo?.title}</RoomName>
      <Pnum>
        {chatRoomInfo?.count}명/{chatRoomInfo?.wholeNum}명
      </Pnum>
      {/*<PayDate>다음 결제일: 9월 8일</PayDate>
       <ChangeDateBtn>
        <BtnText>결제일 수정하기</BtnText>
      </ChangeDateBtn> */}
    </RoomInfoContainer>
  );
};

const RoomInfoContainer = styled.View`
  width: 100%;
  height: 100px;
  background-color: ${BROWN};
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 0px;
`;

const RoomName = styled.Text`
  font-size: 27px;
  font-weight: 700;
  font-family: 'kotra';
  color: ${BEIGE};
`;

const PayDate = styled.Text`
  font-family: 'kotra';
  font-size: 17px;
  color: ${BEIGE};
`;

const ChangeDateBtn = styled.TouchableOpacity`
  border: 1px solid black;
  background-color: violet;
  width: 150px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

const BtnText = styled.Text`
  font-family: 'kotra';
`;

const Pnum = styled.Text`
  margin-left: auto;
  margin-right: 20px;
  font-family: 'kotra';
  font-size: 17px;
  color: ${BEIGE};
`;

export default RoomInfo;
