import { Action, createReducer, on } from '@ngrx/store';
import { WEATHER_ACTIONS } from '../../actions/weather/weather.actions';
import { Weather } from '../../../model/weather';
import { Forecast } from '../../../model/forecast';

export const weatherFeatureKey = 'weather';

export interface WeatherState {
  data: { [index: string]: Weather };
  selectedForecast?: {
    zipCode: string;
    forecast: Forecast;
  };
  forecastLoadingFinished: boolean;
}

export const weatherInitialState: WeatherState = {
  data: {},
  forecastLoadingFinished: false,
};

const reducer = createReducer(
  weatherInitialState,
  on(WEATHER_ACTIONS.updateWeatherLocationSuccess, (state: WeatherState, { zipCode, weather }) => {
    return {
      ...state,
      data: {
        ...state.data,
        [zipCode]: { ...weather, lastUpdate: new Date().toISOString() },
      },
    };
  }),
  on(WEATHER_ACTIONS.removeWeatherLocation, (state: WeatherState, { zipCode }) => {
    const data = { ...state.data };
    delete data[zipCode];
    return {
      ...state,
      data,
    };
  }),
  on(WEATHER_ACTIONS.loadForecast, (state: WeatherState) => {
    return {
      ...state,
      forecastLoadingFinished: false,
    };
  }),
  on(WEATHER_ACTIONS.loadForecastSuccess, (state: WeatherState, { zipCode, forecast }) => {
    return {
      ...state,
      selectedForecast: {
        zipCode,
        forecast,
      },
      forecastLoadingFinished: true,
    };
  }),
  on(WEATHER_ACTIONS.loadForecastFailure, (state: WeatherState) => {
    return {
      ...state,
      forecastLoadingFinished: true,
    };
  })
);

export function weatherReducer(state: WeatherState | undefined, action: Action) {
  return reducer(state, action);
}
