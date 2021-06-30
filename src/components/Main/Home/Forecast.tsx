import { getWeatherStateSelector } from 'src/recoils';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import TodayForecast from './TodayForecast';
import WeeklyForecast from './WeeklyForecast';
import useSetCurrPos from './useSetCurrPos';

const Forecast = () => {
  const { refreshWeatherInfo } = useSetCurrPos();
  const { todayWeather, weeklyWeatherArr } = useRecoilValue<any>(
    getWeatherStateSelector,
  );

  return (
    <ForecastOuterContainer>
      {/* 오늘의 날씨 */}
      <TodayForecast
        todayWeather={todayWeather!}
        refreshWeatherInfo={refreshWeatherInfo}
      />
      {/* 일주일간 날씨 */}
      <WeeklyForecast weeklyWeatherArr={weeklyWeatherArr} />
    </ForecastOuterContainer>
  );
};

const ForecastOuterContainer = styled.div`
  margin-left: 2.5rem;
  width: 710px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1380px) {
    margin-left: 0;
    min-width: 93%;
    width: 100%;
    height: 30rem;
  }
`;

export default Forecast;
