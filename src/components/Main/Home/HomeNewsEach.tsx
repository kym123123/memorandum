import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { NewsObjType } from 'src/modules/types';
import styled from 'styled-components';

interface IHomeNewsEach {
  news: NewsObjType;
}

const HomeNewsEach = ({ news }: IHomeNewsEach) => {
  console.log(news);

  return (
    <HomeNewsEachContainer>
      {/* 뉴스 썸네일 */}
      {news ? (
        <img
          src={news.urlToImage}
          alt={news.description}
          className="news-each-thumbnail"
        />
      ) : (
        <SkeletonTheme
          color="rgba(255,255,255,0.1)"
          highlightColor="rgba(255,255,255,0.2)"
        >
          <Skeleton width={150} height={100} count={1} />
        </SkeletonTheme>
      )}
      {/* 뉴스 한개 제목 */}
      {news ? (
        <div className="news-each-title">{news.title}</div>
      ) : (
        <SkeletonTheme
          color="rgba(255,255,255,0.1)"
          highlightColor="rgba(255,255,255,0.2)"
        >
          <Skeleton width={150} height={20} count={1} />
        </SkeletonTheme>
      )}
      {news ? (
        <div className="news-each-description">{news.description}</div>
      ) : (
        <SkeletonTheme
          color="rgba(255,255,255,0.1)"
          highlightColor="rgba(255,255,255,0.2)"
        >
          <Skeleton width={150} height={50} count={1} />
        </SkeletonTheme>
      )}
    </HomeNewsEachContainer>
  );
};

const HomeNewsEachContainer = styled.div`
  width: 50%;
  height: 50%;
  color: #6e6767;
  .news-each-thumbnail {
    width: 100%;
    height: 60%;
    object-fit: contain;
    margin-bottom: 1rem;
    border-radius: 1rem;
  }
  .news-each-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  .news-each-description {
    text-align: center;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 3rem;
  }
  @media screen and (max-width: 1110px) {
    & + & {
      margin-top: 2rem;
    }
    width: 100%;
    height: 20rem;
    .news-each-thumbnail {
      width: 100%;
      height: 65%;
      object-fit: contain;
      margin-bottom: 1rem;
    }
  }
`;
export default HomeNewsEach;
