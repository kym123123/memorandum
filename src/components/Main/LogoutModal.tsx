import React from 'react';
import styled from 'styled-components';
import { TiTimes, TiTick } from 'react-icons/ti';
import { useSetRecoilState } from 'recoil';
import { isModalOpenState } from 'src/recoils';
import useLogout from './useLogout';

const LogoutModal = () => {
  const setIsOpenModal = useSetRecoilState(isModalOpenState);
  const [authLoading, requestLogout] = useLogout();

  return (
    <LogoutModalContainer>
      <div className="logout-text">Would you like to logout?</div>
      <ButtonContainer>
        <ModalButton onClick={requestLogout}>
          <TiTick
            size={20}
            color="
          rgba(55, 216, 166)"
          />
          {/* Yes */}
          {authLoading ? 'loading' : 'Yes'}
        </ModalButton>
        <ModalButton onClick={() => setIsOpenModal(false)}>
          <TiTimes size={20} color="rgba(255, 93, 79)" />
          No
        </ModalButton>
      </ButtonContainer>
    </LogoutModalContainer>
  );
};

const ModalButton = styled.button`
  background-color: white;
  width: 14rem;
  height: 4rem;
  margin-top: 1rem;
  border-radius: 3rem;
  outline: none;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s all;
  font-size: 1.4rem;
  &:active {
    transform: scale(0.95);
  }
`;

const LogoutModalContainer = styled.div`
  position: relative;
  background-image: url('./assets/images/lg-background.png');
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-box-shadow: 5px 5px 36px 36px rgba(0, 0, 0, 0.11);
  box-shadow: 5px 5px 36px 36px rgba(0, 0, 0, 0.11);
  border-radius: 3rem;
  width: 34rem;
  height: 18rem;
  padding: 1.9rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease-in;

  .logout-text {
    font-size: 1.8rem;
    color: white;
    position: absolute;
    left: 4rem;
    top: 4rem;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8rem;
  width: 30rem;
  height: 5rem;
`;

export default LogoutModal;
