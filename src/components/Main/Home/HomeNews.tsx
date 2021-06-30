import { useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from 'src/modules';
import { requestNewsActionCreator } from 'src/modules/news';
import styled from 'styled-components';
import HomeNewsEach from './HomeNewsEach';
import HomeNewsRefresh from './HomeNewsRefresh';

const HomeNews = () => {
  const dispatch = useDispatch();
  const latestFourNews = useSelector((state: RootStateType) =>
    state.news.newsArr.slice(0, 4),
  );
  useEffect(() => {
    dispatch(requestNewsActionCreator({}));
  }, [dispatch]);

  return (
    <NewsContainer>
      <div className="news-header">
        {latestFourNews.length ? (
          "What's New today"
        ) : (
          <SkeletonTheme
            color="rgba(255,255,255,0.1)"
            highlightColor="rgba(255,255,255,0.2)"
          >
            <Skeleton width={140} height={30} count={1} />
          </SkeletonTheme>
        )}
      </div>

      <HomeNewsEach news={latestFourNews[0]} />
      <HomeNewsEach news={latestFourNews[1]} />
      <HomeNewsEach news={latestFourNews[2]} />
      <HomeNewsEach news={latestFourNews[3]} />
      <HomeNewsRefresh />
    </NewsContainer>
  );
};

const NewsContainer = styled.div`
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.1) 100%
  );
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 3rem;
  width: 62%;
  margin-top: 2.5rem;
  padding: 5rem 2rem 0rem 2rem;
  .news-header {
    position: absolute;
    font-size: 2rem;
    font-weight: 300;
    color: #4d4343;
    top: 2rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 1110px) {
    width: 100%;
  }
`;
export default HomeNews;
