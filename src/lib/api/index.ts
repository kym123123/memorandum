import axios from 'axios';
import renewToken from '../utils/renewToken';

// login, logout, signup,에만 사용하는 axios 인스턴스.
export const lsAxios = axios.create({
  baseURL: 'http://localhost:3001/',
});

// header에 access token을 담아서 전송
const Axios = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: { Authorization: `Bearer ${localStorage.getItem('AT')}` },
});

// request interceptor
Axios.interceptors.request.use(
  renewToken.renewTokenReqConfig, // request config
  renewToken.renewTokenReqError, // request error handling
);

// response interceptor
// Axios.interceptors.response.use(renewToken.renewTokenRes);
export default Axios;
