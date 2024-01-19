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
  const otts = [
    {
      id: 1,
      ottname: 'Netflix',
      src: require('../../../img/Netflix.png'),
    },
    {
      id: 2,
      ottname: 'Watcha',
      src: require('../../../img/Watcha.png'),
    },
    {
      id: 3,
      ottname: 'Wavve',
      src: require('../../../img/Wavve.png'),
    },
    {
      id: 4,
      ottname: 'Tving',
      src: require('../../../img/Tving.png'),
    },
  ];
  return (
    <Container>
      {otts.map(({ id, ottname, src }) => (
        <Ott key={id}>
          <OttLogo source={src} />
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

const OttLogo = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 15px;
  border: 1px solid white;
`;

const OttName = styled.Text`
  margin-top: 5px;
  align-items: center;
  color: white;
`;

export default OttList;
