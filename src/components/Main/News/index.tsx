import React, { useState } from 'react';
import styled from 'styled-components';
import NewsCategory from './NewsCategory';
import NewsList from './NewsList';
import SelectedNews from './SelectedNews';

const index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NewsOuterContainer>
      <NewsInnerContainer>
        {/* leftContainer는 NewsCategory Component안으로 이동 */}
        <NewsCategory isOpen={isOpen} setIsOpen={setIsOpen} />
        <RightContainer>
          {/* 뉴스 내용 보이는곳 */}
          {/* news 기사 리스트 */}
          <NewsList isOpen={isOpen} setIsOpen={setIsOpen} />
          {/* 선택된 기사 내용 보기 */}
          <SelectedNews />
        </RightContainer>
      </NewsInnerContainer>
    </NewsOuterContainer>
  );
};

export default index;

const NewsOuterContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem;
`;

const NewsInnerContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 2.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  padding: 2.5rem;
`;

const RightContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: blueviolet;
`;
