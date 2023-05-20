import { atom } from 'recoil';
import { v1 } from 'uuid'; // key duplicate 방지를 위한 라이브러리

export const isLoginState = atom({
  key: `isLogin`,
  default: true,
});

export const testState = atom({
  key: `test`,
  default: '',
});

export const isHeartState = atom({
  key: `isHeart/${v1()}`,
  default: false,
});

export const isModalState = atom({
  key: `isModal/${v1()}`,
  default: false,
});
