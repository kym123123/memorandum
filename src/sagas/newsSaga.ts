import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getNews } from 'src/lib/api/home';
import {
  requestNewsActionCreator,
  requestNewsFailureActionCreator,
  requestNewsSuccessActionCreator,
} from 'src/modules/news';

// watcher saga
export function* newsWatcherSaga() {
  yield takeLatest(requestNewsActionCreator.type, requestNewsWorkerSaga);
}

// worker saga
function* requestNewsWorkerSaga() {
  try {
    const res: AxiosResponse = yield call(getNews);
    console.log(res.data.articles);
    const arrangedArticles = res.data.articles.map((article: any) => ({
      publishedAt: article.publishedAt,
      title: article.title,
      description: article.description,
      url: article.url,
      urlToImage: article.urlToImage,
    }));

    yield put(requestNewsSuccessActionCreator({ newsArr: arrangedArticles }));
  } catch (e) {
    console.log(e);
    yield put(requestNewsFailureActionCreator({ e }));
  }
}
