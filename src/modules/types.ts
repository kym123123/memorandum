export type InputNameType = 'email' | 'nickname' | 'password';

export type AuthInitialStateType = {
  email: string;
  nickname: string;
  password: string;
  authLoading: boolean;
  authError: null | {
    message: string;
    success: number;
  };
  user: {
    email: string;
    nickname: string;
    accessToken: string | null;
    refreshToken: string | null;
  };
};

export type RequestLoginPayload = {
  email: string;
  password: string;
};

export type RequestSignUpPayload = {
  email: string;
  password: string;
  nickname: string;
};

export type RequestLogoutPayload = {
  access_token: string;
  refresh_token: string;
};
