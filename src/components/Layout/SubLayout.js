import React from 'react';
import { View, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import Logo from '../Common/Logo';
import { BEIGE } from '../../css/theme';

const SubLayout = ({ children }) => {
  return (
    <Background>
      <Logo />
      <Children>{children}</Children>
    </Background>
  );
};

const Background = styled.SafeAreaView`
  background-color: ${BEIGE};
  width: 100%;
  height: 1500px;
`;

const Children = styled.View`
  width: 100%;
  height: 1500px;
  align-items: center;
`;

export default SubLayout;
