import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CountryService } from '@services/country.service';
import { COUNTRY_ACTIONS } from '../../actions/country/country.actions';
import { of } from 'rxjs';

@Injectable()
export class CountryEffects {
  constructor(private actions$: Actions, private countryService: CountryService) {}

  addWeatherLocation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(COUNTRY_ACTIONS.loadCountries),
      mergeMap(() => {
        return this.countryService.getAllCountries().pipe(
          map(countries => COUNTRY_ACTIONS.loadCountriesSuccess({ data: countries })),
          catchError((error: any) => of(COUNTRY_ACTIONS.loadCountriesFailure({ error })))
        );
      })
    );
  });
}
