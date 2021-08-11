import { all } from 'redux-saga/effects';
import { authWatcherSaga } from './authSaga';
import { newsWatcherSaga } from './newsSaga';

export default function* rootSaga() {
  yield all([authWatcherSaga(), newsWatcherSaga()]);
}
