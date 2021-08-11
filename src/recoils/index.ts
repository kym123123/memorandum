import { atom, atomFamily, selector } from 'recoil';
import { getWeatherOneCall } from 'src/lib/api/home';
import {
  CurrentPositionStateType,
  WeatherStateType,
  WeeklyWeatherStateType,
} from './types';

export const isModalOpenState = atom({
  key: 'isModalOpen',
  default: false,
});

export const currentPositionState = atom<CurrentPositionStateType>({
  key: 'currentPosition',
  default: {
    lat: '',
    lon: '',
  },
});

export const weatherState = atom<WeatherStateType>({
  key: 'weather',
  default: {
    clouds: '',
    feels_like: 0,
    humidity: 0,
    temp: 0,
    wind_speed: 0,
    main: '',
    current_pos: '',
    icon: '',
  },
});

export const weeklyWeatherState = atomFamily<WeeklyWeatherStateType, number>({
  key: 'weeklyWeather',
  default: {
    dt: 0,
    temp: {
      max: 0,
      min: 0,
    },
    main: '',
    icon: '',
  },
});

export const getWeatherStateSelector = selector({
  key: 'getWeatherState',
  get: async ({ get }) => {
    const { lat, lon } = get(currentPositionState);
    if (lat === '' || lon === '')
      return { todayWeather: '', weeklyWeatherArr: '' };

    const { data: current } = await getWeatherOneCall(lat, lon);
    console.log(current);
    const rawWeeklyArr = current.daily.slice(1);

    const todayWeather: WeatherStateType = {
      clouds: current.current.clouds,
      feels_like: Math.round(current.current.feels_like),
      humidity: current.current.humidity,
      temp: Math.round(current.current.temp),
      wind_speed: current.current.wind_speed,
      main: current.current.weather[0].main,
      current_pos: current.timezone.split('/')[1],
      icon: current.current.weather[0].icon,
    };

    const weeklyWeatherArr = rawWeeklyArr.map((weather: any) => ({
      dt: weather.dt,
      temp: {
        max: Math.round(weather.temp.max),
        min: Math.round(weather.temp.min),
      },
      main: weather.weather[0].main,
      icon: weather.weather[0].icon,
    }));

    return { todayWeather, weeklyWeatherArr };
  },
});
