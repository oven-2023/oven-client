import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components';
import { Dimensions } from 'react-native';

const Input = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  const width = Dimensions.get('window').width;

  return (
    <StyledTextInput
      width={width}
      placeholder={placeholder}
      maxLength={50}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="done"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

const StyledTextInput = styled.TextInput`
  background-color: whitesmoke;
  border: 1px solid gray;
  width: ${({ width }) => Dimensions.get('window').width - 60}px;
  height: 40px;
  margin: 20px 0px;
  padding: 0px 20px;
  border-radius: 10px;
  color: black;
`;
export default Input;
