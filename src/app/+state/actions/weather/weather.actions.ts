import { createAction, props } from '@ngrx/store';
import { Weather } from '../../../model/weather';

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
};
