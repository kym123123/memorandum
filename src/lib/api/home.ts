import axios from 'axios';

export const getWeatherOneCall = (lat: string, lon: string) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=f43134462bcefde9de6c7fb4eedb50ad&units=metric&exclude=minutely,hourly,alerts`,
  );
};

export const getNews = () =>
  axios.get(
    `https://newsapi.org/v2/top-headlines?country=kr&apiKey=153a6e0cbe3d4508bbfbb4909c5e1b57`,
  );
