import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import { of } from 'rxjs';
import { WeatherService } from '../../../services/weather.service';
import { WEATHER_ACTIONS } from '../../actions/weather/weather.actions';
import { MESSAGE_ACTIONS } from '../../actions/message/message.actions';
import { ForecastService } from '../../../services/forecast.service';

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService,
    private forecastService: ForecastService
  ) {}

  addWeatherLocation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WEATHER_ACTIONS.addWeatherLocation),
      switchMap(({ zipCode }) => {
        return this.weatherService.getWeatherByZipCode(zipCode).pipe(
          map(weather => WEATHER_ACTIONS.addWeatherLocationSuccess({ zipCode, weather })),
          catchError((error: any) => of(WEATHER_ACTIONS.addWeatherLocationFailure({ error })))
        );
      })
    );
  });

  addWeatherLocationErrorMessage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WEATHER_ACTIONS.addWeatherLocationFailure),
      map(({ error }) => {
        const message =
          error.status === 404 ? 'Cannot find weather for this ZIP code' : error.message;
        return MESSAGE_ACTIONS.error({ title: 'Adding weather location failed', message });
      })
    );
  });

  loadForecast$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WEATHER_ACTIONS.loadForecast),
      switchMap(({ zipCode }) => {
        return this.forecastService.getForecastByZipCode(zipCode).pipe(
          map(forecast => WEATHER_ACTIONS.loadForecastSuccess({ zipCode, forecast })),
          catchError((error: any) => of(WEATHER_ACTIONS.loadForecastFailure({ error })))
        );
      })
    );
  });
}
