import { Text, Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const AuthButton = ({ text, onPress }) => {
  return (
    <StyledButton isFilled={false} onPress={onPress}>
      <StyledText>{text}</StyledText>
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity`
  height: 50px;
  width: 300px;
  background-color: #ae0c18;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const StyledText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

export default AuthButton;
