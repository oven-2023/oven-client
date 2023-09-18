import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const Logo = () => {
  return <LogoText>Oven</LogoText>;
};

const LogoText = styled.Text`
  font-weight: 800;
  font-size: 50px;
  margin-left: 20px;
  font-family: 'dunggeunmo';
`;

export default Logo;
