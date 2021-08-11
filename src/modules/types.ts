import { CategoryType } from 'src/components/Main/News/types';

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

export type NewsObjType = {
  publishedAt: Date;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
};
export type CategoryNewsObjType = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: null | string; name: string };
  title: string;
  url: string;
  urlToImage: string;
};

export type NewsInitialStateType = {
  category: CategoryType;
  newsLoading: boolean;
  newsError: null | Error;
  newsArr: NewsObjType[];
  newsByCategory: {
    business: CategoryNewsObjType[];
    entertainment: CategoryNewsObjType[];
    health: CategoryNewsObjType[];
    science: CategoryNewsObjType[];
    sports: CategoryNewsObjType[];
    technology: CategoryNewsObjType[];
  };
};

export type CategoryPayloadType = {
  category: CategoryType;
};
