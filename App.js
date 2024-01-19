import Router from './Router';
import { RecoilRoot } from 'recoil';
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';
import SplashScreen from './src/components/Layout/SplashScreen';
import { LogBox, Alert } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
import { baseURL } from './src/api/client';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Buffer } from 'buffer';
import 'text-encoding';

export default function App({ navigation }) {

  if (!global.Buffer) {
    global.Buffer = Buffer;
  }

  const [isFont, setIsFont] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const loadFonts = async () => {
    await Font.loadAsync({
      dunggeunmo: require('./assets/fonts/DungGeunMo.ttf'),
      chab: require('./assets/fonts/chab.otf'),
      kotra: require('./assets/fonts/kotra.otf'),
    });
    setIsFont(true);
  };

  useEffect(() => {
    let refreshTokenInterval;

    const loadRefreshToken = async () => {
      const savedRefreshToken = await AsyncStorage.getItem('refreshToken');
      if (savedRefreshToken) {
        try {
          const response = await axios.post(`${baseURL}/auth/reissuance`, {
            refreshToken: savedRefreshToken,
          });

          if (response) {
            console.log(response.data.data.accessToken);
            AsyncStorage.setItem('accessToken', response.data.data.accessToken);
          } else {
            console.log(error);
            // Alert.alert('로그인이 만료되었습니다. 다시 로그인하세요.');
          }
        } catch (error) {
          console.log(error);
          // Alert.alert('로그인이 만료되었습니다. 다시 로그인하세요.');
        }
      }
    };

    refreshTokenInterval = setInterval(() => {
      loadRefreshToken();
    }, 25 * 60 * 1000); // 30분 간격 25 * 60 * 1000

    return () => {
      clearInterval(refreshTokenInterval);
    };
  }, []);

  // const loadRefreshToken = async () => {
  //   await axios
  //     .post(`${baseURL}/auth/reissuance`, {
  //       refreshToken: refreshToken,
  //     })
  //     .then((response) => {
  //       console.log('reissue-accessToken', response.data);
  //       AsyncStorage.setItem('accessToken', response.data.accessToken);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       navigation.navigate('LoginScreen');
  //     });
  // };

  useEffect(() => {
    loadFonts();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);

  return <RecoilRoot>{showSplash ? <SplashScreen /> : <Router />}</RecoilRoot>;
}
