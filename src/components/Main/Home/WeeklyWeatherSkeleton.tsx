import React from 'react';
import styled from 'styled-components';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const WeeklyWeatherSkeleton = () => {
  return (
    <WeeklyForecastContainer>
      <SkeletonTheme
        color="rgba(255,255,255,0.1)"
        highlightColor="rgba(255,255,255,0.2)"
      >
        <Skeleton
          count={1}
          duration={3}
          width={400}
          height={25}
          className="sk"
        />
        <Skeleton
          count={1}
          duration={3}
          width={400}
          height={25}
          className="sk"
        />
        <Skeleton
          count={1}
          duration={3}
          width={400}
          height={25}
          className="sk"
        />
        <Skeleton
          count={1}
          duration={3}
          width={400}
          height={25}
          className="sk"
        />
        <Skeleton
          count={1}
          duration={3}
          width={400}
          height={25}
          className="sk"
        />
        <Skeleton
          count={1}
          duration={3}
          width={400}
          height={25}
          className="sk"
        />
      </SkeletonTheme>
    </WeeklyForecastContainer>
  );
};

const WeeklyForecastContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border-radius: 2rem;
  padding: 2rem;
  width: 68%;
  text-align: center;
  .sk {
    margin-top: 1rem;
  }
`;

export default WeeklyWeatherSkeleton;
