import React, { useState, useEffect } from 'react';
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
import {
  isModalState,
  clickedWorkState,
  ratingState,
  isStaredState,
} from '../../../states';
import { FontAwesome } from '@expo/vector-icons';
import { BEIGE, BROWN, RED } from '../../../css/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { baseURL } from '../../../api/client';

const RatingModal = () => {
  const [isModalOpened, setIsModalOpened] = useRecoilState(isModalState);
  const [selectedStars, setSelectedStars] = useState(rating);
  const [clickedMovie, setClickedMovie] = useRecoilState(clickedWorkState);
  const [token, setToken] = useState('');
  const [rating, setRating] = useRecoilState(ratingState);
  const [isStared, setIsStared] = useRecoilState(isStaredState);

  useEffect(() => {
    AsyncStorage.getItem('accessToken')
      .then((value) => {
        setToken(value);
      })
      .catch((error) => {
        console.log('Error star:', error);
      });
  }, [clickedMovie]);

  const handleRatingChange = (stars) => {
    setRating(stars);
  };

  const renderStars = (totalStars) => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleRatingChange(i)}>
          {i <= rating ? (
            <Star name="star" size={34} color="black" />
          ) : (
            <Star name="star-o" size={34} color="black" />
          )}
        </TouchableOpacity>
      );
    }
    return stars;
  };

  const postRatingAPI = async () => {
    await axios
      .post(
        `${baseURL}/works/${clickedMovie}/rating`,
        { rating: rating },
        {
          headers: {
            'Content-Type': `application/json`,
            Authorization: `Bearer ${token}`,
          },
          params: {
            workId: clickedMovie,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        Alert.alert('평점 등록을 완료했습니다');
        setIsModalOpened(false);
        setIsStared(true);
      })
      .catch(function (error) {
        console.log(error);
      });
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
            <StyledButton onPress={postRatingAPI}>
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
  background-color: ${BEIGE};
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
  font-family: 'dunggeunmo';
  color: ${BROWN};
`;

const Stars = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

const Star = styled(FontAwesome)`
  margin: 7px;
  color: ${BROWN};
`;

const StyledButton = styled.TouchableOpacity``;

const Close = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${BROWN};
  font-family: 'dunggeunmo';
`;

const Submit = styled.Text`
  font-size: 20px;
  color: #ae0c18;
  font-weight: 700;
  font-family: 'dunggeunmo';
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
