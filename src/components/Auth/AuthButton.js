import { Text, Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const AuthButton = ({ text, onClick }) => {
  return (
    <StyledButton isFilled={false} onClick={onClick}>
      <StyledText>{text}</StyledText>
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity`
  height: 50px;
  width: 200px;
  background-color: pink;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text``;

export default AuthButton;
