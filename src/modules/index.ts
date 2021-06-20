import { configureStore } from '@reduxjs/toolkit';
import authSlice, { AuthInitialStateType } from './auth';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from 'sagas/index';
export type RootStateType = {
  auth: AuthInitialStateType;
};

const reducer = {
  auth: authSlice.reducer,
};

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
export default configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);
