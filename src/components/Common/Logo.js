import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { ORANGE } from '../../css/theme';

const Logo = () => {
  return <LogoText>Oven</LogoText>;
};

const LogoText = styled.Text`
  font-weight: 800;
  font-size: 50px;
  margin-left: 20px;
  font-family: 'dunggeunmo';
  color: ${ORANGE};
`;

export default Logo;
