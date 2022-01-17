import { createSelector } from '@ngrx/store';
import { getCountryState } from '../reducers';
import { CountryState } from '../reducers/country/country.reducer';

export const COUNTRY_SELECTORS = {
  countries: createSelector(getCountryState, (entityState: CountryState) => entityState.data),
};
