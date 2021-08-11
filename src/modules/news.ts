import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CategoryNewsObjType,
  CategoryPayloadType,
  NewsInitialStateType,
  NewsObjType,
} from './types';

const newsInitialState: NewsInitialStateType = {
  category: 'business', // 현재 category
  newsLoading: false,
  newsError: null,
  newsArr: [], // news 배열
  newsByCategory: {
    // News 탭에서 카테고리별 뉴스 배열. caching에 사용
    business: [],
    entertainment: [],
    health: [],
    science: [],
    sports: [],
    technology: [],
  },
};

const newsSlice = createSlice({
  name: 'news',
  initialState: newsInitialState,
  reducers: {
    // main news 가져오기 요청 시작
    requestNews: (state, _: PayloadAction<{}>) => {
      state.newsLoading = true;
      state.newsError = null;
    },
    // main news 가져오기 성공
    requestNewsSuccess: (
      state,
      { payload }: PayloadAction<{ newsArr: NewsObjType[] }>,
    ) => {
      state.newsLoading = false;
      state.newsError = null;
      state.newsArr = [...state.newsArr, ...payload.newsArr];
    },
    // main news 가져오기 실패
    requestNewsFailure: (state, { payload }: PayloadAction<{ e: Error }>) => {
      state.newsLoading = false;
      state.newsError = payload.e;
    },
    // main news 배열 비우기
    initializeNews: (state, _) => {
      state.newsArr = [];
    },
    // 현재 news category 바꾸기
    changeCategory: (
      state,
      { payload }: PayloadAction<CategoryPayloadType>,
    ) => {
      state.category = payload.category;
    },
    // category news 가져오기 요청 시작
    requestCategoryNews: (
      state,
      { payload }: PayloadAction<CategoryPayloadType>,
    ) => {
      state.newsLoading = true;
      state.newsError = null;
    },
    // category news 가져오기 성공
    requestCategoryNewsSuccess: (
      state,
      { payload }: PayloadAction<{ newsArr: CategoryNewsObjType[] }>,
    ) => {
      // 현재 category 배열 안에 기사 넣기.
      state.newsByCategory[state.category] = payload.newsArr;
      state.newsLoading = false;
    },
    // category news 가져오기 실패
    requestCategoryNewsFailure: (
      state,
      { payload }: PayloadAction<{ e: Error }>,
    ) => {
      state.newsError = payload.e;
      state.newsLoading = false;
    },
  },
});

export const {
  requestNews: requestNewsActionCreator,
  requestNewsSuccess: requestNewsSuccessActionCreator,
  requestNewsFailure: requestNewsFailureActionCreator,
  initializeNews: initializeNewsActionCreator,
  changeCategory: changeCategoryActionCreator,
  requestCategoryNews: requestCategoryNewsActionCreator,
  requestCategoryNewsSuccess: requestCategoryNewsSuccessActionCreator,
  requestCategoryNewsFailure: requestCategoryNewsFailureActionCreator,
} = newsSlice.actions;

export default newsSlice;
