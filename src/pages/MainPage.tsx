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
    <OuterMainContainer>
      <MainContainer>
        <Header />
        <Route path={'/home'} component={Home} />
        <Route path={'/memo'} component={Memo} />
        <Route />
      </MainContainer>
    </OuterMainContainer>
  );
};

const OuterMainContainer = styled.div`
  background-image: url('/assets/images/mainbackground.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1380px) {
    height: 100vh;
    overflow-y: scroll;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 1400px;
  height: 100%;
  min-height: 650px;
  @media screen and (max-width: 1110px) {
    flex-direction: column;
    width: 100%;
  }
`;

export default MainPage;
