import Router from './Router';
import { RecoilRoot } from 'recoil';
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';
import SplashLogo from './src/components/Layout/SplashLogo';

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
    }, 3000);
  }, []);

  return <RecoilRoot>{showSplash ? <SplashLogo /> : <Router />}</RecoilRoot>;
}
