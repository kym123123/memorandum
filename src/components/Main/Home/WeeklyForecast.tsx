import React from 'react';
import { WeeklyWeatherStateType } from 'src/recoils/types';
import styled from 'styled-components';
import DayForecast from './DayForecast';

interface WeeklyForecastProps {
  weeklyWeatherArr: WeeklyWeatherStateType[];
}

const WeeklyForecast = ({ weeklyWeatherArr }: WeeklyForecastProps) => {
  if (!weeklyWeatherArr) return null;
  console.log(weeklyWeatherArr);

  return (
    <WeeklyForecastContainer>
      {weeklyWeatherArr.map((dayWeather, index) => (
        <DayForecast dayWeather={dayWeather} key={index} />
      ))}
    </WeeklyForecastContainer>
  );
};

const WeeklyForecastContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border-radius: 2rem;
  padding: 2rem;
  width: 68%;
`;
export default WeeklyForecast;
