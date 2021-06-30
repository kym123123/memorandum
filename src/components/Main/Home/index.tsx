import { Suspense } from 'react';
import styled from 'styled-components';
import Forecast from './Forecast';
import Watch from './Watch';
import TodayWeatherSkeleton from './TodayWeatherSkeleton';
import WeeklyWeatherSkeleton from './WeeklyWeatherSkeleton';
import News from './HomeNews';
import Condition from './Condition';

const Home = () => {
  return (
    <HomeOuterContainer>
      <HomeInnerContainer>
        <UpperContainer>
          {/* 시계 */}
          <Watch />
          {/* 오늘 날씨 */}
          <Suspense
            fallback={
              <ForecastOuterContainer>
                <TodayWeatherSkeleton />
                <WeeklyWeatherSkeleton />
              </ForecastOuterContainer>
            }
          >
            <Forecast />
          </Suspense>
        </UpperContainer>

        <LowerContainer>
          {/* 뉴스 최신 4개 현황 */}
          <News />

          {/* 전체 현황 */}
          <Condition />
          {/* Todo 가장 최근꺼 보여주기 */}
        </LowerContainer>
      </HomeInnerContainer>
    </HomeOuterContainer>
  );
};
export default Home;

const ForecastOuterContainer = styled.div`
  margin-left: 2.5rem;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1380px) {
    margin-left: 0;
    min-width: 93%;
    width: 100%;
    height: 30rem;
  }
`;

const HomeOuterContainer = styled.div`
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  overflow-y: scroll;
  @media screen and (max-width: 1110px) {
    margin-top: 8rem;
  }
`;

const HomeInnerContainer = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1380px) {
    height: 100vh;
  }
`;
const UpperContainer = styled.div`
  display: flex;
  height: 25rem;
  @media screen and (max-width: 1380px) {
    flex-direction: column;
    height: 50rem;
  }
`;

const LowerContainer = styled.div`
  height: calc(100% - 25rem);
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1110px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;
