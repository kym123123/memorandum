import { RequestLogoutPayload } from 'src/modules/types';
import Axios, { lsAxios } from './index';

export const loginAPI = (payload: { email: string; password: string }) =>
  lsAxios.post('/user/login', payload);

export const signUpApi = (payload: {
  email: string;
  password: string;
  nickname: string;
}) => lsAxios.post('/user/signUP', payload);

export const logoutApi = (payload: RequestLogoutPayload) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${payload.access_token}`,
    },
  };
  const body = { refresh_token: payload.refresh_token };

  lsAxios.post('/user/logout', body, headers);
};

// rt at renew test api
export const test = () => Axios.get('/user/test');
