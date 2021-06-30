import React from 'react';
import styled from 'styled-components';
import { WeeklyWeatherStateType } from 'src/recoils/types';
import { getDayName, getMonthName } from 'src/lib/utils/watchHelper';

interface DayForecastProps {
  dayWeather: WeeklyWeatherStateType;
}

const DayForecast = ({ dayWeather }: DayForecastProps) => {
  const dt = new Date(dayWeather.dt * 1000);
  return (
    <DayForecastContainer>
      {/* 요일, 달, 일 */}
      <div className="date-container">
        {getDayName(+dt.getDay())}, {getMonthName(+dt.getMonth())}{' '}
        {dt.getDate()}
      </div>
      {/*  아이콘, 날씨묘사 */}
      <div className="weather-container">
        <img
          src={`http://openweathermap.org/img/wn/${dayWeather.icon}@2x.png`}
          alt="weather"
          className="icon"
        />
        {/* <FaCloudShowersHeavy size={12} color={'white'} /> */}
        <span className="weather-text">{dayWeather.main}</span>
      </div>
      {/* 최저 최고온도 */}
      <div className="temp-container">
        {dayWeather.temp.min}°C / {dayWeather.temp.max}°C
      </div>
    </DayForecastContainer>
  );
};

const DayForecastContainer = styled.section`
  & + & {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  width: 100%;
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: space-between;
  color: white;
  .date-container {
    font-size: 1.2rem;
  }
  .date-container {
    width: 8rem;
  }
  .weather-container {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    .weather-text {
      margin-left: 0.5rem;
    }
  }
  .icon {
    width: 6rem;
    height: 6rem;
  }
  .temp-container {
    font-size: 1.2rem;
  }
`;
export default DayForecast;
