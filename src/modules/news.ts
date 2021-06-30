import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsInitialStateType, NewsObjType } from './types';

const newsInitialState: NewsInitialStateType = {
  category: '', // 현재 category
  newsLoading: false,
  newsError: null,
  newsArr: [], // news 배열
};

const newsSlice = createSlice({
  name: 'news',
  initialState: newsInitialState,
  reducers: {
    // news 가져오기 요청 시작
    requestNews: (state, { payload }: PayloadAction<{}>) => {
      state.newsLoading = true;
      state.newsError = null;
    },
    // news 가져오기 성공
    requestNewsSuccess: (
      state,
      { payload }: PayloadAction<{ newsArr: NewsObjType[] }>,
    ) => {
      state.newsLoading = false;
      state.newsError = null;
      state.newsArr = [...state.newsArr, ...payload.newsArr];
    },
    // news 가져오기 실패
    requestNewsFailure: (state, { payload }: PayloadAction<{ e: Error }>) => {
      state.newsLoading = false;
      state.newsError = payload.e;
    },
    // news 배열 비우기
    initializeNews: (state, _) => {
      state.newsArr = [];
    },
    // 현재 news category 바꾸기
    changeCategory: (
      state,
      { payload }: PayloadAction<{ category: string }>,
    ) => {
      state.category = payload.category;
    },
  },
});

export const {
  requestNews: requestNewsActionCreator,
  requestNewsSuccess: requestNewsSuccessActionCreator,
  requestNewsFailure: requestNewsFailureActionCreator,
  initializeNews: initializeNewsActionCreator,
  changeCategory: changeCategoryActionCreator,
} = newsSlice.actions;

export default newsSlice;
