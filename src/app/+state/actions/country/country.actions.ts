import { createAction, props } from '@ngrx/store';
import { Weather } from '../../../model/weather';
import { Forecast } from '../../../model/forecast';
import { Country } from '../../../model/country';

export const COUNTRY_ACTIONS = {
  loadCountries: createAction('[Country] Load'),
  loadCountriesSuccess: createAction('[Country] Load Success', props<{ data: Country[] }>()),
  loadCountriesFailure: createAction('[Country] Load Error', props<{ error: any }>()),
};
