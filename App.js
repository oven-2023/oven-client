import Router from './Router';
import { RecoilRoot } from 'recoil';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

export default function App() {
  SplashScreen.preventAutoHideAsync();
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }, []);
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}
