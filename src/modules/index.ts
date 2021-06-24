import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from 'sagas/index';
import { AuthInitialStateType } from './types';
export type RootStateType = {
  auth: AuthInitialStateType;
};

const reducer = {
  auth: authSlice.reducer,
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
