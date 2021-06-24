import React from 'react';
import styled from 'styled-components';

const Memo = () => {
  return (
    <MemoOuterContainer>
      <MemoInnerContainer>Memo</MemoInnerContainer>
    </MemoOuterContainer>
  );
};

const MemoOuterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
`;

const MemoInnerContainer = styled.main`
  @keyframes appear {
    0% {
      transform: translate(100%, 0);
    }
    100% {
      transform: translate(0%, 0);
    }
  }
  animation: appear 0.7s ease;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 2.5rem;
  padding: 2rem;
`;

export default Memo;
