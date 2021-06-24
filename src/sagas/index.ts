import { all, fork } from 'redux-saga/effects';
import { authWatcherSaga } from './authSaga';

export default function* rootSaga() {
  yield all([fork(authWatcherSaga)]);
}
