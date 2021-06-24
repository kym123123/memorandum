import React from 'react';
import styled from 'styled-components';
import Watch from './Watch';

const Home = () => {
  return (
    <HomeOuterContainer>
      <HomeInnerContainer>
        {/* 시계 */}
        <Watch />

        {/* 오늘 날씨 */}

        {/* 뉴스 최신 4개 현황 */}

        {/* 전체 현황 */}

        {/* Todo 가장 최근꺼 보여주기 */}
      </HomeInnerContainer>
    </HomeOuterContainer>
  );
};

export default Home;

const HomeOuterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
`;

const HomeInnerContainer = styled.main`
  /* height: 100%;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 2.5rem;
  padding: 2rem; */
  @keyframes appear {
    0% {
      transform: translate(100%, 0);
    }
    100% {
      transform: translate(0%, 0);
    }
  }
  animation: appear 0.7s ease;
`;
