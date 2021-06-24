import React from 'react';
import styled from 'styled-components';

const HomeOuterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
`;

const HomeInnerContainer = styled.main`
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 2.5rem;
  padding: 2rem;
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

const Home = () => {
  return (
    <HomeOuterContainer>
      <HomeInnerContainer>Home</HomeInnerContainer>
    </HomeOuterContainer>
  );
};

export default Home;
