import { BsArrowRight } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillLock } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeInputActionCreator,
  initializeAllActionCreator,
  requestLoginActionCreator,
  requestSignUpActionCreator,
  removeAuthErrorActionCreator,
} from 'modules/auth';
import { RootStateType } from 'modules/index';
import {
  BackgroundContainer,
  LoginFormContainer,
  LoginFormLeft,
  LoginForm,
} from './styles';
import { Button, Input } from '../../globalStyles';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Indicator from './Indicator';
import { checkEmailValidation } from 'lib/utils/validationCheck';
import { InputNameType } from 'src/modules/types';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [hasRequest, setHasRequest] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState('');
  const { email, password, nickname, authLoading, authError } = useSelector(
    (state: RootStateType) => state.auth,
  );
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const changeAuthMode = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    e.preventDefault();
    setIsLogin((isLogin) => !isLogin);
    dispatch(initializeAllActionCreator({}));
    setPasswordCheck('');
    setHasRequest(false);
  };

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (authError) dispatch(removeAuthErrorActionCreator({}));
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
    setHasRequest(true);
  };

  const requestSignup = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(requestSignUpActionCreator({ email, password, nickname }));
    setHasRequest(true);
  };

  useEffect(() => {
    setIsEmailValid(checkEmailValidation(email));
  }, [email]);

  useEffect(() => {
    if (authError && authError.success === -1)
      setErrorMessage(
        isLogin
          ? 'Please, Check your email or password again.'
          : 'This email already exists.',
      );
    else if (authError && authError.success === 0)
      setErrorMessage('Unknown Error. Try later');
    else {
      setErrorMessage('');
    }
  }, [authError]);

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
        <LoginForm onSubmit={isLogin ? requestLogin : requestSignup}>
          {/* 로고 */}
          <img
            src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/449/5504168449_667a6ee3-4803-45d0-91d2-f3cd89f85572.png?cb=1624209679"
            // src="./assets/images/logo.svg"
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
            <Indicator satisfied={isEmailValid}>
              {hasRequest || email
                ? 'Please, Write correct email address.'
                : ''}
            </Indicator>
          </div>
          {isLogin ? null : (
            <div className="input-container">
              <FaUserAlt className="email-icon" />
              <Input
                autoComplete="false"
                placeholder="Nickname"
                name="nickname"
                value={nickname}
                onChange={changeInputValue}
              />
              <Indicator satisfied={nickname.length > 3}>
                {hasRequest || nickname
                  ? 'Nickname must be characters. More than 3 letters'
                  : ''}
              </Indicator>
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
            <Indicator satisfied={password.length > 3}>
              {hasRequest || password
                ? 'Password must be more than 3 letters.'
                : ''}
            </Indicator>
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
              <Indicator
                satisfied={
                  passwordCheck.length > 3 && password === passwordCheck
                }
              >
                {hasRequest || passwordCheck
                  ? 'Password check and Password must be the same!'
                  : ''}
              </Indicator>
            </div>
          )}
          <Button
            className="form-button"
            disabled={
              isLogin
                ? !isEmailValid || password.length < 4
                : !isEmailValid ||
                  password.length < 4 ||
                  passwordCheck.length < 4 ||
                  password !== passwordCheck ||
                  nickname.length < 4
            }
          >
            {authLoading ? (
              <Loader type="Puff" color="#fefefe" height={20} width={20} />
            ) : isLogin ? (
              'Login'
            ) : (
              'Sign Up'
            )}
          </Button>
          <div className="response-indicator">
            {errorMessage ? errorMessage : ''}
          </div>
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

export default Auth;
