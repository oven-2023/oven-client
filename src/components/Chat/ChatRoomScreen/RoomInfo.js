import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import styled from 'styled-components';

const RoomInfo = () => {
  return (
    <RoomInfoContainer>
      <RoomName>방이름</RoomName>
      <Pnum>4명/4명</Pnum>
      <PayDate>다음 결제일: 9월 8일</PayDate>
      <ChangeDateBtn>
        <BtnText>결제일 수정하기</BtnText>
      </ChangeDateBtn>
    </RoomInfoContainer>
  );
};

const RoomInfoContainer = styled.View`
  width: 100%;
  height: 100px;
  background-color: whitesmoke;
  align-items: center;
  justify-content: space-evenly;
`;

const RoomName = styled.Text`
  font-size: 20px;
  font-weight: 600;
  font-family: 'dunggeunmo';
`;

const PayDate = styled.Text`
  font-family: 'dunggeunmo';
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
  font-family: 'dunggeunmo';
`;

const Pnum = styled.Text`
  margin-left: auto;
  margin-right: 20px;
  font-family: 'dunggeunmo';
`;

export default RoomInfo;