import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components';

const OttRmd = () => {
  return (
    <OttRmdContainer>
      <Text1>OTT 추천</Text1>
      <Text2>이번달 당신에게 맞는 OTT는</Text2>
      <Text2>
        <Ott>넷플릭스</Ott>입니다
      </Text2>
    </OttRmdContainer>
  );
};

const OttRmdContainer = styled.View`
  margin-top: 50;
  border: 2px solid;
  width: 80%;
  height: 150;
  padding: 15px;
`;

const Text1 = styled.Text`
  font-size: 30px;
  margin-bottom: 10;
`;

const Text2 = styled.Text`
  font-size: 20px;
`;

const Ott = styled.Text`
  font-size: 20px;
  color: red;
`;

export default OttRmd;
