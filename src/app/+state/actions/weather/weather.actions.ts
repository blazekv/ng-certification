import { createAction, props } from '@ngrx/store';
import { Weather } from '../../../model/weather';
import { Forecast } from '../../../model/forecast';

export const WEATHER_ACTIONS = {
  addWeatherLocation: createAction('[Weather] Add Location', props<{ zipCode: string }>()),
  addWeatherLocationSuccess: createAction(
    '[Weather] Add Location Success',
    props<{ zipCode: string; weather: Weather }>()
  ),
  addWeatherLocationFailure: createAction(
    '[Weather] Add Location Failure',
    props<{ error: any }>()
  ),
  removeWeatherLocation: createAction('[Weather] Remove Location', props<{ zipCode: string }>()),

  loadForecast: createAction('[Weather] Load Forecast', props<{ zipCode: string }>()),
  loadForecastSuccess: createAction(
    '[Weather] Load Forecast Success',
    props<{ zipCode: string; forecast: Forecast }>()
  ),
  loadForecastFailure: createAction('[Weather] Load Forecast Failure', props<{ error: any }>()),
};
