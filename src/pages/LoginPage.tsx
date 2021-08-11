import Auth from 'components/Auth/Auth';
import { RootStateType } from 'modules/index';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const AuthPage = () => {
  const { accessToken, refreshToken } = useSelector(
    (state: RootStateType) => state.auth.user,
  );

  if (accessToken && refreshToken) return <Redirect to="/" />;

  return <Auth />;
};
export default AuthPage;
