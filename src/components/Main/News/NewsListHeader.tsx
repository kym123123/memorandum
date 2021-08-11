import React from 'react';
import styled from 'styled-components';
import { useRouteMatch } from 'react-router-dom';
import { INewsListProps } from './NewsList';
import { CgOptions } from 'react-icons/cg';
import { GrRefresh } from 'react-icons/gr';

const NewsListHeader = ({ setIsOpen }: Pick<INewsListProps, 'setIsOpen'>) => {
  const { params }: { params: { category: string } } = useRouteMatch();

  return (
    <NewsListHeaderContainer>
      <div className="category-text">{params.category} News</div>
      <CgOptions
        size={30}
        color={'purple'}
        className="category-selector-icon"
        onClick={() => setIsOpen(true)}
      />
      <GrRefresh size={20} color={'purple'} className="category-refresh-icon" />
    </NewsListHeaderContainer>
  );
};

const NewsListHeaderContainer = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  width: 31rem;
  justify-content: center;
  background-color: beige;
  .category-text {
    font-size: 2rem;
    color: purple;
    margin-right: 1rem;
    line-height: 3rem;
  }
  .category-selector-icon {
    cursor: pointer;
    transition: 0.3s all;
    &:active {
      transform: scale(0.9);
    }
  }
  .category-refresh-icon {
    position: absolute;
    cursor: pointer;
    top: 2rem;
    right: 1rem;
    transition: 0.3s all;
    &:active {
      transform: scale(0.9);
    }
  }
`;

export default NewsListHeader;
