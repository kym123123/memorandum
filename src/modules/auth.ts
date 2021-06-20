import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type InputNameType = 'email' | 'nickname' | 'password';

export type AuthInitialStateType = {
  email: string;
  nickname: string;
  password: string;
  authLoading: boolean;
  authError: null | string;
  user: null | {
    email: string;
    nickname: string;
    accessToken: string;
    refreshToken: string;
  };
};

export type RequestLoginPayload = {
  email: string;
  password: string;
};

const authInitialState: AuthInitialStateType = {
  email: '',
  nickname: '',
  password: '',
  authLoading: false,
  authError: null,
  user: null,
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
    requestLogin: (state, { payload }: PayloadAction<RequestLoginPayload>) => {
      state.authLoading = true;
      state.authError = null;
    },
    requestLoginSuccess: (state, { payload }: PayloadAction<any>) => {
      state.authLoading = false;
      state.user = {
        email: state.email,
        nickname: state.nickname,
        accessToken: payload.res.data.access_token,
        refreshToken: payload.res.data.refresh_token,
      };
    },
    requestLoginFailure: (state, { payload }: PayloadAction<any>) => {
      state.authLoading = false;
      state.authError = payload;
    },
  },
});

export const {
  changeInput: changeInputActionCreator,
  initializeAll: initializeAllActionCreator,
  initializeAnInput: initializeAnInputActionCreator,
  requestLogin: requestLoginActionCreator,
  requestLoginFailure: requestLoginFailureActionCreator,
  requestLoginSuccess: requestLoginSuccessActionCreator,
} = authSlice.actions;
export default authSlice;
