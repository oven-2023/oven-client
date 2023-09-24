import React from 'react';
import { View, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import Logo from '../Common/Logo';
import { BEIGE } from '../../css/theme';

const MainLayout = ({ children }) => {
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
  height: 100%;
`;

const Children = styled.View`
  width: 100%;
  align-items: center;
`;

export default MainLayout;
