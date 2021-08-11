import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from 'src/modules';
import { requestCategoryNewsActionCreator } from 'src/modules/news';
import styled from 'styled-components';
import NewsListHeader from './NewsListHeader';
import NewsListItem from './NewsListItem';

export interface INewsListProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean | ((isOpen: boolean) => boolean)) => void;
}

const NewsList = ({ isOpen, setIsOpen }: INewsListProps) => {
  const { category, newsByCategory } = useSelector(
    (state: RootStateType) => state.news,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // news 요청 caching => 이미 배열 존재하면 요청하지 않는다.
    if (!newsByCategory[category].length) {
      dispatch(requestCategoryNewsActionCreator({ category }));
    }
  }, [category]);

  return (
    <NewsListContainer>
      {/* newsListHeader, 현재 category 표시, category 선택 창 열기 버튼. */}
      <NewsListHeader setIsOpen={setIsOpen} />

      {/* 뉴스 list item */}
      {newsByCategory[category].map((news) => (
        <NewsListItem news={news} />
      ))}
    </NewsListContainer>
  );
};

export default NewsList;

const NewsListContainer = styled.section``;
