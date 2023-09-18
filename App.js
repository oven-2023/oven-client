import Router from './Router';
import { RecoilRoot } from 'recoil';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useState, useEffect } from 'react';

export default function App() {
  const [isFont, setIsFont] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      dunggeunmo: require('./assets/fonts/DungGeunMo.ttf'),
    });
    setIsFont(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}
