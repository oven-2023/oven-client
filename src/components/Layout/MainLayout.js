import React from 'react';
import { View, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import Logo from '../Common/Logo';

const MainLayout = ({ children }) => {
  return (
    <SafeAreaView>
      <Logo />
      <Children>{children}</Children>
    </SafeAreaView>
  );
};

const Children = styled.View`
  width: 100%;
  align-items: center;
`;

export default MainLayout;
