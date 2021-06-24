import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { loginAPI, logoutApi, signUpApi } from 'lib/api/auth';
import {
  requestLoginActionCreator,
  requestLoginFailureActionCreator,
  requestLoginSuccessActionCreator,
  requestLogoutActionCreator,
  requestLogoutFailureActionCreator,
  requestLogoutSuccessActionCreator,
  requestSignUpActionCreator,
  requestSignUpFailureActionCreator,
  requestSignUpSuccessActionCreator,
} from 'modules/auth';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  RequestLoginPayload,
  RequestLogoutPayload,
  RequestSignUpPayload,
} from 'src/modules/types';

// watcher saga
export function* authWatcherSaga() {
  yield takeLatest(requestLoginActionCreator.type, loginWorkerSaga);
  yield takeLatest(requestSignUpActionCreator.type, signUpWorkerSaga);
  yield takeLatest(requestLogoutActionCreator.type, logoutWorkerSaga);
}

// worker saga
function* loginWorkerSaga({ payload }: PayloadAction<RequestLoginPayload>) {
  try {
    const res: AxiosResponse = yield call(loginAPI, payload);
    console.log(res.data);
    const {
      access_token,
      refresh_token,
      accessExpireTime,
      refreshExpireTime,
      nickname,
    } = res.data;
    yield put(
      requestLoginSuccessActionCreator({
        access_token,
        refresh_token,
        accessExpireTime,
        refreshExpireTime,
        nickname,
      }),
    );
  } catch (e) {
    console.log(e?.response?.data);
    yield put(requestLoginFailureActionCreator(e?.response?.data));
  }
}

function* signUpWorkerSaga({ payload }: PayloadAction<RequestSignUpPayload>) {
  try {
    const res: AxiosResponse = yield call(signUpApi, payload);
    console.log(res.data);
    const { access_token, refresh_token, accessExpireTime, refreshExpireTime } =
      res.data;

    yield put(
      requestSignUpSuccessActionCreator({
        access_token,
        refresh_token,
        accessExpireTime,
        refreshExpireTime,
      }),
    );
  } catch (e) {
    console.log(e?.response?.data);
    yield put(requestSignUpFailureActionCreator(e?.response?.data));
  }
}

function* logoutWorkerSaga({ payload }: PayloadAction<RequestLogoutPayload>) {
  try {
    const res: AxiosResponse = yield call(logoutApi, payload);

    yield put(requestLogoutSuccessActionCreator(res));
  } catch (e) {
    console.log(e);
    console.log(e?.response?.data);

    yield put(requestLogoutFailureActionCreator(e?.response?.data));
  }
}
