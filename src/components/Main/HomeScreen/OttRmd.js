import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import { shadowStyles } from '../../../styles/shadow';

const OttRmd = () => {
  const [ott, setOtt] = useState('넷플릭스');

  return (
    <OttRmdContainer style={shadowStyles.boxView}>
      <Text1>OTT 추천</Text1>
      <Text2>이번달 당신에게 맞는 OTT는</Text2>
      <Text2>
        <Ott>{ott}</Ott> 입니다
      </Text2>
    </OttRmdContainer>
  );
};

const OttRmdContainer = styled.View`
  margin-top: 50;
  border: 2px solid gray;
  border-radius: 10px;
  width: 80%;
  height: 150;
  padding: 15px;
  background-color: white;
`;

const Text1 = styled.Text`
  font-size: 30px;
  margin-bottom: 10;
  margin-top: 5px;
  font-weight: 700;
  font-family: 'dunggeunmo';
`;

const Text2 = styled.Text`
  font-size: 20px;
  font-weight: 500;
  font-family: 'dunggeunmo';
`;

const Ott = styled.Text`
  font-size: 24px;
  color: #ae0c18;
  font-weight: 700;
`;

export default OttRmd;
