import { createAction, props } from '@ngrx/store';

export const WEATHER_ACTIONS = {
  loadWeathers: createAction('[Weather] Load Weathers'),
  loadWeathersSuccess: createAction('[Weather] Load Weathers Success', props<{ data: any }>()),
  loadWeathersFailure: createAction('[Weather] Load Weathers Failure', props<{ error: any }>()),

  addLocation: createAction('[Weather] Add Location', props<{ zipCode: string }>()),
};
