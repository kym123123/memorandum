import React from 'react';
import { VscRefresh } from 'react-icons/vsc';
import styled from 'styled-components';

const HomeNewsRefresh = () => {
  return (
    <HomeNewsRefreshContainer>
      <VscRefresh size={15} color={'white'} className="news-refresh-icon" />
    </HomeNewsRefreshContainer>
  );
};

const HomeNewsRefreshContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  cursor: pointer;
  right: 3rem;
`;

export default HomeNewsRefresh;
