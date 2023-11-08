import React, { useRef, useEffect, useState } from 'react';
import { Animated, View, Image } from 'react-native';
import styled from 'styled-components';
import { BEIGE } from '../../css/theme';

const SplashLogo = () => {
  const translateY = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const moveAnimation = Animated.sequence([
      Animated.timing(translateY, {
        toValue: -20, // 위로 이동할 거리
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0, // 다시 원래 위치로 이동
        duration: 1500,
        useNativeDriver: true,
      }),
    ]);
    Animated.loop(moveAnimation).start();

    return () => moveAnimation.stopAnimation();
  }, [translateY]);

  return (
    <Container>
      <Animated.View
        style={{
          transform: [{ translateY }],
        }}
      >
        <SplashImage source={require('../../img/oven_logo.png')} />
      </Animated.View>
    </Container>
  );
};

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const SplashImage = styled.Image`
  width: 300px;
  height: 150px;
  object-fit: contain;
`;

export default SplashLogo;
