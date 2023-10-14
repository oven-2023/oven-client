import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import { ORANGE, BROWN } from '../../../css/theme';

const OttRmd = () => {
  const [ott, setOtt] = useState('넷플릭스');

  return (
    <OttRmdContainer>
      {/* <Text1>이번달 당신에게 맞는 OTT는</Text1> */}
      <Text1>
        <Ott>{ott}</Ott>
      </Text1>
    </OttRmdContainer>
  );
};

const OttRmdContainer = styled.View`
  margin-top: 20;
  border-radius: 20px;
  width: 80%;
  height: 100;
  padding: 15px;
  background-color: white;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

// const Text1 = styled.Text`
//   font-size: 30px;
//   margin-bottom: 10;
//   margin-top: 5px;
//   font-weight: 700;
//   font-family: 'dunggeunmo';
//   color: ${BROWN}
// `;

const Text1 = styled.Text`
  font-size: 20px;
  font-weight: 500;
  font-family: 'dunggeunmo';
`;

const Ott = styled.Text`
  font-size: 24px;
  color: ${ORANGE};
  font-weight: 700;
  margin: 7px;
`;

export default OttRmd;
