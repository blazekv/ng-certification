import { Action, createReducer, on } from '@ngrx/store';
import { WEATHER_ACTIONS } from '../../actions/weather/weather.actions';
import { Weather } from '../../../model/weather';
import { Forecast } from '../../../model/forecast';
import { RequestState } from '../../../model/request-state';
import { Country } from '../../../model/country';
import { COUNTRY_ACTIONS } from '../../actions/country/country.actions';

export const countryFeatureKey = 'country';

export interface CountryState {
  data: Country[];
}

export const countryInitialState: CountryState = {
  data: [],
};

const reducer = createReducer(
  countryInitialState,
  on(COUNTRY_ACTIONS.loadCountriesSuccess, (state, { data }) => {
    return {
      ...state,
      data,
    };
  })
);

export function countryReducer(state: CountryState | undefined, action: Action) {
  return reducer(state, action);
}
