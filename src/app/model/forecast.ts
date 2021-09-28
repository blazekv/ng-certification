import { WeatherItem } from './weather';

export interface Forecast {
  city: {
    id: number;
    name: string;
    coord: {
      lon: number;
      lat: number;
    };
    country: string;
    population: number;
    timezone: number;
  };
  cod: string;
  message: number;
  cnt: number;
  list: DailyForecast[];
}

export interface DailyForecast {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  weather: WeatherItem[];
  speed: number;
  deg: number;
  gust: number;
  clouds: number;
  pop: number;
}
