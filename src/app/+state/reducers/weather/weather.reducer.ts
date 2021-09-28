import { Action, createReducer, on } from '@ngrx/store';
import { WEATHER_ACTIONS } from '../../actions/weather/weather.actions';

export const weatherFeatureKey = 'weather';

export interface WeatherState {
  data: { [index: string]: string };
}

export const weatherInitialState: WeatherState = {
  data: {},
};

const reducer = createReducer(
  weatherInitialState,
  on(WEATHER_ACTIONS.addLocation, (state: WeatherState, { zipCode }) => {
    return {
      ...state,
      data: {
        ...state.data,
        [zipCode]: zipCode,
      },
    };
  })
);

export function weatherReducer(state: WeatherState | undefined, action: Action) {
  return reducer(state, action);
}
