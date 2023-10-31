import { Text, Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { BEIGE, BROWN } from '../../css/theme';

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
  background-color: ${BROWN};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const StyledText = styled.Text`
  color: ${BEIGE};
  font-size: 25px;
  font-weight: 800;
  font-family: 'kotra';
`;

export default AuthButton;
