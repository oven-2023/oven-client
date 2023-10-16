import Router from './Router';
import { RecoilRoot } from 'recoil';
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';
import SplashScreen from './src/components/Layout/SplashScreen';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function App() {
  const [isFont, setIsFont] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const loadFonts = async () => {
    await Font.loadAsync({
      dunggeunmo: require('./assets/fonts/DungGeunMo.ttf'),
    });
    setIsFont(true);
  };

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
