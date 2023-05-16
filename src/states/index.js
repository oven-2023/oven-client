import { atom } from 'recoil';

export const isLoginState = atom({
  key: `isLogin`,
  default: true,
});

export const testState = atom({
  key: `test`,
  default: '',
});
