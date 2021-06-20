import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { loginAPI } from 'lib/api/auth';
import {
  requestLoginActionCreator,
  requestLoginFailureActionCreator,
  RequestLoginPayload,
  requestLoginSuccessActionCreator,
} from 'modules/auth';
import { call, put, takeLatest } from 'redux-saga/effects';

// watcher saga
export function* loginWatcherSaga() {
  yield takeLatest(requestLoginActionCreator.type, loginWorkerSaga);
}

// worker saga
function* loginWorkerSaga({ payload }: PayloadAction<RequestLoginPayload>) {
  try {
    const res: AxiosResponse = yield call(loginAPI, payload);
    console.log(res);

    yield put(requestLoginSuccessActionCreator({ res }));
  } catch (e) {
    console.log(e);

    yield put(requestLoginFailureActionCreator({ e }));
  }
}
