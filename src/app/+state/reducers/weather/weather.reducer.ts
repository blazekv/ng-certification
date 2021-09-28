import { Action, createReducer, on } from '@ngrx/store';
import { WEATHER_ACTIONS } from '../../actions/weather/weather.actions';
import { Weather } from '../../../model/weather';

export const weatherFeatureKey = 'weather';

export interface WeatherState {
  data: { [index: string]: Weather };
}

export const weatherInitialState: WeatherState = {
  data: {},
};

const reducer = createReducer(
  weatherInitialState,
  on(WEATHER_ACTIONS.addWeatherLocationSuccess, (state: WeatherState, { zipCode, weather }) => {
    return {
      ...state,
      data: {
        ...state.data,
        [zipCode]: weather,
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
  })
);

export function weatherReducer(state: WeatherState | undefined, action: Action) {
  return reducer(state, action);
}
