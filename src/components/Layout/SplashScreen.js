import React, { useRef, useEffect, useState } from 'react';
import { Animated, View, Image } from 'react-native';
import styled from 'styled-components';
import { BEIGE } from '../../css/theme';

const SplashScreen = () => {
  const translateY = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const moveAnimation = Animated.sequence([
      Animated.timing(translateY, {
        toValue: -30, // 위로 이동할 거리
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
        <SplashImage source={require('../../img/oven.png')} />
      </Animated.View>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${BEIGE};
`;

const SplashImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export default SplashScreen;
