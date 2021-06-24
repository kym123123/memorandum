import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootStateType } from 'src/modules';

const UserInfo = () => {
  const { email, nickname } = useSelector(
    (state: RootStateType) => state.auth.user,
  );
  return (
    <UserInfoContainer>
      {/* 유저 아이콘 */}
      <FaUserCircle
        className="user-icon"
        size={45}
        color="rgba(175,33,228,0.55)"
      />
      {/* 컨테이너(유저 닉네임, 유저 이메일) */}
      <UserNickNameEmailContainer>
        <li className="user-email">{email}</li>
        <li className="user-nickname">{nickname}</li>
      </UserNickNameEmailContainer>
    </UserInfoContainer>
  );
};

const UserInfoContainer = styled.section`
  margin-top: 2.5rem;
  width: 100%;
  height: 7rem;
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  backdrop-filter: blur(19px);
  -webkit-backdrop-filter: blur(19px);
  border-radius: 10px;
  border-radius: 1.5rem;
  display: flex;
  padding: 1rem 0.3rem;
  align-items: center;
  justify-content: space-evenly;
`;

const UserNickNameEmailContainer = styled.ul`
  height: 3.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .user-email {
    font-weight: 500;
    font-size: 1.4rem;
    color: #1d1c1c;
  }
  .user-nickname {
    color: #948f8f;
  }
`;

export default UserInfo;
