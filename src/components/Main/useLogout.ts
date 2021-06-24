import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from 'src/modules';
import { requestLogoutActionCreator } from 'src/modules/auth';

const useLogout = (): [authLoading: boolean, requestLogout: () => void] => {
  const { authLoading } = useSelector((state: RootStateType) => state.auth);
  const { accessToken: access_token, refreshToken: refresh_token } =
    useSelector((state: RootStateType) => state.auth.user);
  const dispatch = useDispatch();

  const requestLogout = (): void => {
    console.log(access_token, refresh_token);

    dispatch(
      requestLogoutActionCreator({
        access_token: access_token!,
        refresh_token: refresh_token!,
      }),
    );
  };

  return [authLoading, requestLogout];
};

export default useLogout;
