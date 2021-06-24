import Header from 'components/Main/Header';
import Home from 'components/Main/Home/index';
import Memo from 'components/Main/Memo';
import { RootStateType } from 'modules/index';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { isModalOpenState } from 'src/recoils';
import styled from 'styled-components';

const MainPage = () => {
  const setOpenModal = useSetRecoilState(isModalOpenState);
  const { accessToken, refreshToken } = useSelector(
    (state: RootStateType) => state.auth.user,
  );
  const history = useHistory();
  useEffect(() => {
    return () => setOpenModal(false);
  }, []);

  useEffect(() => {
    if (!accessToken || !refreshToken) history.replace('/login');
  }, [accessToken, refreshToken]);

  if (!accessToken || !refreshToken) return <Redirect to="/login" />;

  return (
    <MainContainer>
      <Header />
      <Route path={'/home'} component={Home} />
      <Route path={'/memo'} component={Memo} />
      <Route />
    </MainContainer>
  );
};
const MainContainer = styled.div`
  display: flex;

  background-image: url('/assets/images/mainbackground.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export default MainPage;
