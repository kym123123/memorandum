import axios from 'axios';
import renewToken from '../utils/renewToken';

// login, logout, signup에만 사용하는 axios 인스턴스.
export const lsAxios = axios.create({
  baseURL: 'http://localhost:3001/',
});

// header에 access token을 담아서 전송
const Axios = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: { Authorization: `Bearer ${localStorage.getItem('AT')}` },
});

Axios.interceptors.request.use(
  renewToken.renewTokenReq,
  renewToken.renewTokenRes,
);

Axios.interceptors.response.use(
  (response) => {
    console.log(response);

    return response;
  },
  async (err) => {
    const originalRequest = err.config;
    console.log(err.response.data);

    if (err.response.status === 401) {
      console.log('error unauthorized');
    }
  },
);
export default Axios;
