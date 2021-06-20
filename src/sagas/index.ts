import { loginWatcherSaga } from './authSaga';
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([fork(loginWatcherSaga)]);
}
