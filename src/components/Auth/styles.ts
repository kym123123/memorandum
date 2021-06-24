import styled from 'styled-components';
import colors from 'lib/colors';

export const BackgroundContainer = styled.div`
  background: ${colors.mainBackgroundColor};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginFormContainer = styled.div`
  display: flex;
  width: 700px;
  height: 540px;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: ${colors.generalBoxShadow};
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(19px);
  -webkit-backdrop-filter: blur(19px);
  border-radius: 1rem;

  @media screen and (max-width: 640px) {
    width: 90vw;
    height: 500px;
  }
`;

export const LoginForm = styled.form`
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
    top: 4rem;
    margin-bottom: 2rem;
  }
  h1 {
    width: 100%;
    text-align: center;
    font-size: 1.8rem;
    color: #544e4e;
    margin-bottom: 1rem;
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
  .response-indicator {
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: 1.2rem;
    margin-top: 1rem;
    color: red;
  }
  .form-button {
    font-size: 1.7rem;
  }
  .forgot-info {
    color: gray;
    font-size: 1.2rem;
    margin-top: 0.1rem;
    cursor: pointer;
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
    .sign-up {
      bottom: 1rem;
    }
  }
`;

export const LoginFormLeft = styled.div`
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
