import styled from 'styled-components';
import colors from 'lib/colors';
import { Button, Input } from '../../globalStyles';
import { BsArrowRight } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillLock } from 'react-icons/ai';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  InputNameType,
  changeInputActionCreator,
  initializeAllActionCreator,
  requestLoginActionCreator,
} from 'modules/auth';
import { RootStateType } from 'modules/index';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [passwordCheck, setPasswordCheck] = useState('');
  const { email, password, nickname, authLoading } = useSelector(
    (state: RootStateType) => state.auth,
  );
  const dispatch = useDispatch();

  const changeAuthMode = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    e.preventDefault();
    setIsLogin((isLogin) => !isLogin);
    dispatch(initializeAllActionCreator({}));
    setPasswordCheck('');
  };

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(
      changeInputActionCreator({
        inputName: e.target.name as InputNameType,
        content: e.target.value,
      }),
    );
  };

  const changePasswordCheckValue = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => setPasswordCheck(e.target.value);

  const requestLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(requestLoginActionCreator({ email, password }));
  };

  return (
    <BackgroundContainer>
      <LoginFormContainer>
        <LoginFormLeft>
          <div className="deco-oval deco-oval-1"></div>
          <div className="deco-oval deco-oval-2"></div>
          <div className="deco-oval deco-oval-3"></div>
          <div className="deco-oval deco-oval-4"></div>
        </LoginFormLeft>
        {/* 로그인 폼 */}
        <LoginForm onSubmit={requestLogin}>
          {/* 로고 */}
          <img
            src="./assets/images/logo.svg"
            alt="memorandum"
            className="logo"
          />
          <h1 className="login">{isLogin ? 'Login' : 'Sign Up'}</h1>
          <div className="input-container">
            <FaUserAlt className="email-icon" />
            <Input
              placeholder="Email"
              name="email"
              value={email}
              onChange={changeInputValue}
            />
            <div>잘못되었습니다.</div>
          </div>
          {isLogin ? null : (
            <div className="input-container">
              <FaUserAlt className="email-icon" />
              <Input
                placeholder="Nickname"
                name="nickname"
                value={nickname}
                onChange={changeInputValue}
              />
              <div>잘못되었습니다.</div>
            </div>
          )}
          <div className="input-container">
            <AiFillLock className="password-icon" />
            <Input
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={changeInputValue}
            />
            <div>잘못되었습니다.</div>
          </div>
          {isLogin ? null : (
            <div className="input-container">
              <AiFillLock className="password-icon" />
              <Input
                placeholder="Password check"
                type="password"
                name="password-check"
                value={passwordCheck}
                onChange={changePasswordCheckValue}
              />
              <div>잘못되었습니다.</div>
            </div>
          )}
          <Button className="form-button">
            {authLoading ? 'loading...' : isLogin ? 'Login' : 'Sign Up'}
          </Button>
          <div className="forgot-info">Forgot Email or Password?</div>
          <button className="sign-up" onClick={changeAuthMode}>
            {isLogin ? 'Create Your Account!' : 'Login with email'}
            <BsArrowRight className="sign-up-arrow" />
          </button>
        </LoginForm>
      </LoginFormContainer>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  background: ${colors.mainBackgroundColor};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginFormContainer = styled.div`
  background: ${colors.generalBackground};
  display: flex;
  width: 700px;
  height: 540px;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: ${colors.generalBoxShadow};

  @media screen and (max-width: 640px) {
    width: 90vw;
    height: 500px;
  }
`;

const LoginForm = styled.form`
  width: 50%;
  font-size: 2.5rem;
  font-weight: 500;
  display: flex;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  .logo {
    position: absolute;
    top: 3rem;
  }
  h1 {
    width: 100%;
    text-align: center;
    font-size: 2.1rem;
    color: #544e4e;
    margin-bottom: 2rem;
  }
  .input-container {
    position: relative;
    width: 100%;
    .email-icon,
    .password-icon {
      position: absolute;
      top: 1.5rem;
      left: 1rem;
      font-size: 1.3rem;
      path {
        fill: #544e4e;
      }
    }
    margin-bottom: 1rem;
  }
  .form-button {
    font-size: 1.7rem;
  }
  .forgot-info {
    color: gray;
    font-size: 1.2rem;
    margin-top: 1rem;
  }
  .sign-up {
    border: none;
    outline: 0;
    background-color: transparent;
    color: #918989;
    position: absolute;
    bottom: 2rem;
    cursor: pointer;
    .sign-up-arrow {
      vertical-align: top;
      margin-left: 0.3rem;
    }
  }
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

const LoginFormLeft = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  position: relative;

  .deco-oval {
    position: absolute;
    background: ${colors.mainBackgroundColor};
  }

  .deco-oval-1 {
    transform: rotateZ(50deg) translate(-40%, 50%);
    border: 20px solid rgba(219, 198, 222);
    width: 500px;
    height: 220px;
    border-radius: 140px;
  }

  .deco-oval-2 {
    transform: rotateZ(50deg) translate(-10%, 230%);
    width: 300px;
    height: 90px;
    border-radius: 50px;
  }

  .deco-oval-3 {
    transform: rotateZ(50deg) translate(-50%, -160%);
    width: 300px;
    height: 90px;
    border-radius: 50px;
  }
  .deco-oval-4 {
    transform: rotateZ(50deg) translate(95%, 60%);
    width: 300px;
    height: 90px;
    border-radius: 50px;
  }
  @media screen and (max-width: 640px) {
    display: none;
  }
`;
export default Login;
