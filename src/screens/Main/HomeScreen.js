import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, RefreshControl, Alert } from 'react-native';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { FontAwesome } from '@expo/vector-icons';
import OttRmd from '../../components/Main/HomeScreen/OttRmd';
import MovieRmd from '../../components/Main/HomeScreen/MovieRmd';
import { userState, isLoginState } from '../../states';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import PopularMovie from '../../components/Main/HomeScreen/PopularMovie';
import MainLayout from '../../components/Layout/MainLayout';
import { ORANGE, BROWN } from '../../css/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { baseURL } from '../../api/client';

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useRecoilState(userState);
  const [recommendations, setRecommendations] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [token, setToken] = useState('');
  const [recommendOtt, setRecommendOtt] = useState('');
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const handleRefresh = async () => {
    console.log('handleRefreshStore');
    setIsRefreshing(true);
    await getRecommendationsAPI(token);
    setIsRefreshing(false);
  };

  useEffect(() => {
    AsyncStorage.getItem('accessToken')
      .then((value) => {
        setToken(value);
        getRecommendationsAPI(value);
        getRecommendOttAPI(value);
      })
      .catch((error) => {
        console.log('Error getting access token:', error);
      });
  }, []);

  const getRecommendationsAPI = async (accessToken) => {
    await axios
      .get(`${baseURL}/home/recommendation/works`, {
        headers: {
          'Content-Type': `application/json`,
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setRecommendations(response.data.data);
        console.log('refresh',response.data.data);
      })
      .catch(function (error) {
        console.log('get recommend', error);
      });
  };

  const getRecommendOttAPI = async (accessToken) => {
    await axios
      .get(`${baseURL}/home/recommendation/providers`, {
        headers: {
          'Content-Type': `application/json`,
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setRecommendOtt(response.data.data.providerId);
      })
      .catch(function (error) {
        console.log('get ott recommend', error);
        Alert.alert('로그인이 만료되었습니다. 다시 로그인하세요.');
        setIsLogin(false);
      });
  };

  return (
    <MainLayout>
      <Scroller
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      >
        <Centralizer>
          <Bottom>
            <Title>이번달 나에게 맞는 OTT</Title>
            <OttRmd recommendOtt={recommendOtt}/>
          </Bottom>
          <Bottom>
            <Title>실시간 인기작</Title>
            <PopularMovie />
          </Bottom>
          <Bottom>
            <Title>
              <User>{user}</User> 님 맞춤 추천작
            </Title>
            <MovieRmd recommendations={recommendations} />
          </Bottom>
        </Centralizer>
      </Scroller>
    </MainLayout>
  );
};

const Centralizer = styled.View`
  align-items: center;
`;

const Scroller = styled.ScrollView`
  width: 100%;
`;

const Bottom = styled.View`
  flex-direction: column;
  margin-top: 20px;
  width: 80%;
`;

const Title = styled.Text`
  font-size: 25;
  font-weight: 700;
  font-family: 'chab';
  color: ${BROWN};
`;

const User = styled.Text`
  font-size: 30;
  color: ${ORANGE};
`;

export default HomeScreen;
