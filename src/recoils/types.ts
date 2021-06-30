export type WeatherStateType = {
  clouds: string;
  feels_like: number;
  humidity: number;
  temp: number;
  wind_speed: number;
  main: string; // 날씨 정보 text
  current_pos: string;
  icon: string;
};

export type WeeklyWeatherStateType = {
  dt: number; // date
  temp: {
    max: number;
    min: number;
  };
  main: string; // 날씨 정보 text
  icon: string;
};
