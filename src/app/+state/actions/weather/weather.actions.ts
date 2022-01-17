import { createAction, props } from '@ngrx/store';
import { Weather } from '../../../model/weather';
import { Forecast } from '../../../model/forecast';

export const WEATHER_ACTIONS = {
  reloadWeatherLocations: createAction(
    '[Weather] Reload Locations',
    props<{ zipCodes: string[] }>()
  ),
  updateWeatherLocation: createAction('[Weather] Add Location', props<{ zipCode: string }>()),
  updateWeatherLocationSuccess: createAction(
    '[Weather] Add Location Success',
    props<{ zipCode: string; weather: Weather }>()
  ),
  updateWeatherLocationFailure: createAction(
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
