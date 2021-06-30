import styled from 'styled-components';
import { FaCloud } from 'react-icons/fa';
import { RiWindyFill } from 'react-icons/ri';
import { WiHumidity } from 'react-icons/wi';
import ForecastRefresh from './ForecastRefresh';
import { WeatherStateType } from 'src/recoils/types';

interface TodayForecastProps {
  todayWeather: WeatherStateType;
  refreshWeatherInfo: () => void;
}

const TodayForecast = ({
  todayWeather: WeatherInfo,
  refreshWeatherInfo,
}: TodayForecastProps) => {
  return (
    <TodayForecastContainer>
      {/* today title */}
      <div className="title-container">
        <div className="title">Today</div>
        <div className="position">{WeatherInfo?.current_pos}</div>
      </div>
      {/* 날씨 아이콘 컨테이너(아이콘, 날씨설명(rainy, sunny)) */}
      <div className="forecast-icon-container">
        <img
          src={`http://openweathermap.org/img/wn/${WeatherInfo?.icon}@2x.png`}
          alt="weather"
          className="icon"
        />
        <div>{WeatherInfo?.main}</div>
      </div>

      {/* 온도 컨테이너 (현재온도, 체감기온(feels like 3도)) */}
      <div className="forecast-temp-container">
        <div className="temp-temp">{WeatherInfo?.temp}°C</div>
        <div className="temp-feelsLike">
          Feels like {WeatherInfo?.feels_like}°C
        </div>
      </div>

      {/* 날씨 디테일 컨테이너 (풍속, 강수확률, 구름정도)*/}
      <div className="forecast-detail-container">
        <div className="wind-container each-con">
          <RiWindyFill size={25} color={'white'} />
          <div className="wind-text con-text">
            {WeatherInfo?.wind_speed} m/s
          </div>
        </div>
        <div className="humid-container each-con">
          <WiHumidity size={25} color={'white'} />
          <div className="humid-text con-text">{WeatherInfo?.humidity}%</div>
        </div>
        <div className="cloud-container each-con">
          <FaCloud size={25} color={'white'} />
          <div className="cloud-text con-text">{WeatherInfo?.clouds}%</div>
        </div>
      </div>
      {/* 새로고침 아이콘 */}
      <ForecastRefresh refreshWeatherInfo={refreshWeatherInfo} />
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
  .title-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .title {
    margin-top: -1rem;
    text-align: center;
    font-size: 1.3rem;
    color: white;
  }
  .position {
    margin-top: 0.4rem;
    text-align: center;
    color: white;
  }
  .forecast-icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    .icon {
      width: 7.5rem;
      height: 7.5rem;
    }
  }
  .forecast-temp-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    .temp-temp {
      font-weight: 300;
      font-size: 4.3rem;
      margin-bottom: 1rem;
    }
  }
  .forecast-detail-container {
    display: flex;
    justify-content: space-between;
  }
  .each-con {
    color: white;
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

export default TodayForecast;
