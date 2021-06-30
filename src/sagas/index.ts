import { all, fork } from 'redux-saga/effects';
import { authWatcherSaga } from './authSaga';
import { newsWatcherSaga } from './newsSaga';

export default function* rootSaga() {
  yield all([fork(authWatcherSaga), fork(newsWatcherSaga)]);
}
