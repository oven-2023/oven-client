import { atom } from 'recoil';
import { v1 } from 'uuid'; // key duplicate 방지를 위한 라이브러리

export const isLoginState = atom({
  key: `isLogin/${v1()}`,
  default: false,
});

export const userState = atom({
  key: `user/${v1()}`,
  default: '임채리',
});

export const isHeartState = atom({
  key: `isHeart/${v1()}`,
  default: false,
});

export const isModalState = atom({
  key: `isModal/${v1()}`,
  default: false,
});

export const searchInputState = atom({
  key: `searchInput/${v1()}`,
  default: '',
});
