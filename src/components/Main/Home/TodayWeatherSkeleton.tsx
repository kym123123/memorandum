import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styled from 'styled-components';

const TodayWeatherSkeleton = () => {
  return (
    <TodayForecastContainer>
      <SkeletonTheme
        color="rgba(255,255,255,0.1)"
        highlightColor="rgba(255,255,255,0.2)"
      >
        <div className="title">
          {/* today title */}
          <Skeleton count={1} duration={3} width={100} height={20} />
        </div>

        {/* 날씨 아이콘 컨테이너(아이콘, 날씨설명(rainy, sunny)) */}
        <div className="forecast-icon-container">
          <Skeleton
            count={1}
            duration={3}
            width={50}
            height={50}
            circle={true}
          />
        </div>

        {/* 온도 컨테이너 (현재온도, 체감기온(feels like 3도)) */}
        <div className="forecast-temp-container">
          <div className="temp-temp">
            <Skeleton count={1} duration={3} width={150} height={50} />
          </div>
        </div>

        {/* 날씨 디테일 컨테이너 (풍속, 강수확률, 구름정도)*/}
        <div className="forecast-detail-container">
          <div className="wind-container each-con">
            <Skeleton count={1} duration={3} width={50} height={40} />
          </div>
          <div className="humid-container each-con">
            <Skeleton count={1} duration={3} width={50} height={40} />
          </div>
          <div className="cloud-container each-con">
            <Skeleton count={1} duration={3} width={50} height={40} />
          </div>
        </div>
        {/* 새로고침 아이콘 */}
      </SkeletonTheme>
    </TodayForecastContainer>
  );
};

const TodayForecastContainer = styled.div`
  position: relative;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: linear-gradient(
    90deg,
    rgba(176, 88, 195, 0.1) 23%,
    rgba(176, 88, 195, 0.45) 100%
  );
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 2rem;
  width: 29%;

  .title {
    display: flex;
    justify-content: center;
  }
  .forecast-icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .forecast-temp-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .temp-temp {
      font-weight: 300;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
  .forecast-detail-container {
    display: flex;
    justify-content: space-between;
  }
  .each-con {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .con-text {
      margin-top: 0.2rem;
    }
  }

  @media screen and (max-width: 1380px) {
    min-width: 33%;
    margin-right: 2rem;
  }
`;

export default TodayWeatherSkeleton;
