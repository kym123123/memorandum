import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from 'sagas/index';
import { AuthInitialStateType, NewsInitialStateType } from './types';
import newsSlice from './news';
export type RootStateType = {
  auth: AuthInitialStateType;
  news: NewsInitialStateType;
};

const reducer = {
  auth: authSlice.reducer,
  news: newsSlice.reducer,
};

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
const preloadedState = {
  auth: {
    email: '',
    nickname: '',
    password: '',
    authLoading: false,
    authError: null,
    user: {
      email: localStorage.getItem('userEmail') || '',
      nickname: localStorage.getItem('userNickname') || '',
      accessToken: localStorage.getItem('AT'),
      refreshToken: localStorage.getItem('RT'),
    },
  },
};
export default configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

sagaMiddleware.run(rootSaga);
