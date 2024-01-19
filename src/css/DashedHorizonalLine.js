import React from 'react';
import Svg, { Line } from 'react-native-svg';
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import { BROWN, ORANGE } from './theme';

const DashedHorizonalLine = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
      }}
    >
      <Svg height="10" width="350">
        <Line
          x1="0"
          y1="0"
          x2="350"
          y2="0"
          stroke="#ffffff"
          strokeWidth="8"
          strokeDasharray="20 15"
        />
      </Svg>
    </View>
  );
};

export default DashedHorizonalLine;
