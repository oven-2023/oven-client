import { atom } from 'recoil';

export const isLoginState = atom({
  key: `isLogin`,
  default: false,
});

export const testState = atom({
  key: `test`,
  default: '',
});
