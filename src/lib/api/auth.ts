import Axios from './index';

export const loginAPI = (payload: { email: string; password: string }) =>
  Axios.post('/user/login', payload);
