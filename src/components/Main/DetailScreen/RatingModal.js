import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Button,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Alert,
} from 'react-native';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isModalState } from '../../../states';
import { FontAwesome } from '@expo/vector-icons';

const RatingModal = () => {
  const [isModalOpened, setIsModalOpened] = useRecoilState(isModalState);
  const [selectedStars, setSelectedStars] = useState(0);

  const onHandleSubmit = () => {
    // postRatingAPI();
    Alert.alert('평점 등록 완료!');
    setIsModalOpened(false);
  };

  const handleRatingChange = (stars) => {
    setSelectedStars(stars);
  };

  const renderStars = (totalStars) => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleRatingChange(i)}>
          {i <= selectedStars ? (
            <Star name="star" size={34} color="black" />
          ) : (
            <Star name="star-o" size={34} color="black" />
          )}
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <ModalContainer animationType="fade">
      <ModalBackground>
        <ModalView style={styles.modalView}>
          <Title>평점 등록</Title>
          <Stars>{renderStars(5)}</Stars>
          <ButtonContainer>
            <StyledButton onPress={() => setIsModalOpened(false)}>
              <Close>닫기</Close>
            </StyledButton>
            <StyledButton onPress={onHandleSubmit}>
              <Submit>등록</Submit>
            </StyledButton>
          </ButtonContainer>
        </ModalView>
      </ModalBackground>
    </ModalContainer>
  );
};

const ModalContainer = styled(Modal)`
  flex: 1;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ModalBackground = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const ModalView = styled.SafeAreaView`
  width: 80%;
  height: 200px;
  border-radius: 20px;
  align-items: center;
  position: relative;
  background-color: white;
`;

const Title = styled.Text`
  font-size: 30px;
  margin-top: 20px;
  font-weight: 700;
`;

const Stars = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

const Star = styled(FontAwesome)`
  margin: 7px;
`;

const StyledButton = styled.TouchableOpacity``;

const Close = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const Submit = styled.Text`
  font-size: 20px;
  color: #ae0c18;
  font-weight: 700;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 20%;
  position: absolute;
  bottom: 0px;
`;

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default RatingModal;
