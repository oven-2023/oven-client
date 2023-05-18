import React from 'react';
import styled from 'styled-components';
import {
  View,
  SafeAreaView,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

const OttList = () => {
  const otts = {
    ott: ['Netflix', 'Watcha', 'Tving', 'Netflix'],
  };
  const netflix = require('../../img/netflix.png');
  return (
    <Container>
      {otts.ott.map((ottname) => (
        <Ott>
          <OttImg source={netflix} />
          <OttName>{ottname}</OttName>
        </Ott>
      ))}
    </Container>
  );
};

const Container = styled.View`
  width: 80%;
  flex-direction: row;
  margin-top: 10px;
`;

const Ott = styled.View`
  margin-right: 20px;
  margin-top: 10px;
  align-items: center;
`;

const OttImg = styled.Image`
  background-color: pink;
  width: 70px;
  height: 70px;
  border-radius: 15px;
`;

const OttName = styled.Text`
  margin-top: 5px;
  align-items: center;
`;

export default OttList;
