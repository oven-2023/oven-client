import { atom } from 'recoil';
import { v1 } from 'uuid'; // key duplicate 방지를 위한 라이브러리

export const isLoginState = atom({
  key: `isLogin/${v1()}`,
  default: true,
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

export const searchedResultState = atom({
  key: `searchedResult/${v1()}`,
  default: [],
});

export const detailMovieState = atom({
  key: `detailMovie/${v1()}`,
  default: [],
});

export const clickedOttState = atom({
  key: `clickedOtt/${v1()}`,
  default: null,
});