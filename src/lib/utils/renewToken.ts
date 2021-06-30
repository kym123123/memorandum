import axios, { AxiosRequestConfig } from 'axios';
import { isPast } from 'date-fns';

const renewTokenReq = async (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig> => {
  const refresh_token = localStorage.getItem('RT');
  const access_token = localStorage.getItem('AT');
  const refresh_token_ext = +localStorage.getItem('RTET')!;
  const access_token_ext = +localStorage.getItem('ATET')!;

  const body = {
    refresh_token,
  };
  const headers = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  if (
    isPast(access_token_ext * 1000 - 5) ||
    isPast(refresh_token_ext * 1000 - 5)
  ) {
    const res = await axios.post(
      'http://localhost:3001/user/renewToken',
      body,
      headers,
    );
    console.log(res.data); // access_token, success: 1와야함
    if (res.data.success === 1 && res.data.access_token) {
      localStorage.setItem('ATET', res.data.accessExpireTime);
      localStorage.setItem('AT', res.data.access_token);
    } else if (res.data.success === 2 && res.data.refresh_token) {
      localStorage.setItem('RTET', res.data.refreshExpireTime);
      localStorage.setItem('RT', res.data.refresh_token);
    }

    config.headers['Authorization'] = `Bearer ${localStorage.getItem('AT')}`;
    return config;
  }
  return config;
};
const renewTokenRes = (err: any) => {
  console.log(err);

  return Promise.reject(err);
};
export default { renewTokenReq, renewTokenRes };
