import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { CategoryType } from 'src/components/Main/News/types';
import { getNews, getNewsByCategory } from 'src/lib/api/news';
import {
  requestCategoryNewsActionCreator,
  requestCategoryNewsFailureActionCreator,
  requestCategoryNewsSuccessActionCreator,
  requestNewsActionCreator,
  requestNewsFailureActionCreator,
  requestNewsSuccessActionCreator,
} from 'src/modules/news';
import { CategoryPayloadType } from 'src/modules/types';

type ArticleType = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
};

// watcher saga
export function* newsWatcherSaga() {
  yield takeLatest(requestNewsActionCreator.type, requestNewsWorkerSaga);
  yield takeLatest(
    requestCategoryNewsActionCreator.type,
    requestCategoryNewsWorkerSaga,
  );
}

// worker saga
function* requestNewsWorkerSaga() {
  try {
    const { data }: AxiosResponse = yield call(getNews);
    console.log(data.articles, 'articles');

    const arrangedArticles = data.articles.map((article: ArticleType) => ({
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

function* requestCategoryNewsWorkerSaga({
  payload,
}: PayloadAction<CategoryPayloadType>) {
  try {
    const { data }: AxiosResponse = yield call(() =>
      getNewsByCategory(payload.category),
    );
    console.log(data);

    yield put(
      requestCategoryNewsSuccessActionCreator({ newsArr: data.articles }),
    );
  } catch (e) {
    console.log(e);
    yield put(requestCategoryNewsFailureActionCreator({ e }));
  }
}
