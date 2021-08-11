import axios from 'axios';
export const getWeatherOneCall = (lat: string, lon: string) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric&exclude=minutely,hourly,alerts`,
  );
};
