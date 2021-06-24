import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AuthInitialStateType,
  InputNameType,
  RequestLoginPayload,
  RequestLogoutPayload,
  RequestSignUpPayload,
} from './types';

const authInitialState: AuthInitialStateType = {
  email: '',
  nickname: '',
  password: '',
  authLoading: false,
  authError: null,
  user: {
    email: '',
    nickname: '',
    accessToken: localStorage.getItem('AT'),
    refreshToken: localStorage.getItem('RT'),
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    changeInput: (
      state,
      {
        payload,
      }: PayloadAction<{
        inputName: InputNameType;
        content: string;
      }>,
    ) => {
      const { inputName, content } = payload;
      state[inputName] = content;
    },
    initializeAll: (_, __: PayloadAction<{}>) => authInitialState,
    initializeAnInput: (
      state,
      { payload }: PayloadAction<{ inputName: InputNameType }>,
    ) => {
      const { inputName } = payload;
      state[inputName] = '';
    },
    removeAuthError: (state, { payload }: PayloadAction<{}>) => {
      state.authError = null;
    },
    requestLogin: (state, { payload }: PayloadAction<RequestLoginPayload>) => {
      state.authLoading = true;
      state.authError = null;
    },
    requestLoginSuccess: (state, { payload }: PayloadAction<any>) => {
      state.authLoading = false;
      state.user = {
        email: state.email,
        nickname: payload.nickname,
        accessToken: payload.access_token,
        refreshToken: payload.refresh_token,
      };
      state.password = '';
      state.email = '';
      localStorage.setItem('AT', payload.access_token);
      localStorage.setItem('RT', payload.refresh_token);
      localStorage.setItem('ATET', payload.accessExpireTime);
      localStorage.setItem('RTET', payload.refreshExpireTime);
      localStorage.setItem('userNickname', payload.nickname);
      localStorage.setItem('userEmail', state.email);
    },
    requestLoginFailure: (state, { payload }: PayloadAction<any>) => {
      state.authLoading = false;
      state.authError = payload;
    },
    requestSignUp: (
      state,
      { payload }: PayloadAction<RequestSignUpPayload>,
    ) => {
      state.authLoading = true;
      state.authError = null;
    },
    requestSignUpSuccess: (state, { payload }: PayloadAction<any>) => {
      state.authLoading = false;
      state.user = {
        email: state.email,
        nickname: state.nickname,
        accessToken: payload.access_token,
        refreshToken: payload.refresh_token,
      };
      state.password = '';
      state.email = '';
      localStorage.setItem('AT', payload.access_token);
      localStorage.setItem('RT', payload.refresh_token);
      localStorage.setItem('ATET', payload.accessExpireTime);
      localStorage.setItem('RTET', payload.refreshExpireTime);
      localStorage.setItem('userNickname', state.nickname);
      localStorage.setItem('userEmail', state.email);
    },
    requestSignUpFailure: (state, { payload }: PayloadAction<any>) => {
      state.authLoading = false;
      state.authError = payload;
    },
    requestLogout: (
      state,
      { payload }: PayloadAction<RequestLogoutPayload>,
    ) => {
      state.authLoading = true;
      state.authError = null;
    },
    requestLogoutSuccess: (state, { payload }: PayloadAction<any>) => {
      localStorage.removeItem('AT');
      localStorage.removeItem('RT');
      localStorage.removeItem('ATET');
      localStorage.removeItem('RTET');
      localStorage.removeItem('userNickname');
      localStorage.removeItem('userEmail');

      state.user = {
        email: '',
        nickname: '',
        accessToken: '',
        refreshToken: '',
      };
      state.authLoading = false;
    },
    requestLogoutFailure: (state, { payload }: PayloadAction<any>) => {
      state.authError = payload;
      state.authLoading = false;
    },
  },
});

export const {
  changeInput: changeInputActionCreator,
  initializeAll: initializeAllActionCreator,
  initializeAnInput: initializeAnInputActionCreator,
  removeAuthError: removeAuthErrorActionCreator,
  requestLogin: requestLoginActionCreator,
  requestLoginFailure: requestLoginFailureActionCreator,
  requestLoginSuccess: requestLoginSuccessActionCreator,
  requestSignUp: requestSignUpActionCreator,
  requestSignUpFailure: requestSignUpFailureActionCreator,
  requestSignUpSuccess: requestSignUpSuccessActionCreator,
  requestLogout: requestLogoutActionCreator,
  requestLogoutSuccess: requestLogoutSuccessActionCreator,
  requestLogoutFailure: requestLogoutFailureActionCreator,
} = authSlice.actions;
export default authSlice;
