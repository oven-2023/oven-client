import React from 'react';
import Svg, { Line } from 'react-native-svg';
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';

const DashedVerticalLine = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: 10,
      }}
    >
      <Svg height="70" width="10">
        <Line
          x1="0"
          y1="0"
          x2="0"
          y2="100"
          stroke="#f4efe7"
          strokeWidth="8"
          strokeDasharray="9 6"
        />
      </Svg>
    </View>
  );
};

export default DashedVerticalLine;
